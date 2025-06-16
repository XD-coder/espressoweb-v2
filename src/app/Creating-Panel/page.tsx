'use client';

import React, { useState, useEffect } from 'react';
import { useAuth, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

const MakingPanel = () => {
  const { userId } = useAuth();
  const { user } = useUser();
  const [panelPassword, setPanelPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const userEmail = user?.emailAddresses?.[0]?.emailAddress;
  useEffect(() => {
    if (userId) {
      fetch(`http://play.espressohost.xyz:25572/get-password`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userID: userId,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setPanelPassword(data);
          setShowPopup(true);
        })
    }
  }, [userId])

  if (!userId) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary-100 to-primary-300">
        <div className="p-10 bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-primary-200 transform transition-all duration-300 hover:scale-[1.02]">
          <p className="text-2xl text-primary-800 font-semibold">Please log in to access your panel</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary-100 to-primary-300">
      <div className="text-center p-10 bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl max-w-2xl w-full mx-4 border border-primary-200">
        <h1 className="text-4xl font-extrabold text-primary-900 mb-8 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text ">Panel Access</h1>
        <p className="text-xl text-primary-800 mb-6">Email: <span className="font-semibold text-accent-600 bg-accent-50 px-3 py-1 rounded-full">{userEmail}</span></p>
        {error && <p className="text-red-500 mt-4 p-4 bg-red-50 rounded-xl border border-red-200 animate-pulse">{error}</p>}

        {showPopup && (
          <div className="fixed inset-0 bg-primary-900/70 backdrop-blur-md flex items-center justify-center z-50 animate-fadeIn">
            <div className="bg-white/95 p-10 rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100 hover:scale-[1.02]">
              <h2 className="text-3xl font-extrabold mb-8 text-primary-900 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text ">Panel Password</h2>
              <div className="bg-primary-50 p-6 rounded-xl mb-8 border border-primary-200">
                <p className="text-xl text-primary-700 mb-4">Your panel password is:</p>
                <div className="mt-2 font-mono text-xl text-accent-600 bg-accent-50 px-6 py-4 rounded-xl select-all border-2 border-accent-200 hover:border-accent-400 transition-colors duration-200">{panelPassword}</div>
              </div>
              <button
                onClick={() => router.push('/')}
                className="w-full px-8 py-4 bg-primary-600 text-white text-xl font-semibold rounded-xl hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-500 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MakingPanel;
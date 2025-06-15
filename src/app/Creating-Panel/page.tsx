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
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="p-8 bg-white rounded-xl shadow-lg">
          <p className="text-xl text-gray-700 font-medium">Please log in to access your panel.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-2xl w-full mx-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Panel Access</h1>
        <p className="text-lg text-gray-800 mb-4">Email: <span className="font-semibold text-blue-600">{userEmail}</span></p>
        {error && <p className="text-red-500 mt-4 p-3 bg-red-50 rounded-lg">{error}</p>}

        {showPopup && panelPassword && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full mx-4 transform transition-all">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Panel Password</h2>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-lg text-gray-700">Your panel password is:</p>
                <div className="mt-2 font-mono text-lg text-green-600 bg-green-50 px-4 py-2 rounded-lg select-all">{panelPassword}</div>
              </div>
              <button
                onClick={() => router.push('/')}
                className="w-full px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
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
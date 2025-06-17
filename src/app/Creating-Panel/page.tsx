'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const MakingPanel = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 10000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary-100 to-primary-300">
      <div className="text-center p-10 bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl max-w-2xl w-full mx-4 border border-primary-200">
        <h1 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">Panel Password Sent!</h1>
        <p className="text-xl text-primary-700 mb-8">Please check your email for your panel password.</p>
        <p className="text-lg text-primary-600 mb-8">You will be redirected to home page in 10 seconds...</p>
        <button
          onClick={() => router.push('/')}
          className="w-full px-8 py-4 bg-accent-500 text-white text-xl font-semibold rounded-xl hover:bg-accent-600 focus:outline-none focus:ring-4 focus:ring-accent-500 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
        >
          Go to Home Page
        </button>
      </div>
    </div>
  );
};

export default MakingPanel;
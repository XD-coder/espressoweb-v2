"use client"
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ThanksPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('https://control.espressohost.xyz');
    }, 5000); // Redirect after 5 seconds

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <h1 className="text-4xl font-bold text-green-600 dark:text-green-400 mb-4">Thank You!</h1>
        <p className="text-lg mb-6">Your payment was successful. We appreciate your business!</p>
        <p className="text-md mb-8">You will be redirected to the control panel shortly.</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          If you are not redirected automatically, please click <a href="https://control.espressohost.xyz" className="text-blue-600 dark:text-blue-400 hover:underline">here</a>.
        </p>
      </div>
    </div>
  );
};

export default ThanksPage;
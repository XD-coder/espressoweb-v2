'use client';

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';

interface TrialClaimProps {
  onSuccess: () => void;
  onError: (message: string) => void;
}

export default function TrialClaim({ onSuccess, onError }: TrialClaimProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const { isSignedIn, user } = useUser();

  const claimTrial = async () => {
    // Check if user is signed in
    if (!isSignedIn || !user) {
      onError('You must be signed in to claim a free trial');
      return;
    }

    const userEmail = user.primaryEmailAddress?.emailAddress;
    if (!userEmail) {
      onError('Could not retrieve your email address');
      return;
    }

    setIsProcessing(true);

    try {
      const response = await fetch('https://ws.edithbot.xyz/trial', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "email": userEmail,
          "promo": 'trial100'
        }),
      });

      if (response.status === 200) {
        onSuccess();
      } else if (response.status === 401) {
        onError('You have already claimed a free trial');
      } else if (response.status === 406) {
        onError('This promotion has expired');
      } else {
        onError('Something went wrong. Please try again later');
      }
    } catch (error) {
      console.error('Error claiming trial:', error);
      onError('Network error. Please check your connection and try again');
    } finally {
      setIsProcessing(false);
    }
  };  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        claimTrial();
      }}
      disabled={isProcessing || !isSignedIn}
      style={{ 
        pointerEvents: 'auto', 
        cursor: isProcessing || !isSignedIn ? 'not-allowed' : 'pointer',
        position: 'relative'
      }}
      className={`w-full bg-gradient-to-r from-primary-600 to-accent-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex justify-center items-center z-[30000] ${
        isProcessing || !isSignedIn ? 'opacity-70' : ''
      }`}
    >
      {isProcessing ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Processing...
        </>
      ) : !isSignedIn ? (
        'Sign in to Claim'
      ) : (
        'Claim Now'
      )}
    </button>
  );
}

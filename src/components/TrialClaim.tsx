'use client';

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import { Loader2, Gift, LogIn } from 'lucide-react';

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
  };  
    return (
    <motion.button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        claimTrial();
      }}
      disabled={isProcessing || !isSignedIn}
      whileHover={!isProcessing && isSignedIn ? { scale: 1.03 } : {}}
      whileTap={!isProcessing && isSignedIn ? { scale: 0.97 } : {}}
      className={`
        relative w-full 
        bg-gradient-to-r from-primary to-accent 
        text-primary-foreground
        font-medium text-sm sm:text-base
        py-3 sm:py-3.5 px-4 sm:px-6
        rounded-[var(--radius)]
        flex justify-center items-center gap-2 sm:gap-2.5
        transition-all duration-300
        z-10
        focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:focus:ring-offset-background
        ${
          isProcessing || !isSignedIn 
            ? 'opacity-70 cursor-not-allowed' 
            : 'shadow-[var(--shadow)] hover:shadow-[var(--shadow-md)] hover:shadow-primary/20 cursor-pointer'
        }
      `}
      aria-busy={isProcessing}
      aria-label={
        isProcessing 
          ? "Processing trial claim" 
          : !isSignedIn 
            ? "Sign in to claim free trial" 
            : "Claim free trial"
      }
    >
      {isProcessing ? (
        <>
          <Loader2 className="h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
          <span className="whitespace-nowrap">Processing...</span>
        </>
      ) : !isSignedIn ? (
        <>
          <LogIn className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
          <span className="whitespace-nowrap">Sign in to Claim</span>
        </>
      ) : (
        <>
          <Gift className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
          <span className="whitespace-nowrap">Claim Free Trial</span>
        </>
      )}
      
      {/* Animated shine effect on hover */}
      <div className="absolute inset-0 overflow-hidden rounded-[var(--radius)] pointer-events-none">
        <motion.div 
          className="absolute inset-0 opacity-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full"
          animate={!isProcessing && isSignedIn ? {
            translateX: ["100%", "-100%"],
            opacity: [0, 0.2, 0],
          } : {}}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1.5
          }}
        />
      </div>
    </motion.button>
  );
}

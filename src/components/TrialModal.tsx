'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import TrialClaim from './TrialClaim';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
}

export default function TrialModal({ isOpen, onClose, planName }: TrialModalProps) {
  const [mounted, setMounted] = useState(false);
  const [claimStatus, setClaimStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  // For client-side only rendering
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const handleSuccess = () => {
    setClaimStatus('success');
  };

  const handleError = (message: string) => {
    setClaimStatus('error');
    setErrorMessage(message);
  };

  const handleClose = () => {
    setClaimStatus('idle');
    setErrorMessage('');
    onClose();
  };

  const renderContent = () => {
    if (claimStatus === 'success') {
      return (
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Trial Claimed Successfully!</h3>
          <p className="text-gray-600 mb-6">Your free server has been provisioned. You'll receive an email with login details shortly.</p>
          <div className="flex justify-center">
            <button
              onClick={handleClose}
              className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-6 rounded-lg"
            >
              Done
            </button>
          </div>
        </div>
      );
    } else if (claimStatus === 'error') {
      return (
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Unable to Claim Trial</h3>
          <p className="text-red-600 mb-6">{errorMessage}</p>
          <div className="flex justify-center">
            <button
              onClick={handleClose}
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Claim Your Free Trial</h2>
          <p className="text-gray-600 mb-6">
            You're about to claim a 1-month free trial of our {planName} hosting plan. This includes 2GB RAM, 4GB storage, and all features of our paid plans.
          </p>
          <div className="mb-6">
            <TrialClaim onSuccess={handleSuccess} onError={handleError} />
          </div>
          <div className="text-center">
            <button
              onClick={handleClose}
              className="text-gray-600 hover:text-gray-800 font-medium"
            >
              Cancel
            </button>
          </div>
        </>
      );
    }
  };

  if (!mounted) return null;  return isOpen ? createPortal(
    <div className="fixed inset-0 z-[9999] overflow-y-auto" style={{ pointerEvents: 'auto' }}>
      <div 
        className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center"
        onClick={handleClose} // Click anywhere outside the modal to close it
        style={{ pointerEvents: 'auto' }}
      >
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        
        <div 
          className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full p-6 z-[10000]"
          onClick={(e) => e.stopPropagation()} // Prevent clicks inside the modal from closing it
          style={{ pointerEvents: 'auto' }}
        >
          {renderContent()}
        </div>
      </div>
    </div>,
    document.body
  ) : null;
}

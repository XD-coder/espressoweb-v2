'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import TrialClaim from './TrialClaim';
import { CheckCircle2, XCircle, X, Gift, Coffee } from 'lucide-react';

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

  // Control scroll locking
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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

  // Animation variants
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.95,
      y: 20
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        type: "spring", 
        damping: 25, 
        stiffness: 300 
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: { duration: 0.2 }
    }
  };

  const renderContent = () => {    if (claimStatus === 'success') {
      return (
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          id="modal-description"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-accent/10 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
          </div>
          
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3" id="modal-title">
            Trial Claimed Successfully!
          </h3>
          
          <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base max-w-sm mx-auto">
            Your free server has been provisioned. You'll receive an email with login details shortly.
          </p>
          
          <motion.button
            onClick={handleClose}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-r from-primary to-primary-light 
              text-primary-foreground font-medium 
              py-2.5 px-8 rounded-[var(--radius)] 
              shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] hover:shadow-primary/20 
              transition-all duration-300
              flex items-center justify-center gap-2 mx-auto
              focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:focus:ring-offset-background"
          >
            <Coffee className="h-4 w-4" />
            <span>Done</span>
          </motion.button>
        </motion.div>
      );    } else if (claimStatus === 'error') {
      return (
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          role="alert"
          id="modal-description"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-destructive/10 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
            <XCircle className="w-8 h-8 sm:w-10 sm:h-10 text-destructive" />
          </div>
          
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3" id="modal-title">
            Unable to Claim Trial
          </h3>
          
          <p className="text-destructive mb-6 sm:mb-8 max-w-sm mx-auto text-sm sm:text-base">
            {errorMessage}
          </p>
          
          <motion.button
            onClick={handleClose}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-muted text-muted-foreground font-medium 
              py-2.5 px-8 rounded-[var(--radius)] 
              transition-all duration-200 hover:bg-muted/80 
              flex items-center justify-center gap-2 mx-auto
              focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background"
          >
            Close
          </motion.button>
        </motion.div>
      );    } else {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.2 }}
          id="modal-description"
        >
          {/* Coffee bean decorations */}
          <div className="absolute -z-10 opacity-5" aria-hidden="true">
            <div className="absolute -top-10 -left-10 w-24 sm:w-32 h-24 sm:h-32 rotate-12">
              <Coffee className="w-full h-full text-primary" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-20 sm:w-24 h-20 sm:h-24 -rotate-12">
              <Coffee className="w-full h-full text-primary" />
            </div>
          </div>
          
          {/* Header with icon */}
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
            <div className="p-2 rounded-full bg-accent/10">
              <Gift className="h-5 sm:h-6 w-5 sm:w-6 text-accent" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground" id="modal-title">
              Claim Your Free Trial
            </h2>
          </div>
          
          <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
            You're about to claim a 1-month free trial of our {planName} hosting plan. This includes 2GB RAM, 4GB storage, and all features of our paid plans.
          </p>
          
          <div className="mb-6 sm:mb-8">
            <TrialClaim onSuccess={handleSuccess} onError={handleError} />
          </div>
          
          <div className="text-center">
            <motion.button
              onClick={handleClose}
              className="text-muted-foreground hover:text-foreground font-medium 
                transition-colors duration-200 p-2 rounded-md 
                focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Cancel
            </motion.button>
          </div>
        </motion.div>
      );
    }
  };

  if (!mounted) return null;  
    return isOpen ? createPortal(
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-[9999] overflow-y-auto backdrop-blur-sm flex items-center justify-center p-4"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={overlayVariants}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        {/* Dark overlay with click handler to close */}
        <motion.div 
          className="fixed inset-0 bg-background/80 dark:bg-foreground/30" 
          onClick={handleClose}
          aria-hidden="true"
        />
        
        {/* Modal container */}
        <motion.div 
          className="relative bg-background border border-border 
            rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)] 
            w-[95%] sm:w-full max-w-md 
            p-4 sm:p-6 md:p-8 
            overflow-hidden m-2 sm:m-0
            focus:outline-none"
          variants={modalVariants}
          onClick={(e) => e.stopPropagation()}
          tabIndex={-1}
        >
          {/* Top gradient bar */}
          <div 
            className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-accent"
            aria-hidden="true"
          ></div>
          
          {/* Close button */}
          <motion.button
            onClick={handleClose}
            className="absolute top-4 right-4 
              text-muted-foreground hover:text-foreground 
              rounded-full w-8 h-8 
              flex items-center justify-center 
              focus:outline-none focus-visible:ring-2 focus-visible:ring-accent
              transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </motion.button>
          
          {renderContent()}
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  ) : null;
}

"use client";

import { motion } from 'framer-motion';

const FloatingCTA = () => {
  return (
    <motion.div
      className="fixed bottom-5 right-5 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 100 }}
    >
      <motion.a 
        href="#plans"
        className="inline-flex items-center gap-2 bg-accent text-white px-5 py-3 rounded-full font-bold shadow-lg hover:bg-accent-dark transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <span>GET STARTED - 20% OFF (ORDERS UP TO ₹500)</span>
      </motion.a>
    </motion.div>
  );
};

export default FloatingCTA;

"use client";

import { motion } from 'framer-motion';

const StickyAnnouncement = () => {
  return (
    <motion.div 
      className="sticky top-[64px] z-40 w-full bg-gradient-to-r from-accent/90 to-primary/90 backdrop-blur-sm text-white py-2 border-y border-accent/20 shadow-md"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex h-8 w-8 rounded-full bg-white/20 items-center justify-center">
            <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <p className="text-sm font-medium">
            <span className="font-bold">LAST CHANCE:</span> Summer Sale ends today! Get <span className="font-bold underline">30% OFF</span> all plans
          </p>
        </div>
        <a 
          href="#plans" 
          className="mt-2 sm:mt-0 bg-white text-accent text-sm font-bold px-4 py-1 rounded-full hover:bg-accent-foreground hover:text-accent transition-colors duration-300 flex items-center gap-1"
        >
          <span>Claim Now</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default StickyAnnouncement;

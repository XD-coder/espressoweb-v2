"use client";

import { motion } from 'framer-motion';

const ConversionBooster = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-primary/10 to-accent/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-repeat opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-card border border-border rounded-xl shadow-xl p-6 md:p-10 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/3">
              <div className="relative w-full aspect-square max-w-[250px] mx-auto">
                <div className="absolute inset-0 bg-accent opacity-20 rounded-full blur-2xl"></div>
                <div className="relative z-10 bg-accent/20 rounded-full w-full h-full flex flex-col items-center justify-center transform -rotate-12">                  <div className="text-5xl md:text-6xl font-black text-accent">20%</div>
                  <div className="text-xl md:text-2xl font-black text-accent">OFF</div>
                  <div className="text-xs font-medium text-accent mt-1">Orders up to ₹500</div>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Ready to Start Your Minecraft Adventure?</h2>
              <p className="text-foreground/80 mb-6">
                Join thousands of satisfied players today. Our servers are ready to go, with instant setup and 24/7 support. Don't miss the limited-time offer!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <motion.a 
                  href="#plans"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-accent text-white px-6 py-3 rounded-lg font-bold shadow-lg flex items-center justify-center gap-2 group"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>GET YOUR SERVER NOW</span>
                </motion.a>
                <a href="#features" className="border-2 border-primary hover:bg-primary/10 text-primary px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2">
                  <span>Learn More</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionBooster;

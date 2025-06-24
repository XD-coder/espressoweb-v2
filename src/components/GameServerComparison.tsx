"use client";

import { motion } from 'framer-motion';

const GameServerComparison = () => {
  return (
    <section className="py-16 md:py-20 bg-card/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/hero-bg.png')] opacity-5 bg-repeat"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-gradient">Espresso Hosting</span>?
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            See how we compare to other Minecraft server hosts. We offer the best performance and value for your money.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto bg-background border border-border rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-4 text-sm md:text-base">
            <div className="bg-primary/5 p-3 md:p-4 font-medium">Features</div>
            <div className="bg-accent/10 p-3 md:p-4 font-bold text-accent">Espresso Hosting</div>
            <div className="p-3 md:p-4 font-medium text-foreground/80">Competitor A</div>
            <div className="p-3 md:p-4 font-medium text-foreground/80">Competitor B</div>
          </div>
          
          {[
            { feature: "Server Setup Time", espresso: "60 Seconds", compA: "5 Minutes", compB: "10 Minutes" },
            { feature: "Free Domain", espresso: "Included", compA: "Extra Cost", compB: "Extra Cost" },
            { feature: "Storage Type", espresso: "NVMe SSD", compA: "SSD", compB: "HDD/SSD" },
            { feature: "DDoS Protection", espresso: "Enterprise Grade", compA: "Basic", compB: "Basic" },
            { feature: "Support Response", espresso: "< 30 Minutes", compA: "< 12 Hours", compB: "1-2 Days" },
            { feature: "Money-Back Guarantee", espresso: "7 Days", compA: "3 Days", compB: "None" },
          ].map((row, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
              className={`grid grid-cols-4 text-sm border-t border-border ${i % 2 === 1 ? 'bg-primary/5' : ''}`}
            >
              <div className="p-3 md:p-4 font-medium">{row.feature}</div>
              <div className="p-3 md:p-4 text-accent font-bold">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1.5 flex-shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {row.espresso}
                </div>
              </div>
              <div className="p-3 md:p-4 text-foreground/70">{row.compA}</div>
              <div className="p-3 md:p-4 text-foreground/70">{row.compB}</div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-10 text-center"
        >
          <a 
            href="#plans" 
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-all duration-300"
          >
            <span>Choose the Best - Get Started Now</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GameServerComparison;

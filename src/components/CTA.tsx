"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from 'next/image';

const CTA = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10"></div>
      
      {/* Decorative shapes */}
      <motion.div 
        className="absolute top-0 left-0 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"
        initial={{ opacity: 0.5, x: -100 }}
        animate={{ opacity: 0.8, x: -50 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>
      
      <motion.div 
        className="absolute bottom-0 right-0 w-72 h-72 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl"
        initial={{ opacity: 0.5, x: 100 }}
        animate={{ opacity: 0.8, x: 50 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: 1 }}
      ></motion.div>
      
      {/* Coffee beans floating */}
      <motion.div 
        className="absolute top-20 right-24 opacity-10 dark:opacity-20"
        animate={{ 
          rotate: 360,
          y: [0, -15, 0],
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <Image src="/coffee-bean.svg" alt="" width={60} height={60} />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-24 left-36 opacity-10 dark:opacity-20"
        animate={{ 
          rotate: -360,
          y: [0, 15, 0],
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <Image src="/coffee-bean.svg" alt="" width={40} height={40} />
      </motion.div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-card border border-border rounded-[var(--radius-lg)] shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
          <div className="text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to start your <span className="text-gradient">Minecraft server</span>?
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Choose a plan that fits your needs and get your Minecraft server
              running in minutes. If you have any questions, our support team is
              always here to help.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link 
                href="/plans" 
                className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3 rounded-[var(--radius)] font-medium text-lg shadow-sm transition-all hover:shadow"
              >
                View Plans
              </Link>
              <Link 
                href="/about#contact-us" 
                className="bg-secondary hover:bg-secondary-dark text-secondary-foreground px-8 py-3 rounded-[var(--radius)] font-medium text-lg"
              >
                Contact Support
              </Link>
            </motion.div>
          </div>
          
          {/* Testimonial quote */}
          <motion.div 
            className="mt-12 border-t border-border pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="italic text-muted-foreground">
              "My server has been running flawlessly for months. The performance is exceptional and customer support is always available when I need them."
            </p>
            <p className="mt-2 font-medium">— Happy Customer</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

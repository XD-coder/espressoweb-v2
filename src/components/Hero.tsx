"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Cpu, Coffee } from 'lucide-react';

const Hero = () => {  return (    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden bg-gradient-to-b from-background to-primary/5 dark:from-background dark:to-primary/10">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30 dark:opacity-20">
        <div className="absolute -top-48 -right-48 w-72 sm:w-96 h-72 sm:h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 -left-48 w-72 sm:w-96 h-72 sm:h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Limited Time Offer Banner - IMPROVED with animation */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-accent to-primary py-2 text-center text-white z-30">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.p 
            className="text-sm md:text-base font-medium"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            <span className="font-bold">⚡ FLASH SALE ENDS TODAY:</span> 20% OFF all plans (up to ₹500) + Free setup! Use code: <span className="font-bold bg-white/30 px-2 py-1 rounded ml-1 animate-pulse">SUMMER25</span>
          </motion.p>
        </motion.div>
      </div>
      
      {/* Live Counter */}
      <motion.div 
        className="absolute top-12 right-4 md:right-12 z-20 bg-background/70 backdrop-blur-md border border-border rounded-full px-4 py-1 text-xs shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
      >
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-foreground font-medium">            <span className="font-semibold">
              43
            </span> people viewing this page
          </span>
        </div>
      </motion.div>
      
      {/* Floating Sign - Easter Egg */}
      <motion.div 
        className="absolute top-10 left-[10%] md:left-[5%] z-20 hidden md:block"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut" 
        }}
      >
        <Image 
          src="/sign.png" 
          alt="Espresso Hosting Sign" 
          width={120} 
          height={120}
          sizes="(max-width: 768px) 0vw, 120px"
          className="drop-shadow-[var(--shadow)] hover:drop-shadow-[var(--shadow-md)] transition-all duration-300 cursor-pointer" 
          priority
        />
      </motion.div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 md:gap-12">          {/* Content Block */}          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 text-center lg:text-left mt-6 lg:mt-0 px-2"
          >
            {/* Trust badges - ENHANCED with animation and stronger content */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-2 mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="inline-flex items-center bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Trusted by 500+ players</span>
              </div>
              <div className="inline-flex items-center bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>60-Second Setup</span>
              </div>
            </motion.div>
            
            {/* Headline - ENHANCED with stronger price focus */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
              <span className="relative inline-block">
                <span className="absolute -top-6 -right-6 bg-accent text-white text-sm px-3 py-1 rounded-full font-bold transform rotate-12 animate-pulse">20% OFF (₹500 max)</span>
                Premium <span className="text-gradient">Minecraft Server</span>
              </span> Hosting <br className="hidden lg:block" /><span className="text-accent">Starting at Just ₹200/mo *</span>
            </h1>
            
            {/* Subheading - ENHANCED with stronger benefits */}
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-3 md:mb-4 max-w-lg mx-auto lg:mx-0">
              Get your own Minecraft server up and running in <span className="font-bold">less than 60 seconds</span>. High-performance hardware with <span className="font-bold text-accent">ultra-low latency</span>, perfect for mods, plugins & large player bases.
            </p>
            
            {/* Quick benefits row */}
            <div className="mb-6 flex flex-wrap justify-center lg:justify-start gap-3">
              {["99.9% Uptime Guarantee", "24/7 Expert Support", "Instant Setup", "No Hidden Fees"].map((benefit, i) => (
                <div key={i} className="flex items-center text-sm text-foreground/80">
                  <svg className="w-4 h-4 text-accent mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  {benefit}
                </div>
              ))}
            </div>
            
            <div className="mb-6 md:mb-8 flex flex-wrap gap-2 justify-center lg:justify-start">
              <motion.div 
                className="flex items-center gap-1.5 bg-primary/20 text-primary px-3 md:px-4 py-2 rounded-[var(--radius-full)] font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <ShieldCheck className="h-4 w-4 mr-1" />
                <span className="text-xs md:text-sm">Anti-DDoS Protection</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-1.5 bg-primary/20 text-primary px-3 md:px-4 py-2 rounded-[var(--radius-full)] font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Cpu className="h-4 w-4 mr-1" />
                <span className="text-xs md:text-sm">NVMe SSD Storage</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-1.5 bg-primary/20 text-primary px-3 md:px-4 py-2 rounded-[var(--radius-full)] font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Coffee className="h-4 w-4 mr-1" />
                <span className="text-xs md:text-sm">Instant Activation</span>
              </motion.div>
            </div>
              {/* Enhanced CTAs */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 md:gap-4">
              <motion.a
                href="#plans"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-accent hover:bg-accent-dark text-white 
                  px-5 md:px-8 py-3 md:py-4 
                  rounded-[var(--radius)] font-bold 
                  transition-all duration-300 
                  shadow-[var(--shadow)] hover:shadow-[var(--shadow-lg)]
                  text-sm md:text-base
                  focus:outline-none focus:ring-2 focus:ring-accent-light focus:ring-offset-2 dark:focus:ring-offset-background
                  flex items-center justify-center relative overflow-hidden group"
              >
                {/* Animated shine effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-white opacity-0 -translate-x-full"
                    animate={{ translateX: ['100%', '-100%'], opacity: [0, 0.15, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      repeatDelay: 3,
                      ease: "easeInOut" 
                    }}
                  />
                </div>
                <svg className="w-5 h-5 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>GET STARTED NOW</span>
              </motion.a>
              <Link                
                href="#features"
                className="bg-transparent border-2 border-primary text-primary 
                  hover:bg-primary/10 
                  px-5 md:px-6 py-2.5 md:py-3.5 
                  rounded-[var(--radius)] font-semibold 
                  transition-all duration-300 
                  text-sm md:text-base
                  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background
                  flex items-center justify-center"
              >
                <span>See Features</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1.5">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </Link>
            </div>
              {/* Enhanced Testimonial snippet with animated scrolling */}
            <motion.div 
              className="mt-6 md:mt-8 bg-card/60 backdrop-blur-sm border border-border rounded-lg p-4 max-w-lg mx-auto lg:mx-0 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              {/* Rating header */}
              <div className="flex items-center gap-3 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium">4.9 out of 5 stars from 200+ reviews</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex space-x-1">
                      {['Trustpilot', 'Google', 'Discord'].map((platform, i) => (
                        <span key={i} className="bg-primary/20 text-primary text-xs px-2 py-0.5 rounded-full">{platform}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Dynamic testimonial carousel - faked with CSS animation */}
              <div className="relative h-[60px] overflow-hidden">
                <div className="animate-testimonialScroll">
                  <p className="text-sm italic text-foreground/80 pt-2">"My Minecraft server was up and running in minutes. Espresso Hosting delivers on performance and their support team is incredibly responsive!"
                  <span className="block text-xs font-medium mt-1">— Aditya R., Server Owner</span>
                  </p>
                  
                  <p className="text-sm italic text-foreground/80 pt-6">"Our modded server runs without any Lag, Support is also great. Best value for money!"
                  <span className="block text-xs font-medium mt-1">— Kartikey M., Community Admin</span>
                  </p>
                  
                  <p className="text-sm italic text-foreground/80 pt-6">"I've tried many hosts before, but Espresso has the best control panel and performance by far. Worth every rupee!"
                  <span className="block text-xs font-medium mt-1">— Priya S., YouTuber</span>
                  </p>
                </div>
              </div>
              
              <style jsx global>{`
                @keyframes testimonialScroll {
                  0%, 25% { transform: translateY(0); }
                  33%, 58% { transform: translateY(-60px); }
                  66%, 91% { transform: translateY(-120px); }
                  100% { transform: translateY(0); }
                }
                .animate-testimonialScroll {
                  animation: testimonialScroll 15s infinite;
                }
              `}</style>
            </motion.div>
          </motion.div>          
            {/* Image Block with 3D effect - ENHANCED with conversion elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[550px]">
              {/* Enhanced Sale tag */}
              <motion.div 
                className="absolute -right-4 -top-4 z-20 bg-accent text-white px-4 py-2 rounded-full font-bold text-sm transform rotate-12 shadow-lg"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <div className="relative">
                  <span className="relative z-10">20% OFF (₹500 max)</span>
                  <div className="absolute inset-0 bg-white opacity-20 blur-sm rounded-full"></div>
                </div>
              </motion.div>
              
              
              {/* Shadow/reflection effect */}
              <div className="absolute bottom-0 left-0 right-0 h-3 sm:h-4 bg-black/20 blur-md rounded-[100%] transform scale-x-[0.85]"></div>
              
              {/* Main image with perspective */}
              <motion.div
                whileHover={{ rotate: -2, y: -5 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Glowing background effect */}
                <div 
                  className="absolute inset-0 rounded-[var(--radius-lg)] bg-gradient-to-tr from-primary to-accent opacity-40 blur-md transform -rotate-3"
                  aria-hidden="true"
                ></div>
                
                <div className="w-full aspect-[3/2] relative">
                  <Image
                    src="/hero-image.gif"
                    alt="Minecraft Server Hosting Interface"
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 70vw, 550px"
                    priority
                    className="rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)] border border-primary/20 transform -rotate-2 transition-all duration-500 hover:rotate-0 object-cover"
                  />
                  
                  {/* Interactive elements overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.a 
                      href="#plans"
                      className="bg-black/70 text-white px-6 py-3 rounded-full backdrop-blur-sm flex items-center gap-2 hover:bg-accent transition-all duration-300 shadow-lg"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(239, 68, 68, 0.9)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="font-bold">Claim Your Server Now</span>
                    </motion.a>
                  </div>
                  
                  {/* Price comparison badge */}
                  <div className="absolute left-4 bottom-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm rounded-lg p-2 shadow-lg border border-border">
                    <div className="text-xs font-medium">
                      <div className="flex items-center justify-between gap-3">
                        <span>Competitors:</span>
                        <span className="line-through text-foreground/60">₹280/mo</span>
                      </div>
                      <div className="flex items-center justify-between gap-3 mt-0.5 text-accent font-bold">
                        <span>Our Price:</span>
                        <span>₹200/mo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div></div>
      </div>
    </section>
  );
};

export default Hero;
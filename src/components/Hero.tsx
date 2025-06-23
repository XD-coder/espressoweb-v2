"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden bg-gradient-to-b from-background to-primary/5 dark:from-background dark:to-primary/10">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30 dark:opacity-20">
        <div className="absolute -top-48 -right-48 w-72 sm:w-96 h-72 sm:h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 -left-48 w-72 sm:w-96 h-72 sm:h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Floating Sign - Easter Egg */}
      <motion.div 
        className="absolute top-4 left-[10%] md:left-[5%] z-20 hidden md:block"
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
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 md:gap-12">          {/* Content Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 text-center lg:text-left mt-6 lg:mt-0 px-2"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
              Premium <span className="text-gradient">Minecraft Server</span> Hosting
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0">
              Unleash the full potential of your Minecraft community with our high-performance, reliable servers. 99.9% uptime guarantee with 24/7 support.
            </p>
            
            <div className="mb-6 md:mb-8 flex flex-wrap gap-2 justify-center lg:justify-start">
              <motion.span 
                className="bg-primary/10 text-primary text-xs md:text-sm px-3 md:px-4 py-1.5 rounded-[var(--radius-full)] font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                NVMe SSD Storage
              </motion.span>
              <motion.span 
                className="bg-primary/10 text-primary text-xs md:text-sm px-3 md:px-4 py-1.5 rounded-[var(--radius-full)] font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                Anti-DDoS Protection
              </motion.span>
              <motion.span 
                className="bg-primary/10 text-primary text-xs md:text-sm px-3 md:px-4 py-1.5 rounded-[var(--radius-full)] font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                One-Click Modpacks
              </motion.span>
              <motion.span 
                className="bg-primary/10 text-primary text-xs md:text-sm px-3 md:px-4 py-1.5 rounded-[var(--radius-full)] font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                Instant Setup
              </motion.span>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 md:gap-4">
              <Link
                href="/plans"
                className="bg-accent hover:bg-accent-dark text-accent-foreground 
                  px-5 md:px-6 py-2.5 md:py-3 
                  rounded-[var(--radius)] font-medium 
                  transition-all duration-300 
                  shadow-[var(--shadow)] hover:shadow-[var(--shadow-md)]
                  text-sm md:text-base
                  focus:outline-none focus:ring-2 focus:ring-accent-light focus:ring-offset-2 dark:focus:ring-offset-background"
              >
                Start Your Server
              </Link>
              <Link
                href="/about"
                className="bg-transparent border border-primary text-primary 
                  hover:bg-primary/10 
                  px-5 md:px-6 py-2.5 md:py-3 
                  rounded-[var(--radius)] font-medium 
                  transition-all duration-300 
                  text-sm md:text-base
                  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background"
              >
                Learn More
              </Link>
            </div>
          </motion.div>          {/* Image Block with 3D effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[550px]">
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
                    onLoadingComplete={(img) => {
                      // This is a placeholder for any onLoad logic you might want to add
                      // For example, you could add animation when the image loads
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>        {/* Animated coffee bean particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: `${Math.random() * 100}%`, 
              y: -50,
              opacity: Math.random() * 0.2 + 0.1,
              scale: Math.random() * 0.3 + 0.2,
              rotate: Math.random() * 360
            }}
            animate={{ 
              y: "150vh",
              rotate: Math.random() * 720
            }}
            transition={{ 
              duration: Math.random() * 20 + 15,
              delay: Math.random() * 5,
              ease: "linear",
              repeat: Infinity
            }}
            className="absolute w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 text-primary/10 dark:text-primary/20"
          >
            <Image 
              src="/coffee-bean.svg" 
              alt="" 
              width={48} 
              height={48} 
              className="w-full h-full filter drop-shadow-sm"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
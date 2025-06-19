"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section
      className="relative py-20 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('/hero-bg.png')` }}
    ><motion.div className="absolute top-0 left-1/6 transform -translate-x-1/2 z-20 t">
          <Image src="/sign.png" alt="Hanging Sign" width={150} height={150} className="drop-shadow-lg transition-all duration-300" />
        </motion.div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between relative z-10">
        {/* Content Block */}        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0"
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Premium <span className="text-accent-600">Minecraft Server</span> Hosting
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Unleash the full potential of your Minecraft community with our high-performance, reliable servers. 99.9% uptime guarantee with 24/7 support.
          </p>
          <div className="mt-4 mb-8 flex flex-wrap gap-2">
            <span className="bg-primary-700 text-white text-sm px-3 py-1 rounded-full">NVMe SSD Storage</span>
            <span className="bg-primary-700 text-white text-sm px-3 py-1 rounded-full">Anti-DDoS Protection</span>
            <span className="bg-primary-700 text-white text-sm px-3 py-1 rounded-full">One-Click Modpacks</span>
            <span className="bg-primary-700 text-white text-sm px-3 py-1 rounded-full">Instant Setup</span>
          </div>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/plans"
              className="bg-accent-500 hover:bg-accent-600 text-primary-950 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg transform hover:scale-105"
              aria-label="View our Minecraft server hosting plans"
            >
              Start Your Server
            </Link>
            <Link
              href="/about"
              className="bg-transparent border-2 border-primary-500 text-primary-500 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-primary-500 hover:text-white transform hover:scale-105"
              aria-label="Learn more about our Minecraft hosting services"
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        {/* Image Block */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:w-1/2 flex justify-center"
        >
          <Image
            src="/hero-image.gif" // Placeholder image
            alt="Gaming Server Setup"
            width={600}
            height={400}
            className="rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
          />
        </motion.div>
      </div>

      {/* Background Elements (Coffee Beans) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-10 left-10 opacity-20"
      >
        <Image src="/coffee-bean.svg" alt="Coffee Bean" width={80} height={80} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.8, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-20 right-20 opacity-20"
      >
        <Image src="/coffee-bean.svg" alt="Coffee Bean" width={100} height={100} />
      </motion.div>
    </section>
  );
};

export default Hero;
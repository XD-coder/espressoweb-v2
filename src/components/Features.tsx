"use client";
import { motion } from 'framer-motion';
import { features } from '../../data'; // Using the existing features data
import Image from 'next/image';
import { 
  ZapIcon, 
  GlobeIcon, 
  LayersIcon, 
  HeadphonesIcon, 
  ShieldIcon, 
  CpuIcon 
} from 'lucide-react';

const iconComponents = {
  Zap: ZapIcon,
  Globe: GlobeIcon,
  Layers: LayersIcon,
  Headphones: HeadphonesIcon,
  Shield: ShieldIcon,
  Cpu: CpuIcon,
};

type IconName = keyof typeof iconComponents;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Features = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/hero-bg.png')] opacity-5 dark:opacity-[0.03] bg-repeat"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Why Choose <span className="text-gradient">Espresso Hosting</span>?
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Discover the advantages that make us the preferred choice for gamers worldwide.
              Our feature-rich platform gives you everything you need to create the perfect gaming environment.
            </p>
          </motion.div>

          {/* Coffee bean decorative element */}
          <motion.div
            className="absolute -top-10 right-0 opacity-10 dark:opacity-20 hidden lg:block"
            animate={{ 
              rotate: 360,
              y: [0, -10, 0],
            }}
            transition={{ 
              rotate: { duration: 30, repeat: Infinity, ease: "linear" },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <Image src="/coffee-bean.svg" alt="" width={80} height={80} />
          </motion.div>
        </div>

        {/* Features grid */}
        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => {
            const IconComponent = iconComponents[feature.icon as IconName];
            return (
              <motion.div
                key={index}
                className="group bg-card hover:bg-card/90 border border-border rounded-[var(--radius)] shadow-sm hover:shadow transition-all duration-300 p-8"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="bg-primary/10 dark:bg-primary/20 rounded-[var(--radius)] w-14 h-14 flex items-center justify-center mb-6 text-primary group-hover:text-accent transition-colors duration-200">
                  {IconComponent && <IconComponent className="h-7 w-7" />}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional feature highlight */}
        <motion.div 
          className="mt-16 md:mt-24 bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 border border-border rounded-[var(--radius-lg)] p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-2xl opacity-70"></div>
                <Image 
                  src="/window.svg" 
                  alt="Server Control Panel" 
                  width={300} 
                  height={300} 
                  className="relative z-10"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Intuitive Control Panel</h3>
              <p className="text-lg text-foreground/80 mb-6">
                Our custom-designed control panel gives you complete control over your Minecraft server. 
                Manage files, install mods, configure settings, and monitor performance with ease - 
                all from a sleek, user-friendly interface accessible from any device.
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-center gap-2 text-foreground/70">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  File Manager
                </li>
                <li className="flex items-center gap-2 text-foreground/70">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Console Access
                </li>
                <li className="flex items-center gap-2 text-foreground/70">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Backup System
                </li>
                <li className="flex items-center gap-2 text-foreground/70">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Player Management
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { founders } from '../../data';
import { Code, Database, Coffee, Github, Linkedin, Twitter } from 'lucide-react';

const iconComponents = {
  Code: Code,
  Database: Database,
  Coffee: Coffee,
};

type IconName = keyof typeof iconComponents;

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  },
  hover: { 
    y: -10,
    scale: 1.03,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { type: "spring", stiffness: 400, damping: 10 }
  }
};

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { type: "spring", stiffness: 100, delay: 0.2 }
  }
};

const Founders = () => {
  const socialIcons = [
    { Icon: Twitter, ariaLabel: "Twitter profile" },
    { Icon: Github, ariaLabel: "GitHub profile" },
    { Icon: Linkedin, ariaLabel: "LinkedIn profile" },
  ];

  return (
    <section className="py-24 bg-[theme(--card)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-[theme(--primary)]"></div>
        <div className="absolute right-10 top-32 w-40 h-40 rounded-full bg-[theme(--accent)]"></div>
        <div className="absolute -right-20 bottom-20 w-72 h-72 rounded-full bg-[theme(--secondary)]"></div>
        <div className="absolute left-1/3 bottom-10 w-24 h-24 rounded-full bg-[theme(--primary-light)]"></div>
      </div>

      {/* Content container */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-[theme(--foreground)] text-4xl md:text-5xl font-bold mb-4"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.2 } }
            }}
          >
            <span className="text-gradient from-[theme(--primary)] to-[theme(--primary-light)]">Meet Our Founders</span>
          </motion.h2>
          
          <motion.div 
            className="w-24 h-1.5 bg-[theme(--accent)] mx-auto rounded-full mb-6"
            variants={{
              hidden: { opacity: 0, width: 0 },
              visible: { opacity: 1, width: 96, transition: { delay: 0.3 } }
            }}
          />
          
          <motion.p 
            className="text-[theme(--muted-foreground)] text-lg max-w-2xl mx-auto"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { delay: 0.4 } }
            }}
          >
            The talented team behind Espresso Hosting, blending technical expertise with passion for delivering exceptional hosting solutions.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 lg:gap-x-10 gap-y-10 md:gap-y-16">
          {founders.map((founder, index) => {
            const IconComponent = iconComponents[founder.icon as IconName];
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.1 }}
                className="bg-[theme(--card)] backdrop-blur-sm border border-[theme(--border)] rounded-[theme(--radius-lg)] shadow-[theme(--shadow)] p-8 flex flex-col items-center text-center relative overflow-hidden group"
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[theme(--primary-light)] to-[theme(--accent)] rounded-t-[theme(--radius-lg)]" />
                
                {/* Icon background decoration */}
                {IconComponent && (
                  <div className="absolute -right-8 -bottom-8 opacity-5 dark:opacity-10">
                    <IconComponent className="w-40 h-40" />
                  </div>
                )}
                
                {/* Profile image */}
                <motion.div 
                  variants={imageVariants}
                  className="relative w-36 h-36 mb-6 rounded-full overflow-hidden"
                >
                  <div className="absolute inset-0 rounded-full p-1.5 bg-gradient-to-br from-[theme(--primary)] to-[theme(--accent)]">
                    <div className="bg-[theme(--card)] h-full w-full rounded-full overflow-hidden p-0.5">                      <Image
                        src={founder.image}
                        alt={founder.name}
                        width={144}
                        height={144}
                        sizes="(max-width: 768px) 120px, 144px"
                        className="rounded-full object-cover w-full h-full"
                        onError={(e) => {
                          // Fallback for image loading errors
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = "https://via.placeholder.com/144?text=Profile";
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-[theme(--foreground)] mb-1">{founder.name}</h3>
                <p className="text-[theme(--accent)] font-medium mb-4 flex items-center gap-2">
                  {IconComponent && <IconComponent className="h-4 w-4" />}
                  {founder.title}
                </p>
                  <p className="text-[theme(--muted-foreground)] mb-6 text-xs sm:text-sm leading-relaxed line-clamp-6 sm:line-clamp-none">
                  {founder.description}
                </p>
                
                
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Founders;
"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { gameCategories, homePagePlans } from '../../data';
import { Check, Gift, Coffee, CoffeeIcon, PackageCheck, ShieldCheck, Cpu, Wifi, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Script from 'next/script';
import TrialModal from './TrialModal';
import Image from 'next/image';

// Feature icon mapping
const featureIcons: Record<string, React.ElementType> = {
  "RAM": Cpu,
  "CPU": Cpu,
  "Disk": PackageCheck,
  "DDoS": ShieldCheck,
  "Support": Wifi,
};

// Plan staggered animation sequence
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const planVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  },
  hover: { 
    y: -10,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { type: "spring", stiffness: 300, damping: 15 }
  }
};

const Plans = () => {
  const router = useRouter();
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  
  // Product schema for SEO
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "ItemList",
    "itemListElement": homePagePlans.map((plan, index) => ({
      "@type": "Product",
      "position": index + 1,
      "name": `Espresso Hosting ${plan.name} - Minecraft Server Hosting`,
      "description": plan.description || `${plan.name} Minecraft server hosting plan with ${plan.features[0]} and ${plan.features[1]}`,
      "offers": {
        "@type": "Offer",
        "price": plan.price.replace('₹', ''),
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
      }
    }))
  };

  // Helper function to get icon component for feature text
  const getFeatureIcon = (feature: string) => {
    for (const [keyword, IconComponent] of Object.entries(featureIcons)) {
      if (feature.includes(keyword)) {
        return <IconComponent className="h-4 w-4" />;
      }
    }
    return <Check className="h-4 w-4" />;
  };

  return (
    <section className="py-24 bg-[theme(--card)] relative overflow-hidden" id="plans">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-full bg-[url('/coffee-bean.svg')] bg-repeat opacity-[0.02] dark:opacity-[0.03]"></div>
        
        {/* Gradient orbs */}
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-[theme(--primary-light)] opacity-10 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-[theme(--accent)] opacity-10 blur-3xl rounded-full"></div>
      </div>
      
      {/* Floating coffee beans */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: `${Math.random() * 100}%`, 
              y: `${Math.random() * 100}%`,
              rotate: Math.random() * 360,
              opacity: 0.3 + (Math.random() * 0.4)
            }}
            animate={{ 
              y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              rotate: [0, 360],
            }}
            transition={{ 
              repeat: Infinity,
              repeatType: "reverse", 
              duration: 15 + (Math.random() * 20),
              ease: "easeInOut"
            }}
            style={{ filter: 'blur(1px)' }}
          >
            <Coffee className="w-6 h-6 text-[theme(--primary)]/30 dark:text-[theme(--primary)]/20" />
          </motion.div>
        ))}
      </div>

      {/* Schema.org markup for structured data */}
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Heading section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >          <h2 className="text-[theme(--foreground)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            <span className="text-gradient from-[theme(--primary)] to-[theme(--primary-light)]">Premium Hosting Plans</span>
          </h2>
          
          <motion.div 
            className="w-16 sm:w-20 md:w-24 h-1 sm:h-1.5 bg-[theme(--accent)] mx-auto rounded-full mb-4 md:mb-6"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "4rem", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
          />
          
          <p className="text-[theme(--muted-foreground)] text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Choose the perfect plan for your Minecraft server, designed for optimal performance and reliability.
          </p>
        </motion.div>

        {/* Plans grid */}        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
        >
          {gameCategories[0].plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={planVariants}
              whileHover="hover"
              className="bg-[theme(--background)] backdrop-blur-sm border border-[theme(--border)] rounded-[theme(--radius-lg)] shadow-[theme(--shadow)] relative overflow-hidden flex flex-col z-10 isolate"
            >
              {/* Plan header with decoration */}              <div className={`p-4 sm:p-6 rounded-t-[theme(--radius-lg)] relative z-10 ${
                plan.popular ? 'bg-gradient-to-br from-[theme(--primary)] to-[theme(--primary-dark)]' : 
                plan.isTrial ? 'bg-gradient-to-br from-[theme(--accent)] to-[theme(--accent-dark)]' :
                'bg-gradient-to-br from-[theme(--primary-light)] to-[theme(--primary)]'
              }`}>
                {/* Popular/Trial badge */}
                {(plan.popular || plan.isTrial) && (
                  <div className="absolute top-0 right-0 translate-y-[-50%] translate-x-[-10%]">
                    <div className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium shadow-lg ${
                      plan.popular ? 'bg-[theme(--accent)] text-[theme(--accent-foreground)]' :
                      'bg-white text-[theme(--primary)]'
                    } flex items-center gap-1`}>
                      {plan.popular && <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />}
                      {plan.isTrial && <Gift className="h-3 w-3 sm:h-3.5 sm:w-3.5" />}
                      <span>{plan.popular ? 'Most Popular' : 'Limited Time'}</span>
                    </div>
                  </div>
                )}
                
                {/* Icon and name */}
                <div className="flex justify-center items-center mb-1.5 sm:mb-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/80 rounded-full flex items-center justify-center mb-2">
                    <Coffee className={`h-5 w-5 sm:h-6 sm:w-6 ${plan.popular || plan.isTrial ? 'text-[theme(--primary)]' : 'text-[theme(--accent)]'}`} />
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white text-center">
                  {plan.name}
                </h3>
              </div>
              
              {/* Price section */}
              <div className="py-6 px-6 text-center border-b border-[theme(--border)]">                <div className="flex items-baseline justify-center">
                  {plan.isTrial ? (
                    <>
                      <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[theme(--accent)]">FREE</span>
                      <span className="text-[theme(--muted-foreground)] ml-1 sm:ml-2 text-xs sm:text-sm">for 1 month</span>
                    </>
                  ) : (
                    <>
                      <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[theme(--primary)]">₹{plan.priceRs}</span>
                      <span className="text-[theme(--muted-foreground)] ml-1 text-xs sm:text-sm">/month</span>
                    </>
                  )}
                </div>
                
                {plan.description && (
                  <p className="text-sm text-[theme(--muted-foreground)] mt-3">{plan.description}</p>
                )}
              </div>
              
              {/* Features list */}
              <div className="p-6 flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * featureIndex }}
                      viewport={{ once: true }}                      className="flex items-center gap-1.5 sm:gap-2.5 text-[theme(--foreground)]"
                    >
                      <span className={`flex-shrink-0 p-1 sm:p-1.5 rounded-full ${
                        plan.popular ? 'bg-[theme(--primary)]/10 text-[theme(--primary)]' :
                        plan.isTrial ? 'bg-[theme(--accent)]/10 text-[theme(--accent)]' :
                        'bg-[theme(--secondary)]/20 text-[theme(--secondary-dark)]'
                      }`}>
                        {getFeatureIcon(feature)}
                      </span>
                      <span className="text-xs sm:text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              {/* Call to action button */}
              <div className="p-6 pt-4">                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    if (plan.isTrial) {
                      setIsTrialModalOpen(true);
                    } else {
                      router.push(`/billing?plancode=${plan.code}&catagory=Minecraft`);
                    }
                  }}
                  className={`w-full py-2.5 sm:py-3 rounded-[theme(--radius)] font-medium text-[theme(--primary-foreground)] flex items-center justify-center gap-1.5 sm:gap-2 transition-all shadow-sm text-xs sm:text-sm md:text-base ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-[theme(--accent)] to-[theme(--accent-light)] hover:shadow-lg hover:shadow-[theme(--accent)]/20'
                      : plan.isTrial
                        ? 'bg-gradient-to-r from-[theme(--accent)] to-[theme(--accent-light)] hover:shadow-lg hover:shadow-[theme(--accent)]/20'
                        : 'bg-gradient-to-r from-[theme(--primary)] to-[theme(--primary-light)] hover:shadow-lg hover:shadow-[theme(--primary)]/20'
                  }`}
                >
                  {plan.isTrial ? (
                    <>
                      <Gift className="h-3.5 sm:h-4 w-3.5 sm:w-4" />
                      <span>Claim Free Trial</span>
                    </>
                  ) : (
                    <>
                      <Coffee className="h-3.5 sm:h-4 w-3.5 sm:w-4" />
                      <span>Order Now</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Trial Modal */}
      <TrialModal 
        isOpen={isTrialModalOpen} 
        onClose={() => setIsTrialModalOpen(false)} 
        planName="On the House"
      />
    </section>
  );
};

export default Plans;
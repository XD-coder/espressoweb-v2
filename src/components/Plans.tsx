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
  "Priority": Wifi,
  "VIP": Wifi,
  "Protection": ShieldCheck,
  "Trial": Gift,
  "Free": Gift,
};

// Plan staggered animation sequence
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3
    }
  }
};

const planVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 100,
      damping: 12
    }
  },
  hover: { 
    y: -8,
    boxShadow: "var(--shadow-lg)",
    scale: 1.02,
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 15 
    }
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
    <section className="py-16 sm:py-20 md:py-24 bg-card relative overflow-visible" id="plans">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute w-full h-full bg-[url('/coffee-bean.svg')] bg-repeat opacity-[0.02] dark:opacity-[0.03]"></div>
        
        {/* Gradient orbs */}
        <div className="absolute -top-48 -right-48 w-72 md:w-96 h-72 md:h-96 bg-primary-light opacity-10 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-48 -left-48 w-72 md:w-96 h-72 md:h-96 bg-accent opacity-10 blur-3xl rounded-full"></div>
      </div>
      
      {/* Floating coffee beans */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: `${Math.random() * 100}%`, 
              y: `${Math.random() * 100}%`,
              rotate: Math.random() * 360,
              opacity: 0.2 + (Math.random() * 0.3)
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
            <Coffee className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary/40 dark:text-primary/20" />
          </motion.div>
        ))}
      </div>

      {/* Schema.org markup for structured data */}
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      
      <div className="container mx-auto px-6 relative z-10">        {/* Enhanced Heading section with countdown timer */}        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          {/* Enhanced sale announcement - more compact on mobile */}
          <motion.div 
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center bg-accent text-white text-[10px] sm:text-xs px-2 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold mb-3 sm:mb-4 shadow-lg max-w-[90%] sm:max-w-none mx-auto"
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 animate-pulse flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="line-clamp-1 sm:line-clamp-none">LIMITED TIME - 20% OFF (ORDERS UP TO ₹500)!</span>
          </motion.div>
          
          {/* Enhanced heading - more compact on mobile */}
          <h2 className="text-foreground text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 px-2 sm:px-0">
            <span className="text-gradient">Start Your Minecraft Server Today</span>
          </h2>
          
          <motion.div 
            className="w-12 sm:w-20 md:w-24 h-1 sm:h-1.5 bg-accent mx-auto rounded-full mb-3 sm:mb-4 md:mb-6"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "6rem", opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.4 }}
          />

          {/* performance guarantee badge - hidden on smallest screens, shown on sm and up */}
          <div className="hidden sm:inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
            <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
            <span className="text-sm font-medium">Seamless performance</span>
          </div>
          
          {/* Enhanced description - more concise on mobile */}
          <p className="text-foreground/80 dark:text-muted-foreground text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-4">
            Join <span className="font-bold text-primary">5000+</span> happy customers with <span className="font-bold">instant setup</span> and <span className="font-bold">24/7 support</span>.
          </p>
          
          {/* Feature badges - more compact on mobile, fewer items */}
          <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 mt-3 sm:mt-4 px-2">
            {/* Only show 3 badges on mobile, all on larger screens */}
            <div className="flex items-center bg-primary/20 text-primary text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-sm">
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"></path>
              </svg>
              <span>Free Domain</span>
            </div>
            <div className="flex items-center bg-primary/20 text-primary text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-sm">
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
              </svg>
              <span>NVMe SSDs</span>
            </div>
            <div className="flex items-center bg-primary/20 text-primary text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-sm">
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              <span>DDoS Protection</span>
            </div>
            <div className="hidden sm:flex items-center bg-primary/20 text-primary text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-sm">
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
              </svg>
              <span>Mod Support</span>
            </div>
            <div className="hidden sm:flex items-center bg-primary/20 text-primary text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-sm">
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span>Daily Backups</span>
            </div>
          </div>
          
          {/* Comparison with competitors - hide on mobile */}
          <div className="hidden sm:block mt-6 max-w-xs mx-auto bg-card/50 border border-border rounded-lg p-3 shadow-sm">
            <p className="text-xs font-medium text-foreground/70 mb-2">Why We're Better Than Competitors:</p>
            <div className="grid grid-cols-2 gap-2 text-xs text-left">
              <div className="flex items-center gap-1.5">
                <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Lower Prices</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Faster Performance</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Better Support</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
                <span>No Hidden Fees</span>
              </div>
            </div>
          </div>
        </motion.div>{/* Plans grid - limited to 4 featured plans */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "-50px" }}
          // Changed to single column on smallest screens, 2 in mid screens, 4 in large screens
          // Increased gap between plans for better separation on small screens
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-6"
        >
          {/* Only show the first 4 plans (trial + 3 paid plans) */}
          {gameCategories[0].plans.slice(0, 4).map((plan, index) => (
            <motion.div
              key={index}
              variants={planVariants}
              whileHover="hover"
              className="bg-background backdrop-blur-sm border border-border rounded-[var(--radius-lg)] 
                shadow-[var(--shadow)] relative flex flex-col z-10 isolate
                transition-all duration-300 group 
                max-w-sm mx-auto w-full" // Added max-width and center alignment for mobile
            >
              {/* Hover effect overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-primary/[0.04] dark:bg-primary/[0.05] 
                transition-opacity duration-500 pointer-events-none z-0"></div>
              
              {/* Plan header with decoration - simplified for mobile */}
              <div className={`p-4 rounded-t-[var(--radius-lg)] relative z-10 ${
                plan.popular ? 'bg-gradient-to-br from-primary to-primary-dark' : 
                plan.isTrial ? 'bg-gradient-to-br from-accent to-accent-dark' :
                'bg-gradient-to-br from-primary-light to-primary'
              }`}>
                {/* Popular/Trial badge - Repositioned for better mobile visibility */}
                {(plan.popular || plan.isTrial) && (
                  <div className="absolute -top-1 right-1 sm:top-0 sm:right-[-5%] sm:translate-y-[-50%]">
                    <motion.div 
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 + (index * 0.1), duration: 0.5, type: "spring" }}
                      className={`px-2 py-1 rounded-full text-[9px] sm:text-xs font-medium shadow-[var(--shadow)] ${
                        plan.popular ? 'bg-accent text-accent-foreground' :
                        'bg-white text-primary'
                      } flex items-center gap-1 whitespace-nowrap`}
                    >
                      {plan.popular && <Sparkles className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5" />}
                      {plan.isTrial && <Gift className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5" />}
                      <span>{plan.popular ? 'Most Popular' : 'Limited Time'}</span>
                    </motion.div>
                  </div>
                )}
                
                {/* Icon and name - simplified */}
                <div className="flex justify-center items-center mb-2">
                  <motion.div 
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-9 h-9 sm:w-12 sm:h-12 bg-white/80 rounded-full flex items-center justify-center
                      shadow-[var(--shadow)] group-hover:shadow-[var(--shadow-md)] transition-all duration-300"
                  >
                    <Coffee className={`h-4 w-4 sm:h-6 sm:w-6 ${plan.popular || plan.isTrial ? 'text-primary' : 'text-accent'}`} />
                  </motion.div>
                </div>
                
                <h3 className="text-lg sm:text-2xl font-bold text-white text-center">
                  {plan.name}
                </h3>
              </div>

              {/* Price section - more compact on mobile */}
              <div className="py-3 sm:py-6 px-4 sm:px-6 text-center border-b border-border">
                <motion.div 
                  className="flex items-baseline justify-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.05), duration: 0.5 }}
                >
                  {plan.isTrial ? (
                    <>
                      <span className="text-xl sm:text-3xl md:text-4xl font-extrabold text-accent">FREE</span>
                      <span className="text-foreground/70 dark:text-muted-foreground ml-1 text-xs">for 1 month</span>
                    </>
                  ) : (
                    <>
                      <span className="text-xl sm:text-3xl md:text-4xl font-extrabold text-primary">₹{plan.priceRs}</span>
                      <span className="text-foreground/70 dark:text-muted-foreground ml-1 text-xs">/month</span>
                    </>
                  )}
                </motion.div>
                
                {/* More compact description on mobile */}
                {plan.description && (
                  <motion.p 
                    className="text-xs text-foreground/80 dark:text-muted-foreground mt-2 max-w-[250px] mx-auto line-clamp-2 sm:line-clamp-none"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (index * 0.05), duration: 0.5 }}
                  >
                    {plan.description}
                  </motion.p>
                )}
              </div>

              {/* Features list - more compact on mobile */}
              <div className="p-3 sm:p-6 pt-2 sm:pt-6 flex-grow">
                <ul className="space-y-1.5 sm:space-y-3">
                  {/* Show fewer features on mobile */}
                  {plan.features.slice(0, 5).map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: 0.3 + (0.07 * featureIndex) + (index * 0.02),
                        duration: 0.4,
                        type: "spring",
                        stiffness: 100
                      }}
                      viewport={{ once: true, margin: "-50px" }}
                      className="flex items-center gap-1.5 text-foreground group"
                    >
                      <motion.span 
                        whileHover={{ scale: 1.15 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className={`flex-shrink-0 p-0.5 sm:p-1.5 rounded-full transition-colors duration-300 ${
                          plan.popular ? 'bg-primary/20 text-primary dark:bg-primary/10' :
                          plan.isTrial ? 'bg-accent/20 text-accent dark:bg-accent/10' :
                          'bg-secondary/30 text-secondary-dark dark:bg-secondary/20'
                        } group-hover:bg-opacity-100`}
                      >
                        {getFeatureIcon(feature)}
                      </motion.span>
                      <span className="text-xs text-foreground group-hover:text-foreground transition-colors duration-200">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Call to action button - optimized for mobile */}
              <div className="px-3 pb-3 sm:p-6 sm:pt-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    if (plan.isTrial) {
                      setIsTrialModalOpen(true);
                    } else {
                      router.push(`/billing?plancode=${plan.code}&catagory=Minecraft`);
                    }
                  }}
                  className={`
                    relative w-full py-2 sm:py-3 rounded-[var(--radius)] 
                    font-medium text-primary-foreground 
                    flex items-center justify-center gap-1 sm:gap-2 
                    transition-all duration-300 
                    shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] 
                    text-xs sm:text-sm
                    focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:focus:ring-offset-background
                    overflow-hidden
                    ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-accent to-accent-light hover:shadow-accent/20'
                        : plan.isTrial
                          ? 'bg-gradient-to-r from-accent to-accent-light hover:shadow-accent/20'
                          : 'bg-gradient-to-r from-primary to-primary-light hover:shadow-primary/20'
                    }
                  `}
                  aria-label={plan.isTrial ? "Claim free trial" : `Order ${plan.name} plan`}
                >
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 bg-white opacity-0 -translate-x-full"
                      animate={{ translateX: ['100%', '-100%'], opacity: [0, 0.1, 0] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        repeatDelay: 5,
                        ease: "easeInOut" 
                      }}
                    />
                  </div>
                  
                  {plan.isTrial ? (
                    <>
                      <Gift className="h-3 sm:h-4 w-3 sm:w-4 flex-shrink-0" />
                      <span className="whitespace-nowrap">Claim Free Trial</span>
                    </>
                  ) : (
                    <>
                      <Coffee className="h-3 sm:h-4 w-3 sm:w-4 flex-shrink-0" />
                      <span className="whitespace-nowrap">Order Now</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>        {/* Enhanced View All Plans Button with urgency and social proof - optimized for mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8 sm:mt-12 flex flex-col items-center"
        >
          {/* Social proof - hide on smallest screens, show on sm and above */}
          <div className="hidden sm:block mb-4 bg-card border border-border rounded-lg px-4 py-3 max-w-md shadow-sm">
            <div className="flex gap-3 items-center justify-center mb-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                  <Image src={`https://i.pravatar.cc/40?img=${i+10}`} alt="User" width={32} height={32} />
                </div>
              ))}
            </div>
            <p className="text-xs text-foreground/70 text-center">
              <span className="font-semibold">12 people</span> purchased a plan in the last 24 hours
            </p>
          </div>
          
          {/* More compact CTA button for mobile */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push('/plans')}
            className="
              bg-gradient-to-r from-accent to-accent-light
              hover:shadow-lg hover:shadow-accent/20
              text-white
              px-6 sm:px-10 py-3 sm:py-4
              rounded-[var(--radius)]
              font-bold text-sm sm:text-lg
              flex items-center gap-1.5 sm:gap-2
              transition-all duration-300
              shadow-[var(--shadow-md)]
              focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:focus:ring-offset-background
              relative overflow-hidden
              max-w-[90%] sm:max-w-none mx-auto
            "
            aria-label="View all hosting plans"
          >
            {/* Enhanced animated shine effect */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-white opacity-0 -translate-x-full"
                animate={{ translateX: ['100%', '-100%'], opacity: [0, 0.15, 0] }}
                transition={{ 
                  duration: 1.2, 
                  repeat: Infinity, 
                  repeatDelay: 1.5,
                  ease: "easeInOut" 
                }}
              />
            </div>
            
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>VIEW ALL PLANS</span>
          </motion.button>
          
          {/* Enhanced with urgency indicators - simplified for mobile */}
          <div className="mt-3 sm:mt-4 flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 text-xs font-medium text-foreground/70">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>Limited time offer - Sale ends in <span className="text-accent font-bold">23 hours 59 minutes</span></span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-foreground/70">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2s-1.9-1-8-1-1 9-1 9v10c0 .5 0 1 .5 1h17c.5 0 .5-.5.5-1V10s.1-8-1-8-8 1-8 1Z"></path>
                <path d="M12 15V7"></path>
                <path d="m9 11 3 4 3-4"></path>
              </svg>
              <span>Satisfaction guaranteed</span>
            </div>
          </div>
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
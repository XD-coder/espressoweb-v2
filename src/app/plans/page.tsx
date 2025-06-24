"use client"
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { gameCategories } from '../../../data';
import { motion } from 'framer-motion';
import { Check, Coffee, CoffeeIcon, Gift, PackageCheck, ShieldCheck, Cpu, Wifi, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

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

// Helper function to get icon component for feature text
const getFeatureIcon = (feature: string) => {
  for (const [keyword, IconComponent] of Object.entries(featureIcons)) {
    if (feature.includes(keyword)) {
      return <IconComponent className="h-4 w-4" />;
    }
  }
  return <Check className="h-4 w-4" />;
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

const PlansPage = () => {
  const router = useRouter();
  
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        {/* Hero section for plans page */}        <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-background to-primary/5 dark:from-background dark:to-primary/10">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden opacity-30 dark:opacity-20 pointer-events-none">
            <div className="absolute -top-48 -right-48 w-72 sm:w-96 h-72 sm:h-96 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 -left-48 w-72 sm:w-96 h-72 sm:h-96 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12 md:mb-16"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                All Our <span className="text-gradient">Hosting Plans</span>
              </h1>
              
              <motion.div 
                className="w-16 sm:w-20 md:w-24 h-1 sm:h-1.5 bg-accent mx-auto rounded-full mb-6"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "6rem", opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              />
                <p className="text-foreground/80 dark:text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                Choose the perfect plan for your gaming server with our flexible options designed for every need and budget.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Plans section */}        <section className="py-16 sm:py-20 md:py-24 bg-card relative overflow-hidden">
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
          
          <div className="container mx-auto px-6 relative z-10">
            {gameCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-20">                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className="text-center mb-10 sm:mb-12 md:mb-16"
                >
                  <h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                    <span className="text-gradient">{category.name} Hosting</span>
                  </h2>
                  
                  <motion.div 
                    className="w-16 sm:w-20 md:w-24 h-1 sm:h-1.5 bg-accent mx-auto rounded-full mb-4 md:mb-6"
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: "6rem", opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  />
                </motion.div>
                  <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1, margin: "-50px" }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
                >
                  {category.plans.map((plan, index) => (
                    <motion.div
                      key={index}
                      variants={planVariants}
                      whileHover="hover"
                      className="bg-background backdrop-blur-sm border border-border rounded-[var(--radius-lg)] 
                        shadow-[var(--shadow)] relative flex flex-col z-10 isolate
                        transition-all duration-300 group h-full"
                    >                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-primary/[0.04] dark:bg-primary/[0.05] 
                        transition-opacity duration-500 pointer-events-none z-0"></div>
                      
                      {/* Plan header with decoration */}
                      <div className={`p-4 sm:p-6 rounded-t-[var(--radius-lg)] relative z-10 ${
                        plan.popular ? 'bg-gradient-to-br from-primary to-primary-dark' : 
                        plan.isTrial ? 'bg-gradient-to-br from-accent to-accent-dark' :
                        'bg-gradient-to-br from-primary-light to-primary'
                      }`}>                        {/* Popular/Trial badge - positioned on top of the card */}
                        {(plan.popular || plan.isTrial) && (
                          <div className="absolute top-0 right-5 translate-y-[-50%]">
                            <motion.div 
                              initial={{ y: -20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.4 + (index * 0.1), duration: 0.5, type: "spring" }}
                              className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium shadow-[var(--shadow)] ${
                                plan.popular ? 'bg-accent text-accent-foreground' :
                                'bg-white text-primary'
                              } flex items-center gap-1 whitespace-nowrap z-20`}
                            >
                              {plan.popular && <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />}
                              {plan.isTrial && <Gift className="h-3 w-3 sm:h-3.5 sm:w-3.5" />}
                              <span>{plan.popular ? 'Most Popular' : 'Limited Time'}</span>
                            </motion.div>
                          </div>
                        )}
                        
                        {/* Icon and name */}
                        <div className="flex justify-center items-center mb-1.5 sm:mb-2">
                          <motion.div 
                            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                            transition={{ duration: 0.5 }}
                            className="w-10 h-10 sm:w-12 sm:h-12 bg-white/80 rounded-full flex items-center justify-center mb-2
                              shadow-[var(--shadow)] group-hover:shadow-[var(--shadow-md)] transition-all duration-300"
                          >
                            <Coffee className={`h-5 w-5 sm:h-6 sm:w-6 ${plan.popular || plan.isTrial ? 'text-primary' : 'text-accent'}`} />
                          </motion.div>
                        </div>
                        
                        <h3 className="text-xl sm:text-2xl font-bold text-white text-center">
                          {plan.name}
                        </h3>
                      </div>
                      
                      {/* Price section */}                      <div className="py-5 sm:py-6 px-6 text-center border-b border-border">
                        <motion.div 
                          className="flex items-baseline justify-center"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + (index * 0.05), duration: 0.5 }}
                        >
                          {plan.isTrial ? (
                            <>
                              <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-accent">FREE</span>
                              <span className="text-foreground/70 dark:text-muted-foreground ml-1 sm:ml-2 text-xs sm:text-sm">for 1 month</span>
                            </>
                          ) : (
                            <>
                              <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary">₹{plan.priceRs}</span>
                              <span className="text-foreground/70 dark:text-muted-foreground ml-1 text-xs sm:text-sm">/month</span>
                            </>
                          )}
                        </motion.div>
                        
                        {plan.description && (                          <motion.p 
                            className="text-xs sm:text-sm text-foreground/80 dark:text-muted-foreground mt-3 max-w-[250px] mx-auto"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + (index * 0.05), duration: 0.5 }}
                          >
                            {plan.description}
                          </motion.p>
                        )}
                      </div>
                      
                      {/* Features list */}                      <div className="p-5 sm:p-6 flex-grow">
                        <ul className="space-y-2 sm:space-y-3">
                          {plan.features.map((feature, featureIndex) => (
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
                              className="flex items-center gap-1.5 sm:gap-2.5 text-foreground group"
                            >                              <motion.span 
                                whileHover={{ scale: 1.15 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                className={`flex-shrink-0 p-1 sm:p-1.5 rounded-full transition-colors duration-300 ${
                                  plan.popular ? 'bg-primary/20 text-primary dark:bg-primary/10' :
                                  plan.isTrial ? 'bg-accent/20 text-accent dark:bg-accent/10' :
                                  'bg-secondary/30 text-secondary-dark dark:bg-secondary/20'
                                } group-hover:bg-opacity-100`}
                              >
                                {getFeatureIcon(feature)}
                              </motion.span>
                              <span className="text-xs sm:text-sm text-foreground group-hover:text-foreground transition-colors duration-200">
                                {feature}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Call to action button */}
                      <div className="p-5 sm:p-6 pt-3 sm:pt-4">                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => {
                            if (plan.isTrial) {
                              // Handle trial signup - you might want to add the modal here
                            } else {
                              router.push(`/billing?plancode=${plan.code}&catagory=${category.name}`);
                            }
                          }}
                          className={`
                            relative w-full py-2.5 sm:py-3 rounded-[var(--radius)] 
                            font-medium text-primary-foreground 
                            flex items-center justify-center gap-1.5 sm:gap-2 
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
                              <Gift className="h-3.5 sm:h-4 w-3.5 sm:w-4 flex-shrink-0" />
                              <span className="whitespace-nowrap">Claim Free Trial</span>
                            </>
                          ) : (
                            <>
                              <Coffee className="h-3.5 sm:h-4 w-3.5 sm:w-4 flex-shrink-0" />
                              <span className="whitespace-nowrap">Order Now</span>
                            </>
                          )}
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PlansPage;
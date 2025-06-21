"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { gameCategories, homePagePlans } from '../../data';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { GiftIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import Script from 'next/script';
import TrialModal from './TrialModal';

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

  return (
    <section className="py-20 bg-primary-50" id="plans">
      {/* Schema.org markup for structured data */}
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-primary-900 mb-6">Our Premium Minecraft Hosting Plans</h2>
        <p className="text-xl text-primary-700 mb-12">
          Choose the perfect plan for your Minecraft server, designed for optimal performance and reliability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {gameCategories[0].plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 flex flex-col z-10 overflow-hidden relative ${
                plan.isTrial 
                  ? 'border-4 border-dashed border-accent-400 bg-gradient-to-br from-white to-accent-50' 
                  : 'border-t-4 border-accent-500'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-accent-500 text-red-600 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">
                  Popular
                </div>
              )}
              {plan.isTrial && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-primary-600 to-accent-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">
                  Limited Time
                </div>
              )}
              
              <h3 className="text-3xl font-bold text-primary-950 mb-4 flex items-center justify-center">
                {plan.isTrial && (
                  <GiftIcon className="h-7 w-7 mr-2 text-accent-500" />
                )}
                {plan.name}
              </h3>
              
              <p className="text-primary-700 text-lg mb-2">
                {plan.isTrial ? (
                  <span className="flex items-center justify-center">
                    <span className="text-4xl font-extrabold text-accent-500">FREE</span>
                    <span className="text-primary-600 ml-2">for 1 month</span>
                  </span>
                ) : (
                  <>
                    <span className="text-4xl font-extrabold text-accent-500">₹{plan.priceRs}</span>
                    <span className="text-primary-600"> /month</span>
                  </>
                )}
              </p>
              
              {plan.isTrial && plan.description && (
                <p className="text-sm text-primary-700 mt-2 mb-4">{plan.description}</p>
              )}
              
              <ul className="text-left text-primary-800 space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-accent-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => {
                  if (plan.isTrial) {
                    setIsTrialModalOpen(true);
                  } else {
                    router.push(`/billing?plancode=${plan.code}&catagory=Minecraft`);
                  }
                }}
                className={`mt-auto font-semibold text-lg transition-all duration-300 shadow-md transform hover:scale-105 px-8 py-3 rounded-full ${
                  plan.isTrial
                    ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white'
                    : 'bg-primary-800 hover:bg-primary-950 text-white'
                }`}
              >
                {plan.isTrial ? 'Claim Now' : 'Order Now'}
              </button>
            </motion.div>
          ))}
        </div>
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
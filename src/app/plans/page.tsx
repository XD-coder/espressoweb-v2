"use client"
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { gameCategories } from '../../../data';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';
const PlansPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-12 sm:py-20 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary-950 text-center mb-8 sm:mb-12">
            All Our Hosting Plans
          </h1>

          {gameCategories.map((category, categoryIndex) => (
            <section key={categoryIndex} className="mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-800 text-center mb-8 sm:mb-10">
                {category.name} Hosting
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                {category.plans.map((plan, planIndex) => (
                  <motion.div
                    key={planIndex}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: planIndex * 0.1 }}
                    className="bg-white rounded-xl shadow-lg p-6 sm:p-8 transform hover:scale-105 transition-transform duration-300 border-t-4 border-accent-500 flex flex-col relative"
                  >
                    {plan.popular && (
                      <div className="absolute top-0 right-0 bg-accent-500 text-primary-950 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">
                        Popular
                      </div>
                    )}
                    <h3 className="text-2xl sm:text-3xl font-bold text-primary-950 mb-4">{plan.name}</h3>
                    <p className="text-primary-700 text-lg mb-2">
                      <span className="text-3xl sm:text-4xl font-extrabold text-accent-500">₹{plan.priceRs}</span>
                      <span className="text-primary-600">/month</span>
                    </p>
                    <ul className="text-left text-primary-800 space-y-3 mb-6 sm:mb-8 flex-grow text-sm sm:text-base">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 sm:h-6 sm:w-6 text-accent-500 mr-2" />
                          <span dangerouslySetInnerHTML={{ __html: feature }} />
                        </li>
                      ))}
                    </ul>
                    <button 
                      className="mt-auto w-full bg-primary-800 hover:bg-primary-950 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 shadow-md transform hover:scale-105"
                      onClick={() => { router.push(`/billing?plancode=${plan.code}&catagory=${category.name}`) }}
                    >
                      Order Now
                    </button>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PlansPage;
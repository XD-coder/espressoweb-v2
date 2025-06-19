"use client"
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { gameCategories } from '../../../data';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';

// Metadata is in a separate file for client components
// See next section where we'll create plans/metadata.ts

const PlansPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-20 bg-primary-50">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-primary-950 text-center mb-12">
            All Our Hosting Plans
          </h1>

          {gameCategories.map((category, categoryIndex) => (
            <section key={categoryIndex} className="mb-16">
              <h2 className="text-4xl font-bold text-primary-800 text-center mb-10">
                {category.name} Hosting
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {category.plans.map((plan, planIndex) => (
                  <motion.div
                    key={planIndex}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: planIndex * 0.1 }}
                    className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 border-t-4 border-accent-500 flex flex-col relative"
                  >
                    {plan.popular && (
                      <div className="absolute top-0 right-0 bg-accent-500 text-primary-950 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">
                        Popular
                      </div>
                    )}
                    <h3 className="text-3xl font-bold text-primary-950 mb-4">{plan.name}</h3>
                    <p className="text-primary-700 text-lg mb-2">
                      <span className="text-4xl font-extrabold text-accent-500">₹{plan.priceRs}</span>
                      <span className="text-primary-600">/month</span>
                    </p>
                    <ul className="text-left text-primary-800 space-y-3 mb-8 flex-grow">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircleIcon className="h-6 w-6 text-accent-500 mr-2" />
                          <span dangerouslySetInnerHTML={{ __html: feature }} />
                        </li>
                      ))}
                    </ul>
                    <button className="mt-auto bg-primary-800 hover:bg-primary-950 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-md transform hover:scale-105"
                    onClick={()=>{router.push(`/billing?plancode=${plan.code}&catagory=${category.name}`)}}>
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
"use client"
import { motion } from 'framer-motion';
import { homePagePlans } from '../../data'; // Assuming data.tsx is in the root of my-app
import { CheckCircleIcon } from '@heroicons/react/24/solid'; // Example icon
import { useRouter } from 'next/navigation';

const Plans = () => {
  const router = useRouter();
  return (
    <section className="py-20 bg-primary-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-primary-900 mb-6">Our Popular Plans</h2>
        <p className="text-xl text-primary-700 mb-12">
          Choose the perfect plan that fits your gaming needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {homePagePlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 border-t-4 border-accent-500 flex flex-col z-10 overflow-hidden relative"
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-accent-500 text-red-600 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">
                  Popular
                </div>
              )}
              <h3 className="text-3xl font-bold text-primary-950 mb-4">{plan.name}</h3>
              <p className="text-primary-700 text-lg mb-2">
                <span className="text-4xl font-extrabold text-accent-500">{plan.discountedPrice}</span>
                <span className="line-through text-primary-400 ml-2">{plan.price}</span>
                <span className="text-primary-600">/month</span>
              </p>
              <ul className="text-left text-primary-800 space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-accent-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => router.push(`/billing?plancode=${plan.code}&catagory=Minecraft`)}
                className="mt-auto bg-primary-800 hover:bg-primary-950 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-md transform hover:scale-105"
              >
                Order Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
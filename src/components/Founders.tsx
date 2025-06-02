"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { founders } from '../../data'; // Assuming data.tsx is in the root of my-app
import { CodeIcon, DatabaseIcon } from 'lucide-react'; // Using lucide-react for icons

const iconComponents = {
  Code: CodeIcon,
  Database: DatabaseIcon,
};

type IconName = keyof typeof iconComponents;

const Founders = () => {
  return (
    <section className="py-20 bg-primary-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-primary-950 mb-6">Meet Our Founders</h2>
        <p className="text-xl text-primary-700 mb-12">
          The passionate individuals behind Espresso Hosting.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {founders.map((founder, index) => {
            const IconComponent = iconComponents[founder.icon as IconName];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center"
              >
                <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-accent-500 shadow-md">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary-950 mb-2">{founder.name}</h3>
                <p className="text-accent-600 font-semibold mb-4">{founder.title}</p>
                <p className="text-primary-700 mb-4 flex-grow">{founder.description}</p>
                {IconComponent && <IconComponent className="h-8 w-8 text-primary-600" />}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Founders;
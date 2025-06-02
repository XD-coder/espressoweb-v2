"use client";
import { motion } from 'framer-motion';
import { features } from '../../data'; // Assuming data.tsx is in the root of my-app
import { 
  ZapIcon, 
  GlobeIcon, 
  LayersIcon, 
  HeadphonesIcon, 
  ShieldIcon, 
  CpuIcon 
} from 'lucide-react'; // Using lucide-react for icons

const iconComponents = {
  Zap: ZapIcon,
  Globe: GlobeIcon,
  Layers: LayersIcon,
  Headphones: HeadphonesIcon,
  Shield: ShieldIcon,
  Cpu: CpuIcon,
};

type IconName = keyof typeof iconComponents;

const Features = () => {
  return (
    <section className="py-20 bg-primary-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-primary-950 mb-6">Why Choose Espresso Hosting?</h2>
        <p className="text-xl text-primary-700 mb-12">
          Discover the advantages that make us the preferred choice for gamers worldwide.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const IconComponent = iconComponents[feature.icon as IconName];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center"
              >
                {IconComponent && <IconComponent className="h-16 w-16 text-accent-500 mb-6" />}
                <h3 className="text-2xl font-semibold text-primary-950 mb-4">{feature.title}</h3>
                <p className="text-primary-700">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
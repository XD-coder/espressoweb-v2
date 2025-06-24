"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-primary/5 dark:bg-primary/10 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our <span className="text-gradient">Customers Say</span></h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Join thousands of happy gamers who trust Espresso Hosting for their Minecraft server needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Rahul M.",
              role: "Server Owner",
              avatar: "https://i.pravatar.cc/150?img=10",
              content: "Setting up my modded Minecraft server was a breeze with Espresso Hosting. The hardware performance is incredible, and our gameplay has never been smoother!"
            },
            {
              name: "Priya K.",
              role: "Community Manager",
              avatar: "https://i.pravatar.cc/150?img=5",
              content: "We moved from another host to Espresso and the difference is night and day. Better performance, easier to use control panel, and the support team is always there when we need them."
            },
            {
              name: "Arjun S.",
              role: "YouTuber",
              avatar: "https://i.pravatar.cc/150?img=12",
              content: "As someone who runs multiple servers for my YouTube audience, I need reliability and performance. Espresso Hosting delivers on both fronts, plus their pricing is very competitive."
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-background border border-border rounded-lg p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>              <p className="text-foreground/80 mb-4">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="relative w-10 h-10 mr-3">
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="rounded-full" 
                    fill
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

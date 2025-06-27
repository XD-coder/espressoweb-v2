import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import type { Metadata } from "next";
import Founders from '@/components/Founders';

// Optimize metadata for this page
export const metadata: Metadata = {
  title: "About Espresso Hosting | Our Story & Premium Minecraft Hosting Mission",
  description: "Learn about Espresso Hosting's journey to provide the best Minecraft server hosting with premium hardware, 24/7 support and a passionate team of gaming experts.",
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: "About Espresso Hosting | Premium Minecraft Server Hosting",
    description: "Learn about our mission to provide the best Minecraft server hosting experience with premium hardware and 24/7 support.",
    url: 'https://espressohost.xyz/about',
    images: [
      {
        url: 'https://espressohost.xyz/hero-image.png',
        width: 1200,
        height: 630,
        alt: 'About Espresso Hosting - Premium Minecraft Server Hosting',
      },
    ],
  }
};

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background w-full overflow-hidden">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full max-w-[100vw] overflow-hidden">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-8 sm:mb-12 text-center leading-tight">
          About <span className="text-gradient">Espresso Hosting</span>
        </h1>
        
        <section className="bg-card shadow-[var(--shadow-lg)] rounded-[var(--radius-lg)] p-6 sm:p-8 md:p-12 mb-12 sm:mb-16 transform transition-transform duration-500 hover:scale-[1.01] hover:shadow-[var(--shadow-xl)] border border-border">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 sm:mb-8 text-center">Our Story</h2>
          <div className="mx-auto">
            <p className="text-base sm:text-lg leading-relaxed mb-6 text-foreground/90">
              Espresso Hosting was founded with a simple, yet powerful mission: to provide unparalleled game server hosting that combines blazing-fast performance with rock-solid reliability. We understand the passion and dedication that goes into gaming, and we believe your server should reflect that commitment.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-foreground/90">
              Born from a group of avid gamers and tech enthusiasts, we experienced firsthand the frustrations of lag, downtime, and unhelpful support. We decided to build a solution that we ourselves would love to use – a hosting service that prioritizes speed, stability, and exceptional customer service.
            </p>
          </div>
        </section>

        <section className="bg-card shadow-[var(--shadow-lg)] rounded-[var(--radius-lg)] p-6 sm:p-8 md:p-12 mb-12 sm:mb-16 transform transition-transform duration-500 hover:scale-[1.01] hover:shadow-[var(--shadow-xl)] border border-border">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 sm:mb-8 text-center">Our Mission</h2>
          <div className="mx-auto">
            <p className="text-base sm:text-lg leading-relaxed mb-6 text-foreground/90">
              Our mission is to empower gamers and communities worldwide with the best possible hosting infrastructure. We strive to offer cutting-edge technology, intuitive control panels, and a support team that's always ready to go the extra mile.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-foreground/90">
              We are constantly innovating, listening to our community, and expanding our services to meet the evolving demands of the gaming world. Your seamless gaming experience is our ultimate goal.
            </p>
          </div>
        </section>

        <section className="bg-card shadow-[var(--shadow-lg)] rounded-[var(--radius-lg)] p-6 sm:p-8 md:p-12 transform transition-transform duration-500 hover:scale-[1.01] hover:shadow-[var(--shadow-xl)] border border-border">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 sm:mb-8 text-center">Why Choose Espresso Hosting?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="bg-background/50 p-5 sm:p-6 rounded-[var(--radius)] shadow-[var(--shadow-sm)] flex gap-4 border border-border/50">
              <div className="bg-primary/10 p-3 rounded-[var(--radius)] self-start">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-accent mb-2 text-lg">Blazing-Fast Performance</h3>
                <p className="text-foreground/80 text-sm sm:text-base">Powered by the latest hardware and optimized networks for minimal latency.</p>
              </div>
            </div>

            <div className="bg-background/50 p-5 sm:p-6 rounded-[var(--radius)] shadow-[var(--shadow-sm)] flex gap-4 border border-border/50">
              <div className="bg-primary/10 p-3 rounded-[var(--radius)] self-start">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-accent mb-2 text-lg">Unmatched Reliability</h3>
                <p className="text-foreground/80 text-sm sm:text-base">99.9% uptime guarantee ensures your server is always online.</p>
              </div>
            </div>

            <div className="bg-background/50 p-5 sm:p-6 rounded-[var(--radius)] shadow-[var(--shadow-sm)] flex gap-4 border border-border/50">
              <div className="bg-primary/10 p-3 rounded-[var(--radius)] self-start">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-accent mb-2 text-lg">24/7 Expert Support</h3>
                <p className="text-foreground/80 text-sm sm:text-base">Our dedicated team is here to assist you around the clock.</p>
              </div>
            </div>

            <div className="bg-background/50 p-5 sm:p-6 rounded-[var(--radius)] shadow-[var(--shadow-sm)] flex gap-4 border border-border/50">
              <div className="bg-primary/10 p-3 rounded-[var(--radius)] self-start">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-accent mb-2 text-lg">Easy-to-Use Control Panel</h3>
                <p className="text-foreground/80 text-sm sm:text-base">Manage your server effortlessly with our intuitive interface.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <Founders />  
         
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
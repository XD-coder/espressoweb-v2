import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import type { Metadata } from "next";

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
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-6xl font-extrabold text-gray-900 mb-12 text-center leading-tight">About Espresso Hosting</h1>
        
        <section className="bg-white shadow-xl rounded-2xl p-8 md:p-12 mb-16 transform transition-transform duration-500 hover:scale-[1.01] hover:shadow-2xl">
          <h2 className="text-4xl font-bold text-primary-700 mb-8 text-center">Our Story</h2>
          <div className="prose lg:prose-xl text-gray-700 mx-auto">
            <p className="text-lg leading-relaxed mb-6">
              Espresso Hosting was founded with a simple, yet powerful mission: to provide unparalleled game server hosting that combines blazing-fast performance with rock-solid reliability. We understand the passion and dedication that goes into gaming, and we believe your server should reflect that commitment.
            </p>
            <p className="text-lg leading-relaxed">
              Born from a group of avid gamers and tech enthusiasts, we experienced firsthand the frustrations of lag, downtime, and unhelpful support. We decided to build a solution that we ourselves would love to use – a hosting service that prioritizes speed, stability, and exceptional customer service.
            </p>
          </div>
        </section>

        <section className="bg-white shadow-xl rounded-2xl p-8 md:p-12 mb-16 transform transition-transform duration-500 hover:scale-[1.01] hover:shadow-2xl">
          <h2 className="text-4xl font-bold text-primary-700 mb-8 text-center">Our Mission</h2>
          <div className="prose lg:prose-xl text-gray-700 mx-auto">
            <p className="text-lg leading-relaxed mb-6">
              Our mission is to empower gamers and communities worldwide with the best possible hosting infrastructure. We strive to offer cutting-edge technology, intuitive control panels, and a support team that's always ready to go the extra mile.
            </p>
            <p className="text-lg leading-relaxed">
              We are constantly innovating, listening to our community, and expanding our services to meet the evolving demands of the gaming world. Your seamless gaming experience is our ultimate goal.
            </p>
          </div>
        </section>

        <section className="bg-white shadow-xl rounded-2xl p-8 md:p-12 transform transition-transform duration-500 hover:scale-[1.01] hover:shadow-2xl">
          <h2 className="text-4xl font-bold text-primary-700 mb-8 text-center">Why Choose Espresso Hosting?</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-4 pl-6">
            <li><strong className="text-primary-600">Blazing-Fast Performance:</strong> Powered by the latest hardware and optimized networks for minimal latency.</li>
            <li><strong className="text-primary-600">Unmatched Reliability:</strong> 99.9% uptime guarantee ensures your server is always online.</li>
            <li><strong className="text-primary-600">24/7 Expert Support:</strong> Our dedicated team is here to assist you around the clock.</li>
            <li><strong className="text-primary-600">Easy-to-Use Control Panel:</strong> Manage your server effortlessly with our intuitive interface.</li>
            <li><strong className="text-primary-600">Scalable Solutions:</strong> From small communities to large-scale projects, we have a plan for everyone.</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
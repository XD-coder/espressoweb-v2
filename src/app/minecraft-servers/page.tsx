import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minecraft Servers | Premium Hosting for All Server Types",
  description: "High-performance Minecraft servers hosting for Java Edition, Forge, modded, and vanilla servers. Our affordable plans include DDoS protection and 24/7 support.",
  keywords: "minecraft servers, minecraft java edition servers, server hosting minecraft, forge server hosting minecraft, modded minecraft servers, paper mc servers",
  alternates: {
    canonical: '/minecraft-servers',
  },
  openGraph: {
    title: "Minecraft Servers | Espresso Hosting",
    description: "Your go-to for High performance and cheap Minecraft server hosting solutions. All server types supported.",
    url: 'https://espressohost.xyz/minecraft-servers',
    images: [
      {
        url: 'https://opengraph.b-cdn.net/production/images/f070a378-9002-47f0-add3-3b44515d33e8.png?token=728-gfamY_EGIxiH6W1RMEP47tF5-dXAhvcnNu4YyRE&height=1200&width=1200&expires=33286319952',
        width: 1200,
        height: 1200,
        alt: 'Minecraft Servers - Espresso Hosting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Minecraft Servers | Espresso Hosting',
    description: 'Your go-to for High performance and cheap Minecraft server hosting.',
    images: ['https://opengraph.b-cdn.net/production/images/f070a378-9002-47f0-add3-3b44515d33e8.png?token=728-gfamY_EGIxiH6W1RMEP47tF5-dXAhvcnNu4YyRE&height=1200&width=1200&expires=33286319952'],
  }
};

export default function MinecraftServers() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-cover bg-center relative" style={{ backgroundImage: `url('/hero-bg.png')` }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Minecraft Servers</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Host your own Minecraft server with our high-performance, affordable hosting solutions. 
              All server types supported including Java Edition, Forge, and modded servers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/plans"
                className="bg-accent-500 hover:bg-accent-600 text-primary-950 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300"
              >
                View Server Plans
              </Link>
              <Link
                href="#server-types"
                className="bg-transparent border-2 border-primary-500 text-primary-500 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-primary-500 hover:text-white"
              >
                Explore Server Types
              </Link>
            </div>
          </div>
        </section>

        {/* Server Types Section */}
        <section id="server-types" className="py-20 bg-primary-950">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Minecraft Server Types</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-primary-900 p-8 rounded-lg shadow-lg hover:shadow-accent-500/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Java Edition Servers</h3>
                <p className="text-gray-300 mb-6">
                  The classic Minecraft experience on PC. Our Java Edition servers support all versions from 
                  legacy 1.8.9 to the latest releases, with full plugin compatibility.
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Support for Bukkit, Spigot, and Paper</li>
                  <li>Install thousands of plugins</li>
                  <li>Custom JAR support</li>
                  <li>One-click version switching</li>
                </ul>
                <Link
                  href="/minecraft-java"
                  className="bg-primary-800 hover:bg-primary-700 text-white px-6 py-2 rounded-lg inline-block transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
              
              <div className="bg-primary-900 p-8 rounded-lg shadow-lg hover:shadow-accent-500/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Forge Modded Servers</h3>
                <p className="text-gray-300 mb-6">
                  Transform your Minecraft experience with mods. Our Forge servers make installing and 
                  running even the most complex modpacks simple and lag-free.
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>One-click modpack installation</li>
                  <li>Support for FTB, ATM, RLCraft</li>
                  <li>Custom mod configuration</li>
                  <li>Optimized for heavy modpacks</li>
                </ul>
                <Link
                  href="/forge-hosting"
                  className="bg-primary-800 hover:bg-primary-700 text-white px-6 py-2 rounded-lg inline-block transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-primary-900 p-8 rounded-lg shadow-lg hover:shadow-accent-500/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Paper MC Servers</h3>
                <p className="text-gray-300 mb-6">
                  Get maximum performance with our Paper servers. Perfect for larger communities and 
                  competitive gameplay where every tick matters.
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Improved server performance</li>
                  <li>Compatible with Bukkit/Spigot plugins</li>
                  <li>Advanced configuration options</li>
                  <li>Regular updates to latest Paper builds</li>
                </ul>
                <Link
                  href="/plans"
                  className="bg-primary-800 hover:bg-primary-700 text-white px-6 py-2 rounded-lg inline-block transition-all duration-300"
                >
                  View Plans
                </Link>
              </div>
              
              <div className="bg-primary-900 p-8 rounded-lg shadow-lg hover:shadow-accent-500/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Custom Servers</h3>
                <p className="text-gray-300 mb-6">
                  Need something specific? Our platform supports custom server configurations, hybrid 
                  setups, and specialized server types for your unique Minecraft vision.
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Custom JAR file support</li>
                  <li>Custom startup parameters</li>
                  <li>Fabric/Quilt mod loader support</li>
                  <li>Full file access via SFTP</li>
                </ul>
                <Link
                  href="/plans"
                  className="bg-primary-800 hover:bg-primary-700 text-white px-6 py-2 rounded-lg inline-block transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-20 bg-primary-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Why Choose Our Minecraft Servers</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">High Performance</h3>
                <p className="text-gray-300 text-center">
                  NVMe SSDs and powerful CPUs ensure your Minecraft server runs smoothly even with many players and mods.
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">DDoS Protection</h3>
                <p className="text-gray-300 text-center">
                  Enterprise-grade protection keeps your server online and safe from attacks, ensuring uninterrupted gameplay.
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">24/7 Support</h3>
                <p className="text-gray-300 text-center">
                  Our knowledgeable support team is ready to help with any server issues, day or night.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section with Schema Markup */}
        <section className="py-20 bg-primary-950">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Minecraft Servers FAQ</h2>
            
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="bg-primary-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">How do I create my own Minecraft server?</h3>
                <p className="text-gray-300">
                  Creating your own Minecraft server with us is simple: select a plan that fits your needs, complete the checkout process, and your server is instantly deployed. Our control panel makes it easy to select your preferred server type, install plugins or mods, and configure settings. You'll get a dedicated IP to share with friends.
                </p>
              </div>
              
              <div className="bg-primary-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">What's the difference between server types?</h3>
                <p className="text-gray-300">
                  Java Edition servers are the standard Minecraft PC version with plugin support. Forge servers allow you to install mods that change gameplay. Paper servers are optimized Java servers with better performance. Each has different capabilities, but all are fully supported on our platform.
                </p>
              </div>
              
              <div className="bg-primary-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">How many players can my Minecraft server support?</h3>
                <p className="text-gray-300">
                  The number of players depends on your plan's resources and server type. Vanilla servers can typically support more players than heavily modded ones. Our Latte plan comfortably supports 10-15 players on a vanilla server, while our Americano plan can handle 20+ players. Modded servers generally support fewer concurrent players.
                </p>
              </div>
              
              <div className="bg-primary-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">Can I switch between different server types?</h3>
                <p className="text-gray-300">
                  Yes! Our platform allows you to switch between Vanilla, Forge, Paper, and other server types with just a few clicks through our control panel. Keep in mind that world data might not always be compatible between different server types or versions.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-accent-500">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-primary-950 mb-6">Ready to Start Your Minecraft Server?</h2>
            <p className="text-xl text-primary-900 mb-8 max-w-2xl mx-auto">
              Join thousands of players who trust Espresso Hosting for their Minecraft servers.
            </p>
            <Link
              href="/plans"
              className="bg-primary-900 hover:bg-primary-800 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 inline-block"
            >
              Choose Your Server Plan
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      
      {/* Structured data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I create my own Minecraft server?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Creating your own Minecraft server with us is simple: select a plan that fits your needs, complete the checkout process, and your server is instantly deployed. Our control panel makes it easy to select your preferred server type, install plugins or mods, and configure settings. You'll get a dedicated IP to share with friends."
                }
              },
              {
                "@type": "Question",
                "name": "What's the difference between server types?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Java Edition servers are the standard Minecraft PC version with plugin support. Forge servers allow you to install mods that change gameplay. Paper servers are optimized Java servers with better performance. Each has different capabilities, but all are fully supported on our platform."
                }
              },
              {
                "@type": "Question",
                "name": "How many players can my Minecraft server support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The number of players depends on your plan's resources and server type. Vanilla servers can typically support more players than heavily modded ones. Our Latte plan comfortably supports 10-15 players on a vanilla server, while our Americano plan can handle 20+ players. Modded servers generally support fewer concurrent players."
                }
              },
              {
                "@type": "Question",
                "name": "Can I switch between different server types?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Our platform allows you to switch between Vanilla, Forge, Paper, and other server types with just a few clicks through our control panel. Keep in mind that world data might not always be compatible between different server types or versions."
                }
              }
            ]
          })
        }}
      />
      
      {/* Structured data for Product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Minecraft Server Hosting",
            "description": "High-performance Minecraft servers hosting for Java Edition, Forge, modded, and vanilla servers.",
            "brand": {
              "@type": "Brand",
              "name": "Espresso Hosting"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "INR",
              "lowPrice": "300",
              "highPrice": "600"
            },
            "review": {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "4.9",
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": "Minecraft Community"
              }
            }
          })
        }}
      />
    </div>
  );
}

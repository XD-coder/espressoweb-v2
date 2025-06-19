import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minecraft Java Edition Servers | Premium Server Hosting",
  description: "Specialized hosting for Minecraft Java Edition servers with full support for Forge, mods, plugins, and custom configurations. High performance at affordable prices.",
  keywords: "minecraft servers, minecraft java edition servers, minecraft server hosting, minecraft java server, forge server hosting, modded minecraft hosting, java minecraft server rental",
  alternates: {
    canonical: '/minecraft-java',
  },
  openGraph: {
    title: "Minecraft Java Edition Servers | Espresso Hosting",
    description: "Your go-to for High performance and cheap Minecraft Java Edition server hosting with Forge support and mod installation.",
    url: 'https://espressohost.xyz/minecraft-java',
    images: [
      {
        url: 'https://opengraph.b-cdn.net/production/images/f070a378-9002-47f0-add3-3b44515d33e8.png?token=728-gfamY_EGIxiH6W1RMEP47tF5-dXAhvcnNu4YyRE&height=1200&width=1200&expires=33286319952',
        width: 1200,
        height: 1200,
        alt: 'Minecraft Java Edition Servers - Espresso Hosting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Minecraft Java Edition Servers | Espresso Hosting',
    description: 'Your go-to for High performance and cheap Minecraft Java Edition server hosting.',
    images: ['https://opengraph.b-cdn.net/production/images/f070a378-9002-47f0-add3-3b44515d33e8.png?token=728-gfamY_EGIxiH6W1RMEP47tF5-dXAhvcnNu4YyRE&height=1200&width=1200&expires=33286319952'],
  }
};

export default function MinecraftJava() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-cover bg-center relative" style={{ backgroundImage: `url('/hero-bg.png')` }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Minecraft Java Edition Server Hosting</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Professional hosting for your Minecraft Java Edition server with support for all versions,
              mods, plugins, and custom configurations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/plans"
                className="bg-accent-500 hover:bg-accent-600 text-primary-950 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300"
              >
                View Java Hosting Plans
              </Link>
              <Link
                href="#features"
                className="bg-transparent border-2 border-primary-500 text-primary-500 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-primary-500 hover:text-white"
              >
                See Features
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-primary-950">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Java Edition Server Features</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-primary-900 p-8 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-4">One-Click Installs</h3>
                <p className="text-gray-300 text-center">
                  Instantly install any Minecraft Java version, popular modpacks, or plugin collections with a single click.
                </p>
              </div>
              
              <div className="bg-primary-900 p-8 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-4">Forge Support</h3>
                <p className="text-gray-300 text-center">
                  Full support for Forge server installation, allowing you to run thousands of mods on your server.
                </p>
              </div>
              
              <div className="bg-primary-900 p-8 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-4">DDoS Protection</h3>
                <p className="text-gray-300 text-center">
                  Enterprise-grade DDoS protection keeps your Java Edition server safe from attacks and ensures consistent uptime.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-primary-900 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-4">Java Edition Version Support</h3>
                <p className="text-gray-300 mb-6">
                  We support all major Minecraft Java Edition versions, from classic 1.8.x all the way to the latest releases.
                </p>
                <div className="grid grid-cols-4 gap-4">
                  {["1.8.9", "1.12.2", "1.16.5", "1.18.2", "1.19.4", "1.20.1", "1.20.4", "Latest"].map((version) => (
                    <span key={version} className="bg-primary-800 text-white px-3 py-2 rounded-md text-center text-sm">
                      {version}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-primary-900 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-4">Plugin Support</h3>
                <p className="text-gray-300 mb-6">
                  Enhance your Minecraft Java server with thousands of plugins, compatible with Bukkit, Spigot, and Paper.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {["Essentials", "WorldEdit", "GriefPrevention", "LuckPerms", "Vault", "CoreProtect"].map((plugin) => (
                    <span key={plugin} className="bg-primary-800 text-white px-3 py-2 rounded-md text-center">
                      {plugin}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-20 bg-primary-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Why Choose Our Java Edition Hosting</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Performance Optimized</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-500 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-300">
                      <span className="font-bold text-white">NVMe SSD Storage:</span> All servers run on blazing-fast NVMe SSDs, significantly reducing chunk loading times and eliminating lag.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-500 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-300">
                      <span className="font-bold text-white">Dedicated CPU Cores:</span> We guarantee CPU resources, ensuring your Java server maintains consistent TPS even with many players and mods.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-500 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-300">
                      <span className="font-bold text-white">Optimized Java Settings:</span> Pre-configured JVM arguments for maximum performance based on your server's resources.
                    </p>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Ease of Use</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-500 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-300">
                      <span className="font-bold text-white">Custom Control Panel:</span> Our intuitive panel makes managing your Java Edition server simple, even for beginners.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-500 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-300">
                      <span className="font-bold text-white">Automated Backups:</span> Regular backups of your world, settings, and mods to prevent data loss.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-500 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-300">
                      <span className="font-bold text-white">24/7 Support:</span> Our expert team is available around the clock to help with any Minecraft Java server issues.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-accent-500">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-primary-950 mb-6">Ready to Start Your Minecraft Java Server?</h2>
            <p className="text-xl text-primary-900 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied players who trust Espresso Hosting for their Minecraft Java Edition servers.
            </p>
            <Link
              href="/plans"
              className="bg-primary-900 hover:bg-primary-800 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 inline-block"
            >
              Choose Your Plan
            </Link>
          </div>
        </section>

        {/* FAQ Section with Schema Markup */}
        <section className="py-20 bg-primary-950">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Minecraft Java Edition Server FAQ</h2>
            
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="bg-primary-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">What's the difference between Java Edition and Bedrock servers?</h3>
                <p className="text-gray-300">
                  Minecraft Java Edition servers are specifically for players using the Java version of Minecraft on PC. Java Edition offers more extensive mod support, custom servers, and plugin compatibility compared to Bedrock. Our Java Edition hosting is optimized specifically for this version's requirements and features.
                </p>
              </div>
              
              <div className="bg-primary-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">Can I install Forge on my Minecraft Java server?</h3>
                <p className="text-gray-300">
                  Yes! All our Java Edition hosting plans fully support Forge installation. You can install Forge with a single click through our control panel, or manually upload your preferred Forge version. We support all major Forge versions for different Minecraft releases.
                </p>
              </div>
              
              <div className="bg-primary-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">How do I connect to my Minecraft Java Edition server?</h3>
                <p className="text-gray-300">
                  Connecting to your server is simple. Once your server is online, you'll receive a dedicated IP address. In Minecraft Java Edition, click "Multiplayer", then "Add Server", and enter your server's IP address. Make sure you're using the same Minecraft version as your server.
                </p>
              </div>
              
              <div className="bg-primary-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">Can I switch between different Minecraft Java versions?</h3>
                <p className="text-gray-300">
                  Absolutely! Our control panel makes it easy to switch between any Minecraft Java version with just a few clicks. You can easily upgrade or downgrade your server version, though remember that world data might not be compatible between all versions.
                </p>
              </div>
            </div>
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
                "name": "What's the difference between Java Edition and Bedrock servers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Minecraft Java Edition servers are specifically for players using the Java version of Minecraft on PC. Java Edition offers more extensive mod support, custom servers, and plugin compatibility compared to Bedrock. Our Java Edition hosting is optimized specifically for this version's requirements and features."
                }
              },
              {
                "@type": "Question",
                "name": "Can I install Forge on my Minecraft Java server?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! All our Java Edition hosting plans fully support Forge installation. You can install Forge with a single click through our control panel, or manually upload your preferred Forge version. We support all major Forge versions for different Minecraft releases."
                }
              },
              {
                "@type": "Question",
                "name": "How do I connect to my Minecraft Java Edition server?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Connecting to your server is simple. Once your server is online, you'll receive a dedicated IP address. In Minecraft Java Edition, click 'Multiplayer', then 'Add Server', and enter your server's IP address. Make sure you're using the same Minecraft version as your server."
                }
              },
              {
                "@type": "Question",
                "name": "Can I switch between different Minecraft Java versions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely! Our control panel makes it easy to switch between any Minecraft Java version with just a few clicks. You can easily upgrade or downgrade your server version, though remember that world data might not be compatible between all versions."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}

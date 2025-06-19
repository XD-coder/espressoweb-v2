import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forge Server Hosting Minecraft | Modded Minecraft Servers",
  description: "Premium Forge server hosting for modded Minecraft. Easy one-click installation of popular modpacks, 24/7 expert support, and high-performance hardware for smooth gameplay.",
  keywords: "forge server hosting minecraft, modded minecraft, minecraft servers, modded minecraft server, minecraft forge hosting, ftb server hosting, custom modpack hosting",
  alternates: {
    canonical: '/forge-hosting',
  },
  openGraph: {
    title: "Forge Server Hosting Minecraft | Modded Minecraft Servers",
    description: "Your go-to for High performance and cheap Forge server hosting with modpack installations and expert modded Minecraft support.",
    url: 'https://espressohost.xyz/forge-hosting',
    images: [
      {
        url: 'https://opengraph.b-cdn.net/production/images/f070a378-9002-47f0-add3-3b44515d33e8.png?token=728-gfamY_EGIxiH6W1RMEP47tF5-dXAhvcnNu4YyRE&height=1200&width=1200&expires=33286319952',
        width: 1200,
        height: 1200,
        alt: 'Forge Server Hosting - Espresso Hosting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forge Server Hosting Minecraft | Modded Minecraft Servers',
    description: 'Your go-to for High performance and cheap Forge server hosting for modded Minecraft.',
    images: ['https://opengraph.b-cdn.net/production/images/f070a378-9002-47f0-add3-3b44515d33e8.png?token=728-gfamY_EGIxiH6W1RMEP47tF5-dXAhvcnNu4YyRE&height=1200&width=1200&expires=33286319952'],
  }
};

export default function ForgeHosting() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-cover bg-center relative" style={{ backgroundImage: `url('/hero-bg.png')` }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Forge Server Hosting</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Run your modded Minecraft server with our high-performance Forge hosting. 
              Support for all popular modpacks and custom configurations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/plans"
                className="bg-accent-500 hover:bg-accent-600 text-primary-950 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300"
              >
                View Forge Hosting Plans
              </Link>
              <Link
                href="#modpacks"
                className="bg-transparent border-2 border-primary-500 text-primary-500 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-primary-500 hover:text-white"
              >
                Supported Modpacks
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-primary-950">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Why Choose Our Forge Hosting</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-primary-900 p-8 rounded-lg shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-4">One-Click Modpacks</h3>
                <p className="text-gray-300 text-center">
                  Install popular modpacks like FTB, All The Mods, Create, and many more with a single click. No complex setup required.
                </p>
              </div>
              
              <div className="bg-primary-900 p-8 rounded-lg shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-4">Optimized for Mods</h3>
                <p className="text-gray-300 text-center">
                  Servers configured specifically for modded Minecraft with optimized Java arguments and performance settings.
                </p>
              </div>
              
              <div className="bg-primary-900 p-8 rounded-lg shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-4">Automatic Backups</h3>
                <p className="text-gray-300 text-center">
                  Regular automated backups of your modded world and server files to prevent any data loss.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Modpack Support Section */}
        <section id="modpacks" className="py-20 bg-primary-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Supported Modpacks</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Feed The Beast (FTB)",
                "All The Mods",
                "SevTech Ages",
                "RLCraft",
                "Valhelsia",
                "Better Minecraft",
                "Enigmatica",
                "Create",
                "Sky Factory",
                "Tekkit",
                "Hexxit",
                "Crazy Craft",
                "Direwolf20",
                "FTB Academy",
                "Custom Modpacks"
              ].map((modpack) => (
                <div key={modpack} className="bg-primary-800 p-6 rounded-lg hover:bg-primary-700 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">{modpack}</h3>
                  <p className="text-gray-300 text-sm">One-click installation</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link
                href="/plans"
                className="bg-accent-500 hover:bg-accent-600 text-primary-950 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 inline-block"
              >
                Get Started with Forge Hosting
              </Link>
            </div>
          </div>
        </section>

        {/* Hardware Specs Section */}
        <section className="py-20 bg-primary-950">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Hardware Optimized for Modded Minecraft</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Performance Where It Matters</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="bg-accent-500 rounded-full p-1 mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">High-Frequency CPUs</h4>
                      <p className="text-gray-300">
                        Latest generation processors with high single-thread performance, critical for Minecraft and Forge servers.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-500 rounded-full p-1 mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">Generous RAM Allocation</h4>
                      <p className="text-gray-300">
                        Modded Minecraft needs more memory. Our plans include ample RAM to handle even the heaviest modpacks.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent-500 rounded-full p-1 mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">NVMe SSD Storage</h4>
                      <p className="text-gray-300">
                        Ultra-fast storage for quick world loading and chunk generation, crucial for modded servers.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-primary-900 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Recommended Specifications</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-primary-700 pb-2">
                    <span className="text-gray-300">Small Modpacks (0-50 mods)</span>
                    <span className="font-bold text-white">4GB RAM</span>
                  </div>
                  <div className="flex justify-between border-b border-primary-700 pb-2">
                    <span className="text-gray-300">Medium Modpacks (50-100 mods)</span>
                    <span className="font-bold text-white">6GB RAM</span>
                  </div>
                  <div className="flex justify-between border-b border-primary-700 pb-2">
                    <span className="text-gray-300">Large Modpacks (100-200 mods)</span>
                    <span className="font-bold text-white">8GB RAM</span>
                  </div>
                  <div className="flex justify-between border-b border-primary-700 pb-2">
                    <span className="text-gray-300">Expert/Kitchen Sink Packs (200+ mods)</span>
                    <span className="font-bold text-white">10GB+ RAM</span>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Link
                    href="/plans"
                    className="bg-accent-500 hover:bg-accent-600 text-primary-950 px-6 py-2 rounded-full font-semibold transition-all duration-300 inline-block"
                  >
                    Choose Your Plan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20 bg-primary-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-white text-center mb-16">What Our Customers Say</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-primary-800 p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent-500 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold text-white">Minecraft_Player123</h4>
                    <p className="text-gray-400 text-sm">FTB Server Owner</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "Running a Feed The Beast server with 15+ players has never been easier. No lag, no crashes, just smooth gameplay even with 150+ mods loaded."
                </p>
              </div>
              
              <div className="bg-primary-800 p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent-500 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold text-white">ModdedMaster</h4>
                    <p className="text-gray-400 text-sm">Create Mod Server Admin</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "The performance on our Create mod server is incredible. All the complex contraptions run perfectly, and the support team helped us optimize our settings."
                </p>
              </div>
              
              <div className="bg-primary-800 p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent-500 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold text-white">RPGCrafter</h4>
                    <p className="text-gray-400 text-sm">RLCraft Server Owner</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "RLCraft is a demanding modpack, but Espresso Hosting handles it perfectly. The one-click install saved me hours of configuration time."
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-20 bg-primary-950">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Forge Hosting FAQ</h2>
            
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="bg-primary-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">How do I install a custom modpack?</h3>
                <p className="text-gray-300">
                  Installing a custom modpack is easy. You can either use our one-click installer for popular modpacks, or upload your own mods via our file manager. For CurseForge or FTB modpacks, you can simply provide the pack ID or upload the zip file, and our system will handle the installation automatically.
                </p>
              </div>
              
              <div className="bg-primary-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">Which Forge versions are supported?</h3>
                <p className="text-gray-300">
                  We support all major Forge versions for Minecraft 1.7.10 through the latest release. This includes popular versions like 1.12.2, 1.16.5, 1.18.2, and 1.20.1. You can easily switch between different Forge versions through our control panel.
                </p>
              </div>
              
              <div className="bg-primary-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">Can I add more RAM to my Forge server later?</h3>
                <p className="text-gray-300">
                  Absolutely! You can upgrade your server's RAM at any time through your client area. The upgrade is applied instantly, and your server will restart with the new resources. This is perfect if you start with a smaller modpack and want to add more mods later.
                </p>
              </div>
                <div className="bg-primary-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">Do you offer support for configuring mods?</h3>
                <p className="text-gray-300">
                  Yes! Our support team is experienced with many popular mods and modpacks. While we can't help with every single mod due to the vast number available, we're always ready to assist with common configuration issues, performance optimization, and troubleshooting.
                </p>
              </div>

              <div className="bg-primary-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">How do I install Forge on my Minecraft server?</h3>
                <p className="text-gray-300">
                  With our hosting platform, installing Forge is incredibly simple. When creating your server, select "Forge" as your server type in the control panel, then choose your preferred Minecraft version. Our system will automatically download and install the recommended Forge version for that Minecraft release. Alternatively, you can manually upload any specific Forge version through our file manager.
                </p>
              </div>

              <div className="bg-primary-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">How much does Forge server hosting cost?</h3>
                <p className="text-gray-300">
                  Our Forge server hosting plans start at ₹299/month for the Espresso plan (4GB RAM), suitable for small modpacks. For medium modpacks, we recommend our Latte plan at ₹399/month (6GB RAM), while larger modpacks like All The Mods are best on our Americano plan at ₹599/month (8GB RAM). Each plan includes unlimited SSD storage, DDoS protection, and 24/7 support. 
                </p>
              </div>
              
              <div className="bg-primary-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">What's the difference between Forge and Fabric for Minecraft modding?</h3>
                <p className="text-gray-300">
                  Forge is the most widely used modding platform with extensive compatibility for thousands of mods across many Minecraft versions. It supports larger, more complex modifications. Fabric is a lighter, more modern alternative that often updates faster for new Minecraft versions but has fewer available mods. We support both, though Forge remains more popular for fully featured modded experiences.
                </p>
              </div>

              <div className="bg-primary-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">Can I use my existing world with a Forge server?</h3>
                <p className="text-gray-300">
                  Yes! You can upload your existing Minecraft world to our Forge server through our file manager or SFTP access. Simply compress your world folder to a ZIP archive, upload it to your server, and extract it to the correct location. Keep in mind that converting a vanilla world to a heavily modded one may cause some generation issues in unexplored chunks, but pre-existing areas will remain intact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Forge Server Setup Guidelines - SEO Optimized */}
        <section className="py-20 bg-primary-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Forge Server Setup Guidelines</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Getting Started with Your Forge Server</h3>
                <ol className="space-y-6">
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="font-bold text-primary-950">1</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Choose the Right Plan</h4>
                      <p className="text-gray-300">
                        Select a hosting plan based on your modpack size. For small modpacks (0-50 mods), our Espresso plan with 4GB RAM works well. For medium modpacks (50-100 mods), choose the Latte plan with 6GB RAM. Larger modpacks with 100+ mods need at least 8GB RAM from our Americano plan.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="font-bold text-primary-950">2</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Install Forge</h4>
                      <p className="text-gray-300">
                        After ordering, log into your control panel and select "Forge" as your server type. Choose your Minecraft version (1.12.2, 1.16.5, 1.18.2, and 1.20.1 are popular for mods), and our system will automatically install the compatible Forge version.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="font-bold text-primary-950">3</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Install Your Modpack</h4>
                      <p className="text-gray-300">
                        For popular modpacks, use our one-click installer to add FTB, All The Mods, RLCraft, and other packs instantly. For custom modpacks, use our file manager to upload mod files to the "mods" folder or upload a ZIP of the entire modpack.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Optimizing Your Forge Server</h3>
                <ol className="space-y-6">
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="font-bold text-primary-950">4</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Configure Server Settings</h4>
                      <p className="text-gray-300">
                        Access server.properties through our file manager to adjust view-distance (6-10 is recommended for modded servers), spawn-protection, and other settings. For modpack-specific configurations, check the modpack documentation or our knowledge base for optimization guides.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="font-bold text-primary-950">5</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Adjust Java Arguments</h4>
                      <p className="text-gray-300">
                        Our system automatically applies optimized Java arguments for your server's RAM allocation, but you can fine-tune these through the Startup Parameters section in your control panel. Adding performance mods like Aikar's flags can further enhance server performance.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="font-bold text-primary-950">6</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Add Performance Mods</h4>
                      <p className="text-gray-300">
                        Consider adding performance-enhancing mods like FoamFix, AI Improvements, or Clumps to your modpack. These mods can significantly improve server performance without changing gameplay. Our support team can recommend the best performance mods for your specific Minecraft and Forge version.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link
                href="/plans"
                className="bg-accent-500 hover:bg-accent-600 text-primary-950 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 inline-block"
              >
                Start Setting Up Your Forge Server
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-accent-500">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-primary-950 mb-6">Ready to Start Your Modded Adventure?</h2>
            <p className="text-xl text-primary-900 mb-8 max-w-2xl mx-auto">
              Get your Forge server up and running in minutes with our easy setup process and expert support.
            </p>
            <Link
              href="/plans"
              className="bg-primary-900 hover:bg-primary-800 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 inline-block"
            >
              Start Your Forge Server Today
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      
      {/* Structured data for Forge hosting */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Forge Minecraft Server Hosting",
            "description": "Premium Forge server hosting for modded Minecraft with one-click modpack installation, high-performance hardware, and 24/7 support.",
            "brand": {
              "@type": "Brand",
              "name": "Espresso Hosting"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "INR",
              "lowPrice": "300",
              "highPrice": "600",
              "offerCount": "4"
            },
            "review": {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "4.8",
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": "Minecraft Community"
              }
            }
          })
        }}
      />      {/* Structured data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I install a custom modpack?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Installing a custom modpack is easy. You can either use our one-click installer for popular modpacks, or upload your own mods via our file manager. For CurseForge or FTB modpacks, you can simply provide the pack ID or upload the zip file, and our system will handle the installation automatically."
                }
              },
              {
                "@type": "Question",
                "name": "Which Forge versions are supported?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We support all major Forge versions for Minecraft 1.7.10 through the latest release. This includes popular versions like 1.12.2, 1.16.5, 1.18.2, and 1.20.1. You can easily switch between different Forge versions through our control panel."
                }
              },
              {
                "@type": "Question",
                "name": "Can I add more RAM to my Forge server later?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely! You can upgrade your server's RAM at any time through your client area. The upgrade is applied instantly, and your server will restart with the new resources. This is perfect if you start with a smaller modpack and want to add more mods later."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer support for configuring mods?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Our support team is experienced with many popular mods and modpacks. While we can't help with every single mod due to the vast number available, we're always ready to assist with common configuration issues, performance optimization, and troubleshooting."
                }
              },
              {
                "@type": "Question",
                "name": "How do I install Forge on my Minecraft server?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "With our hosting platform, installing Forge is incredibly simple. When creating your server, select 'Forge' as your server type in the control panel, then choose your preferred Minecraft version. Our system will automatically download and install the recommended Forge version for that Minecraft release. Alternatively, you can manually upload any specific Forge version through our file manager."
                }
              },
              {
                "@type": "Question",
                "name": "How much does Forge server hosting cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our Forge server hosting plans start at ₹299/month for the Espresso plan (4GB RAM), suitable for small modpacks. For medium modpacks, we recommend our Latte plan at ₹399/month (6GB RAM), while larger modpacks like All The Mods are best on our Americano plan at ₹599/month (8GB RAM). Each plan includes unlimited SSD storage, DDoS protection, and 24/7 support."
                }
              },
              {
                "@type": "Question",
                "name": "What's the difference between Forge and Fabric for Minecraft modding?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Forge is the most widely used modding platform with extensive compatibility for thousands of mods across many Minecraft versions. It supports larger, more complex modifications. Fabric is a lighter, more modern alternative that often updates faster for new Minecraft versions but has fewer available mods. We support both, though Forge remains more popular for fully featured modded experiences."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use my existing world with a Forge server?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! You can upload your existing Minecraft world to our Forge server through our file manager or SFTP access. Simply compress your world folder to a ZIP archive, upload it to your server, and extract it to the correct location. Keep in mind that converting a vanilla world to a heavily modded one may cause some generation issues in unexplored chunks, but pre-existing areas will remain intact."
                }
              }            ]
          })
        }}
      />
      
      {/* Structured data for HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Set Up a Forge Minecraft Server",
            "description": "A step-by-step guide to setting up and optimizing your Forge Minecraft server for modded gameplay.",
            "totalTime": "PT30M",
            "tool": [
              {
                "@type": "HowToTool",
                "name": "Espresso Hosting Control Panel"
              },
              {
                "@type": "HowToTool",
                "name": "Minecraft Forge Installer"
              },
              {
                "@type": "HowToTool",
                "name": "File Manager or SFTP Client"
              }
            ],
            "step": [
              {
                "@type": "HowToStep",
                "name": "Choose the Right Plan",
                "text": "Select a hosting plan based on your modpack size. For small modpacks (0-50 mods), our Espresso plan with 4GB RAM works well. For medium modpacks (50-100 mods), choose the Latte plan with 6GB RAM. Larger modpacks with 100+ mods need at least 8GB RAM from our Americano plan.",
                "url": "https://espressohost.xyz/plans",
                "image": "https://espressohost.xyz/hero-image.png"
              },
              {
                "@type": "HowToStep",
                "name": "Install Forge",
                "text": "After ordering, log into your control panel and select \"Forge\" as your server type. Choose your Minecraft version (1.12.2, 1.16.5, 1.18.2, and 1.20.1 are popular for mods), and our system will automatically install the compatible Forge version.",
                "url": "https://espressohost.xyz/forge-hosting#installation",
                "image": "https://espressohost.xyz/hero-image.png"
              },
              {
                "@type": "HowToStep",
                "name": "Install Your Modpack",
                "text": "For popular modpacks, use our one-click installer to add FTB, All The Mods, RLCraft, and other packs instantly. For custom modpacks, use our file manager to upload mod files to the \"mods\" folder or upload a ZIP of the entire modpack.",
                "url": "https://espressohost.xyz/forge-hosting#modpacks",
                "image": "https://espressohost.xyz/hero-image.png"
              },
              {
                "@type": "HowToStep",
                "name": "Configure Server Settings",
                "text": "Access server.properties through our file manager to adjust view-distance (6-10 is recommended for modded servers), spawn-protection, and other settings. For modpack-specific configurations, check the modpack documentation or our knowledge base for optimization guides.",
                "url": "https://espressohost.xyz/forge-hosting#optimization",
                "image": "https://espressohost.xyz/hero-image.png"
              },
              {
                "@type": "HowToStep",
                "name": "Adjust Java Arguments",
                "text": "Our system automatically applies optimized Java arguments for your server's RAM allocation, but you can fine-tune these through the Startup Parameters section in your control panel. Adding performance mods like Aikar's flags can further enhance server performance.",
                "url": "https://espressohost.xyz/forge-hosting#optimization",
                "image": "https://espressohost.xyz/hero-image.png"
              },
              {
                "@type": "HowToStep",
                "name": "Add Performance Mods",
                "text": "Consider adding performance-enhancing mods like FoamFix, AI Improvements, or Clumps to your modpack. These mods can significantly improve server performance without changing gameplay. Our support team can recommend the best performance mods for your specific Minecraft and Forge version.",
                "url": "https://espressohost.xyz/forge-hosting#optimization",
                "image": "https://espressohost.xyz/hero-image.png"
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
            "name": "Forge Minecraft Server Hosting",
            "description": "Premium Forge server hosting for modded Minecraft with one-click modpack installation, high-performance hardware, and 24/7 support.",
            "brand": {
              "@type": "Brand",
              "name": "Espresso Hosting"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "INR",
              "lowPrice": "299",
              "highPrice": "599",
              "offerCount": "3"
            },
            "review": {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "4.8",
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

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forge Server Hosting | Fully Customizable Modded Minecraft",
  description: "Flexible Forge server hosting for modded Minecraft. Upload any modpack or JAR file for full control. High-performance hardware for smooth, customizable gameplay.",
  keywords: "forge server hosting, modded minecraft server hosting, custom minecraft server, upload forge jar, minecraft java server, custom modpack hosting, paper mc server",
  alternates: { 
    canonical: '/forge-hosting',
  },
  openGraph: {
    title: "Forge Server Hosting | Fully Customizable Modded Minecraft",
    description: "High-performance, flexible Forge server hosting. Upload your own JARs and modpacks for complete control over your modded Minecraft experience.",
    url: 'https://espressohost.xyz/forge-hosting',
    images: [
      {
        url: 'https://opengraph.b-cdn.net/production/images/f070a378-9002-47f0-add3-3b44515d33e8.png?token=728-gfamY_EGIxiH6W1RMEP47tF5-dXAhvcnNu4YyRE&height=1200&width=1200&expires=33286319952',
        width: 1200,
        height: 1200,
        alt: 'Customizable Forge Server Hosting - Espresso Hosting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forge Server Hosting | Fully Customizable Modded Minecraft',
    description: 'Flexible and powerful Forge server hosting. Bring your own mods, and enjoy full server control.',
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
              Total control over your modded Minecraft server. Upload any Forge version, modpack, or custom JARs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/plans"
                className="bg-accent-500 hover:bg-accent-600 text-primary-950 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300"
              >
                View Hosting Plans
              </Link>
              <Link
                href="#setup-guide"
                className="bg-transparent border-2 border-primary-500 text-primary-500 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-primary-500 hover:text-white"
              >
                Setup Guide
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10m0 0h16M4 17a2 2 0 002 2h12a2 2 0 002-2M4 7a2 2 0 012-2h4l2-3h4l2 3h4a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-4">Full Customization</h3>
                <p className="text-gray-300 text-center">
                  Upload any server JAR, including specific Forge versions, Fabric, or custom modpacks. You have complete control.
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
                  Our servers are equipped with high-performance hardware and optimized Java arguments, ideal for any modded server.
                </p>
              </div>
              
              <div className="bg-primary-900 p-8 rounded-lg shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-4">Full File Access</h3>
                <p className="text-gray-300 text-center">
                  Get complete SFTP and file manager access to manage your server files, mods, and configurations with ease.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Modpack Support Section */}
        <section id="modpacks" className="py-20 bg-primary-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Run Any Modpack</h2>
            <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
              While we don't offer a one-click installer, our platform gives you the freedom to run any modpack you desire. Simply upload the server files for your favorite pack, and you're ready to go. We support all popular modpacks, including:
            </p>
            
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
                "And any other pack!"
              ].map((modpack) => (
                <div key={modpack} className="bg-primary-800 p-6 rounded-lg hover:bg-primary-700 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">{modpack}</h3>
                  <p className="text-gray-300 text-sm">Manual installation via file upload</p>
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
                <h3 className="text-xl font-bold text-white mb-3">How do I install Forge or a modpack?</h3>
                <p className="text-gray-300">
                  Our servers default to PaperMC for optimal performance. To use Forge, you need to upload the Forge installer JAR file and your modpack files via SFTP or our file manager. You have full control to install any server type or version you need. Check our setup guide for detailed instructions.
                </p>
              </div>

              <div className="bg-primary-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">Is there a one-click mod installer?</h3>
                <p className="text-gray-300">
                  Currently, we do not offer a one-click mod or modpack installer. This approach gives you maximum flexibility to install any version of Forge, Fabric, or any custom modpack without limitations. You simply upload the server files you wish to run.
                </p>
              </div>

              <div className="bg-primary-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">Which Forge versions are supported?</h3>
                <p className="text-gray-300">
                  You can run any version of Forge. Since you upload the server files yourself, you are not limited by a predefined list. Whether you need an older version like 1.7.10 or the very latest release, you can run it on our platform.
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
                  Yes! Our support team is experienced with modded servers. While we can't configure every mod for you, we can help with server setup, performance optimization, and troubleshooting common issues related to Forge and modpacks.
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
        <section id="setup-guide" className="py-20 bg-primary-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Forge Server Setup Guide</h2>
            
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
                        Select a hosting plan based on your modpack size. For small modpacks (under 50 mods), 4GB of RAM is a good start. For larger packs (100+ mods), we recommend 8GB or more for the best experience.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="font-bold text-primary-950">2</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Upload Server Files</h4>
                      <p className="text-gray-300">
                        Download the Forge installer and your desired modpack files. Use our file manager or SFTP to upload the Forge JAR and all modpack contents to your server directory.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="font-bold text-primary-950">3</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Run the Forge Installer</h4>
                      <p className="text-gray-300">
                        Set your server's startup command to run the Forge installer JAR. Once it completes, change the startup command to run the newly created `forge-*.jar` file to launch your server.
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
                        Access `server.properties` via the file manager to adjust settings like view-distance (6-8 is recommended for modded servers). Refer to your modpack's documentation for specific configuration advice.
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
                        Our system applies optimized Java arguments by default. You can fine-tune these in the Startup Parameters section of the control panel to match your modpack's needs.
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
                        Consider adding server-side performance mods like Canary or RoadRunner to your `mods` folder. These can significantly improve performance without altering gameplay.
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
            "name": "Customizable Forge Minecraft Server Hosting",
            "description": "Flexible and powerful Forge server hosting for modded Minecraft. Upload any modpack or JAR file for full control and high-performance gameplay.",
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
                "name": "Modded Minecraft Player"
              }
            }
          })
        }}
      />
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
                "name": "How do I install Forge or a modpack?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our servers default to PaperMC for optimal performance. To use Forge, you need to upload the Forge installer JAR file and your modpack files via SFTP or our file manager. You have full control to install any server type or version you need."
                }
              },
              {
                "@type": "Question",
                "name": "Is there a one-click mod installer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Currently, we do not offer a one-click mod or modpack installer. This approach gives you maximum flexibility to install any version of Forge, Fabric, or any custom modpack without limitations. You simply upload the server files you wish to run."
                }
              },
              {
                "@type": "Question",
                "name": "Which Forge versions are supported?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can run any version of Forge. Since you upload the server files yourself, you are not limited by a predefined list. Whether you need an older version like 1.7.10 or the very latest release, you can run it on our platform."
                }
              },
              {
                "@type": "Question",
                "name": "Can I add more RAM to my Forge server later?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely! You can upgrade your server's RAM at any time through your client area. The upgrade is applied instantly, and your server will restart with the new resources."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer support for configuring mods?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Our support team is experienced with modded servers. While we can't configure every mod for you, we can help with server setup, performance optimization, and troubleshooting common issues related to Forge and modpacks."
                }
              }
            ]
          })
        }}
      />
      {/* How-To Schema for setting up a Forge Server */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Set Up a Forge Server",
            "description": "A step-by-step guide to setting up your own modded Minecraft server using Forge.",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Choose the Right Plan",
                "text": "Select a hosting plan based on your modpack size. For small modpacks (under 50 mods), 4GB of RAM is a good start. For larger packs (100+ mods), we recommend 8GB or more.",
                "url": "https://espressohost.xyz/plans"
              },
              {
                "@type": "HowToStep",
                "name": "Upload Server Files",
                "text": "Download the Forge installer and your desired modpack files. Use our file manager or SFTP to upload the Forge JAR and all modpack contents to your server directory."
              },
              {
                "@type": "HowToStep",
                "name": "Run the Forge Installer",
                "text": "Set your server's startup command to run the Forge installer JAR. Once it completes, change the startup command to run the newly created forge-*.jar file to launch your server."
              },
              {
                "@type": "HowToStep",
                "name": "Configure Server Settings",
                "text": "Access server.properties via the file manager to adjust settings like view-distance. Refer to your modpack's documentation for specific configuration advice."
              },
              {
                "@type": "HowToStep",
                "name": "Adjust Java Arguments",
                "text": "Fine-tune Java arguments in the Startup Parameters section of the control panel to match your modpack's needs."
              },
              {
                "@type": "HowToStep",
                "name": "Add Performance Mods",
                "text": "Consider adding server-side performance mods like Canary or RoadRunner to your mods folder to improve performance."
              }
            ]
          })
        }}
      />
    </div>
  );
}

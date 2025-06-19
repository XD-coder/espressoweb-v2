import Header from '../components/Header';
import Hero from '../components/Hero';
import Plans from '../components/Plans';
import Features from '../components/Features';
import Founders from '../components/Founders';
import Footer from '../components/Footer';

// Metadata for this specific page
export const metadata = {
  title: 'Minecraft Servers | Java Edition & Forge Server Hosting | Espresso Hosting',
  description: 'Your go-to for High performance and cheap Minecraft servers. Minecraft Java Edition server hosting with one-click mod installations for Forge, modded Minecraft, and vanilla servers!',
  keywords: 'minecraft servers, minecraft java edition servers, server hosting minecraft, forge server hosting minecraft, modded minecraft, minecraft server hosting, paper minecraft server, cheap minecraft hosting, minecraft server plans, espresso hosting, minecraft java edition, forge minecraft servers, modded minecraft server hosting, minecraft server hosting with mods, minecraft server hosting with plugins, minecraft server hosting with forge, minecraft servers free trial',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Espresso Hosting | minecraft servers',
    description: 'Your go-to for High performance and cheap game server hosting.',
    url: 'https://espressohost.xyz',
    images: [
      {
        url: 'https://opengraph.b-cdn.net/production/images/f070a378-9002-47f0-add3-3b44515d33e8.png?token=728-gfamY_EGIxiH6W1RMEP47tF5-dXAhvcnNu4YyRE&height=1200&width=1200&expires=33286319952',
        width: 1200,
        height: 1200,
        alt: 'Espresso Hosting - Premium Minecraft Server Hosting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Espresso Hosting | minecraft servers',
    description: 'Your go-to for High performance and cheap game server hosting.',
    images: ['https://opengraph.b-cdn.net/production/images/f070a378-9002-47f0-add3-3b44515d33e8.png?token=728-gfamY_EGIxiH6W1RMEP47tF5-dXAhvcnNu4YyRE&height=1200&width=1200&expires=33286319952'],
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow relative">
        <Hero />
        <Plans />
        <Features />
        <Founders />
        
        {/* Additional SEO-optimized content */}
        <section className="py-10 px-4 max-w-6xl mx-auto text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Espresso Hosting for Your Minecraft Server?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Premium Performance</h3>
              <p className="text-gray-300">
                Our servers are powered by high-performance hardware with NVMe SSDs, ensuring that your Minecraft 
                experience is smooth and lag-free. We optimize our hardware specifically for Minecraft workloads, 
                delivering exceptional TPS (ticks per second) even under high load.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-gray-300">
                Our dedicated support team is available around the clock to assist with any issues. 
                Whether you need help with plugin installation, server configuration, or troubleshooting, 
                our knowledgeable staff is just a message away.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Seemless Payments</h3>
              <p className="text-gray-300">
                We use Razorpay for secure and convenient payments, supporting a variety of payment methods. Once your payment is complete, our automated system instantly delivers your Minecraft server, so you can start playing without any delay.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">DDoS Protection</h3>
              <p className="text-gray-300">
                Your server is protected by enterprise-grade DDoS protection, ensuring your gameplay remains 
                uninterrupted. We utilize advanced mitigation techniques to defend against attacks of all sizes.
              </p>
            </div>
          </div>
        </section>
        
        {/* Minecraft Server Hosting Types - SEO optimized section */}
        <section className="py-12 px-4 max-w-6xl mx-auto bg-primary-900 rounded-lg my-8 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">Minecraft Server Hosting Solutions</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-primary-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-3">Java Edition Server Hosting</h3>
              <p className="text-gray-300 mb-4">
                Our optimized Minecraft Java Edition server hosting provides the perfect platform for your community. 
                Run the official Java version with support for all major versions from 1.8 to the latest 1.21 update.
              </p>
              <ul className="list-disc pl-5 text-gray-300 space-y-2">
                <li>Full support for plugin APIs like Spigot, Paper, and Purpur</li>
                <li>One-click version switching between all major Minecraft versions</li>
                <li>Custom JAR support for specialized server types</li>
                <li>Full file access via SFTP and our browser-based file manager</li>
              </ul>
            </div>
            
            <div className="bg-primary-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-3">Forge Server Hosting</h3>
              <p className="text-gray-300 mb-4">
                Host your modded Minecraft server with our specialized Forge server hosting. We support all popular 
                Forge versions, making it easy to build the perfect modded gameplay experience.
              </p>
              <ul className="list-disc pl-5 text-gray-300 space-y-2">
                <li>One-click installation of popular modpacks like FTB, ATM, and Create</li>
                <li>Automatic mod dependency resolution and conflict detection</li>
                <li>Optimized server settings for heavily modded environments</li>
                <li>Extra RAM allocations available for resource-intensive modpacks</li>
              </ul>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-3">Modded Minecraft Hosting</h3>
              <p className="text-gray-300 mb-4">
                Run any modded Minecraft server with ease. Our platform supports not just Forge but also Fabric, 
                Quilt, and other mod loaders to give you maximum flexibility.
              </p>
              <ul className="list-disc pl-5 text-gray-300 space-y-2">
                <li>Support for custom modpacks and mod configurations</li>
                <li>Compatible with CurseForge, Modrinth, and FTB modpacks</li>
                <li>Automated backups to protect your modded world</li>
                <li>Advanced configuration options for mod compatibility</li>
              </ul>
            </div>
            
            <div className="bg-primary-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-3">Paper MC Server Hosting</h3>
              <p className="text-gray-300 mb-4">
                Get maximum performance with our Paper Minecraft server hosting. Paper offers significant 
                optimizations over vanilla Minecraft while maintaining plugin compatibility.
              </p>
              <ul className="list-disc pl-5 text-gray-300 space-y-2">
                <li>Significantly improved TPS (ticks per second) compared to vanilla</li>
                <li>Compatible with most Bukkit and Spigot plugins</li>
                <li>Advanced configuration options for server optimization</li>
                <li>Regular updates to the latest Paper builds</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* FAQ Section - Highly optimized for search queries */}
        <section className="py-12 px-4 max-w-6xl mx-auto text-white">
          <h2 className="text-3xl font-bold mb-10 text-center">Minecraft Server Hosting FAQ</h2>
          
          <div className="space-y-6">
            <div className="bg-primary-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">How do I start my own Minecraft Java Edition server?</h3>
              <p className="text-gray-300">
                Starting your Minecraft Java Edition server with Espresso Hosting is simple. Select a hosting plan that matches your needs, complete the checkout process, and your server will be instantly deployed. Our control panel allows you to select your preferred Minecraft version, install plugins or mods with one click, and start your server within minutes. No technical knowledge required!
              </p>
            </div>
            
            <div className="bg-primary-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Which Minecraft server type is best for mods?</h3>
              <p className="text-gray-300">
                For modded Minecraft, Forge server hosting is the most popular and widely compatible option. Forge allows you to install a vast library of mods, from small gameplay tweaks to complete overhauls. Our Forge server hosting automates the installation process, handling all the technical aspects of setting up a modded server. We also support Fabric for lightweight modding and specialized modpacks.
              </p>
            </div>
            
            <div className="bg-primary-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Can I run plugins on my Minecraft server?</h3>
              <p className="text-gray-300">
                Yes! All our Minecraft server hosting plans support plugins through various server types including Spigot, Paper, and Purpur. You can easily install popular plugins like Essentials, WorldEdit, GriefPrevention, and thousands more through our one-click installer or by uploading custom plugins. Our Paper MC servers offer the best balance of performance and plugin compatibility.
              </p>
            </div>
            
            <div className="bg-primary-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">How much RAM do I need for a modded Minecraft server?</h3>
              <p className="text-gray-300">
                For modded Minecraft servers, we recommend at least 4GB RAM for small to medium modpacks with a few players. Larger modpacks like FTB or All The Mods may require 6-8GB or more, especially with higher player counts. Our Americano plan is perfect for heavily modded servers, while our Latte plan works well for medium-sized modpacks. You can always upgrade your plan if you need more resources.
              </p>
            </div>
            
            <div className="bg-primary-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Do you offer Minecraft Forge server hosting in India?</h3>
              <p className="text-gray-300">
                Yes, we offer optimized Minecraft Forge server hosting with servers located in Mumbai, India. This provides low-latency connections for Indian players, making gameplay smooth and responsive. Our Indian Minecraft server hosting includes the same premium features as our global options, including mod support, 24/7 support, and our easy-to-use control panel.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

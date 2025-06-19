import Header from '../components/Header';
import Hero from '../components/Hero';
import Plans from '../components/Plans';
import Features from '../components/Features';
import Founders from '../components/Founders';
import Footer from '../components/Footer';

// Metadata for this specific page
export const metadata = {
  title: 'Espresso Hosting | Premium Minecraft Server Hosting',
  description: 'Get premium Minecraft server hosting with 99.9% uptime, 24/7 support, and easy setup. Start your server journey with Espresso Hosting today!',
  alternates: {
    canonical: '/',
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
      </main>
      <Footer />
    </div>
  );
}

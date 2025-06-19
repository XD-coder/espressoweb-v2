import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-primary-950 text-white py-10 mt-20" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-2" aria-label="Go to homepage">
            <Image src="/coffee-bean.svg" alt="Espresso Hosting Logo" width={40} height={40} />
            <span className="text-2xl font-bold">Espresso Hosting</span>
          </Link>
          <p className="text-primary-300 text-sm">
            Your premier destination for high-performance, reliable Minecraft server hosting with 24/7 support.
          </p>
          <div className="flex space-x-4 pt-2">
            <a href="https://discord.gg/espressohosting" target="_blank" rel="noopener noreferrer" aria-label="Join our Discord community">
              <Image src="/discord.svg" alt="Discord" width={24} height={24} />
            </a>
            <a href="https://twitter.com/espressohosting" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter">
              <svg className="h-6 w-6 fill-current text-primary-300 hover:text-accent-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.95.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <nav aria-label="Company Navigation">
            <ul className="space-y-2">
              <li><Link href="/about" className="text-primary-300 hover:text-accent-500 transition-colors duration-200">About Us</Link></li>
              <li><Link href="/about#contact-us" className="text-primary-300 hover:text-accent-500 transition-colors duration-200">Contact</Link></li>
            </ul>
          </nav>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Hosting Services</h3>
          <nav aria-label="Services Navigation">
            <ul className="space-y-2">
              <li><Link href="/plans" className="text-primary-300 hover:text-accent-500 transition-colors duration-200">Minecraft Server Hosting</Link></li>
              <li><Link href="/plans#premium" className="text-primary-300 hover:text-accent-500 transition-colors duration-200">Premium Plans</Link></li>
              <li><Link href="/Creating-Panel" className="text-primary-300 hover:text-accent-500 transition-colors duration-200">Control Panel</Link></li>
              <li><Link href="/billing" className="text-primary-300 hover:text-accent-500 transition-colors duration-200">Billing & Management</Link></li>
            </ul>
          </nav>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Legal</h3>
          <nav aria-label="Legal Navigation">
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-primary-300 hover:text-accent-500 transition-colors duration-200">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-primary-300 hover:text-accent-500 transition-colors duration-200">Terms of Service</Link></li>
              <li><Link href="/refund" className="text-primary-300 hover:text-accent-500 transition-colors duration-200">Refund Policy</Link></li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-8">
        <div className="pt-8 border-t border-primary-700 text-primary-300 text-sm">
          <p className="mb-2">Espresso Hosting offers premium Minecraft server hosting for all versions including the latest updates. Our hosting solutions support popular mods such as Forge, Spigot, Paper, Bukkit, and many more.</p>
          <p className="mb-4">We pride ourselves on our 99.9% uptime guarantee, unlimited storage, anti-DDoS protection, and 24/7 customer support for all Minecraft hosting needs.</p>
        </div>
        
        <div className="text-center text-primary-400 text-sm mt-6 border-t border-primary-700 pt-6">
          © {new Date().getFullYear()} Espresso Hosting. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-primary-950 text-white py-10 mt-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/coffee-bean.svg" alt="Espresso Hosting Logo" width={40} height={40} />
            <span className="text-2xl font-bold">Espresso Hosting</span>
          </Link>
          <p className="text-primary-300 text-sm">
            Your premier destination for high-performance, reliable game server hosting.
          </p>
          <div className="flex space-x-4">
            {/* Social Media Icons */}
            <a href="#" className="text-primary-300 hover:text-accent-500 transition-colors duration-200">
              <Image src="/discord.svg" alt="Discord" width={24} height={24} />
            </a>
            <a href="#" className="text-primary-300 hover:text-accent-500 transition-colors duration-200">
              <Image src="/twitter.svg" alt="Twitter" width={24} height={24} />
            </a>
            <a href="#" className="text-primary-300 hover:text-accent-500 transition-colors duration-200">
              <Image src="/facebook.svg" alt="Facebook" width={24} height={24} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="text-primary-300 hover:text-accent-500 transition-colors duration-200">About Us</Link></li>
            <li><Link href="/contact" className="text-primary-300 hover:text-accent-500 transition-colors duration-200">Contact</Link></li>
            <li><Link href="/blog" className="text-primary-300 hover:text-accent-500 transition-colors duration-200">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li><Link href="/plans/minecraft" className="text-primary-300 hover:text-accent-500 transition-colors duration-200">Minecraft Hosting</Link></li>
            <li><Link href="/plans/discord-bot" className="text-primary-300 hover:text-accent-500 transition-colors duration-200">Discord Bot Hosting</Link></li>
            <li><Link href="/plans" className="text-primary-300 hover:text-accent-500 transition-colors duration-200">View All Plans</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><Link href="/privacy" className="text-primary-300 hover:text-accent-500 transition-colors duration-200">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-primary-300 hover:text-accent-500 transition-colors duration-200">Terms of Service</Link></li>
            <li><Link href="/refund" className="text-primary-300 hover:text-accent-500 transition-colors duration-200">Refund Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-primary-400 text-sm mt-10 border-t border-primary-700 pt-6">
        © {new Date().getFullYear()} Espresso Hosting. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
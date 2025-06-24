import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

const Footer = () => {  return (
    <footer className="bg-card border-t border-border py-16 mt-20" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Image 
                  src="/coffee-bean.svg" 
                  alt="Espresso Hosting Logo" 
                  width={40} 
                  height={40} 
                  className="transition-transform duration-500 group-hover:rotate-[360deg]" 
                />
              </div>
              <span className="text-xl font-bold">
                <span className="text-primary">Espresso</span> Hosting
              </span>
            </Link>
            
            <p className="text-muted-foreground text-sm max-w-xs">
              Your premier destination for high-performance, reliable Minecraft server hosting with 24/7 support and industry-leading uptime.
            </p>
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://discord.gg/espressohosting" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Join our Discord community"
                className="p-2 rounded-full bg-card hover:bg-muted transition-colors"
              >
                <Image src="/discord.svg" alt="Discord" width={20} height={20} />
              </a>
              <a 
                href="https://twitter.com/espressohosting" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow us on Twitter"
                className="p-2 rounded-full bg-card hover:bg-muted transition-colors"
              >
                <svg className="h-5 w-5 fill-current text-foreground/70 hover:text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.95.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="md:ml-12 lg:ml-0">
            <h3 className="text-lg font-semibold mb-5 text-foreground">Company</h3>
            <nav aria-label="Company Navigation">
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/about" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about#contact-us" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-foreground">Hosting Services</h3>
            <nav aria-label="Services Navigation">
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/plans" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Minecraft Server Hosting
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/plans#premium" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Premium Plans
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/Creating-Panel" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Control Panel
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/billing" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Billing & Management
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-foreground">Legal</h3>
            <nav aria-label="Legal Navigation">
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/privacy" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/terms" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/refund" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="pt-8 border-t border-border">
          <p className="text-muted-foreground text-xs sm:text-sm mb-4 max-w-4xl">
            Espresso Hosting offers premium Minecraft server hosting for all versions including the latest updates. 
            Our hosting solutions support popular mods such as Forge, Spigot, Paper, Bukkit, and many more with 
            NVMe SSD storage, unlimited bandwidth, and one-click installations.
          </p>
          <p className="text-muted-foreground text-xs sm:text-sm">
            We pride ourselves on our 99.9% uptime guarantee, anti-DDoS protection, and 24/7 customer support for all Minecraft hosting needs.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left mt-8 pt-6 border-t border-border">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Espresso Hosting. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <span className="text-xl font-bold" style={{
          background: 'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          METAI   KI   MA   KI   CHUT KALI
        </span>
      </div>
    </footer>
  );
};

export default Footer;
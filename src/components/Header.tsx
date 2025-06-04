import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="w-full bg-primary-950 text-white shadow-lg">
      {/* Promotional Banner */}
      <div className="bg-accent-500 text-center py-2 text-sm bg-red-700 font-medium">
        <p>🎉 Limited Time Offer: Get 20% off all plans! Use code ESPRESSO20 🎉</p>
      </div>

      {/* Main Header */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center relative">
        
        <div className="flex items-center">
          <Link href="/" className="flex items-center fill-orange-900 space-x-2">
            <Image src="/coffee-bean.svg" alt="Espresso Hosting Logo" width={40} height={40} />
            <span className="text-2xl text-black font-mono font-extrabold ">Espresso Hosting</span>
          </Link>
        </div>

        <div className="hidden md:flex text-black font-semibold items-center space-x-8">
          <Link href="/" className="hover:text-accent-300 transition-colors duration-200">Home</Link>
          <Link href="/plans" className="hover:text-accent-300 transition-colors duration-200">Plans</Link>
          <Link href="/about" className="hover:text-accent-300 transition-colors duration-200">About Us</Link>
          <Link href="/contact" className="hover:text-accent-300 transition-colors duration-200">Contact</Link>
          <a
            href="https://panel.espressohost.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent-500 hover:bg-accent-600 text-primary-950 px-5 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            Client Area
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
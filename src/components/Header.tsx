"use client"
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {SignInButton,
  SignUpButton,
  RedirectToSignUp,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full bg-primary-200 text-white shadow-lg">
      {/* Promotional Banner */}
      <motion.div
        className="text-center py-2 text-sm bg-red-600 font-medium"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <p>🎉 Limited Time Offer: Get 20% off on all plans! ( Applied automatically at checkout )  🎉</p>
      </motion.div>

      {/* Main Header */}
      <motion.nav
        className="container mx-auto px-6 py-4 flex justify-between items-center relative"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
      >
        
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
          <Link href="https://discord.gg/yJRebH3239" className="hover:text-accent-300 transition-colors duration-200">Contact</Link>
          <Link href="/billing" className="hover:text-accent-300 transition-colors duration-200">Billing</Link>
          <a
            href="https://control.espressohost.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent-500 hover:bg-accent-600 text-primary-950 px-5 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            Control Panel
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
          <button onClick={toggleMobileMenu} className="text-black focus:outline-none ml-4">
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
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
        {/* login signup clerk */}

        <div className="hidden md:flex text-primary-700 font-bold items-center space-x-4"><SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut></div>
          
        
      </motion.nav>

      {/* Mobile Menu */} 
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-primary-100 text-black py-4 shadow-lg"
        >
          <nav className="flex flex-col items-center space-y-4">
            <Link href="/" className="hover:text-accent-300 transition-colors duration-200" onClick={toggleMobileMenu}>Home</Link>
            <Link href="/plans" className="hover:text-accent-300 transition-colors duration-200" onClick={toggleMobileMenu}>Plans</Link>
            <Link href="/about" className="hover:text-accent-300 transition-colors duration-200" onClick={toggleMobileMenu}>About Us</Link>
            <Link href="https://discord.gg/yJRebH3239" className="hover:text-accent-300 transition-colors duration-200" onClick={toggleMobileMenu}>Contact</Link>
            <Link href="/billing" className="hover:text-accent-300 transition-colors duration-200" onClick={toggleMobileMenu}>Billing</Link>
            <a
              href="https://control.espressohost.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-500 hover:bg-accent-600 text-primary-950 px-5 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg transform hover:scale-105"
              onClick={toggleMobileMenu}
            >
              Control Panel
            </a>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
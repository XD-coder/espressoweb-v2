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
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="w-full bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-sm">
      {/* Promotional Banner - Uncomment when needed */}
      <motion.div
        className="text-center py-2 text-sm bg-primary text-primary-foreground font-medium"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p>🎉 Limited Time Offer: Get 20% off on all plans! (Applied automatically at checkout) 🎉</p>
      </motion.div>

      {/* Main Header */}
      <motion.nav
        className="container mx-auto px-4 py-4 flex justify-between items-center relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Image 
                src="/coffee-bean.svg" 
                alt="Espresso Hosting Logo" 
                width={40} 
                height={40} 
                className="transition-transform duration-500 group-hover:rotate-[360deg]"
              />
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <span className="text-xl md:text-2xl font-bold text-foreground">
              <span className="text-primary">Espresso</span> Hosting
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link 
            href="/" 
            className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium text-sm"
          >
            Home
          </Link>
          <Link 
            href="/plans" 
            className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium text-sm"
          >
            Plans
          </Link>
          <Link 
            href="/about" 
            className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium text-sm"
          >
            About Us
          </Link>
          <Link 
            href="https://discord.gg/yJRebH3239" 
            className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium text-sm"
          >
            Contact
          </Link>
          <Link 
            href="/billing" 
            className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium text-sm"
          >
            Billing
          </Link>
          
          <ThemeToggle />
          
          <a
            href="https://control.espressohost.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground hover:bg-accent-dark px-4 py-2 rounded-[var(--radius)] font-medium transition-all duration-300 text-sm shadow-sm"
          >
            Control Panel
          </a>
        </div>
          {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          
          <div className="flex items-center">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <div className="flex space-x-2">
                <SignInButton mode="modal">
                  <button className="bg-primary text-primary-foreground px-3 py-1.5 rounded-[var(--radius)] text-sm font-medium">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="bg-accent text-accent-foreground px-3 py-1.5 rounded-[var(--radius)] text-sm font-medium">
                    Sign Up
                  </button>
                </SignUpButton>
              </div>
            </SignedOut>
          </div>
          
          <button 
            onClick={toggleMobileMenu} 
            className="ml-2 p-2 rounded-md text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
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
          {/* Desktop login signup clerk */}
        <div className="hidden md:flex items-center gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-3">
              <SignInButton mode="modal">
                <button className="px-4 py-2 text-sm text-foreground hover:text-primary font-medium transition-colors">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="bg-primary hover:bg-primary-dark text-primary-foreground px-4 py-2 rounded-[var(--radius)] text-sm font-medium transition-all shadow-sm">
                  Sign Up
                </button>
              </SignUpButton>
            </div>
          </SignedOut>
        </div>
      </motion.nav>

      {/* Mobile Menu - Slide in from the top with animation */}
      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm" 
            onClick={toggleMobileMenu}
          ></div>
          
          <motion.div 
            className="relative bg-card border-b border-border shadow-lg"
            initial={{ height: 0, opacity: 0, y: -20 }}
            animate={{ height: 'auto', opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="container mx-auto px-6 py-6">
              <nav className="flex flex-col divide-y divide-border">
                <Link 
                  href="/" 
                  onClick={toggleMobileMenu} 
                  className="py-4 text-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
                <Link 
                  href="/plans" 
                  onClick={toggleMobileMenu} 
                  className="py-4 text-foreground hover:text-primary transition-colors"
                >
                  Plans
                </Link>
                <Link 
                  href="/about" 
                  onClick={toggleMobileMenu} 
                  className="py-4 text-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
                <Link 
                  href="https://discord.gg/yJRebH3239" 
                  onClick={toggleMobileMenu} 
                  className="py-4 text-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
                <Link 
                  href="/billing" 
                  onClick={toggleMobileMenu} 
                  className="py-4 text-foreground hover:text-primary transition-colors"
                >
                  Billing
                </Link>
                <div className="py-4">
                  <a
                    href="https://control.espressohost.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full py-3 bg-accent text-accent-foreground text-center rounded-[var(--radius)] font-medium shadow-sm"
                    onClick={toggleMobileMenu}
                  >
                    Control Panel
                  </a>
                </div>
              </nav>
            </div>
          </motion.div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
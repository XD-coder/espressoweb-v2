"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Theme = 'light' | 'dark';

export default function ThemeToggle() {
  const [theme, setThemeState] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // On mount, read the theme from localStorage or user preference
    const storedTheme = localStorage.getItem('theme') as Theme;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme based on stored preference or system preference
    if (storedTheme === 'dark' || storedTheme === 'light') {
      setThemeState(storedTheme);
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    } else if (prefersDark) {
      setThemeState('dark');
      document.documentElement.classList.add('dark');
    }
    
    setMounted(true);
  }, []);

  const setTheme = (newTheme: Theme) => {
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    setThemeState(newTheme);
  };

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
        <span className="sr-only">Toggle theme</span>
      </div>
    );
  }

  return (
    <motion.button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="relative w-10 h-10 rounded-[var(--radius-full)] flex items-center justify-center shadow transition-colors bg-secondary/90 hover:bg-secondary text-foreground"
      whileTap={{ scale: 0.9 }}
      aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
    >
      <span className="sr-only">Toggle theme</span>
      
      {/* Sun Icon */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute"
        initial={{ opacity: theme === "dark" ? 0 : 1, rotate: theme === "dark" ? -50 : 0 }}
        animate={{ opacity: theme === "dark" ? 0 : 1, rotate: theme === "dark" ? -50 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </motion.svg>

      {/* Moon Icon */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute"
        initial={{ opacity: theme === "dark" ? 1 : 0, rotate: theme === "dark" ? 0 : 50 }}
        animate={{ opacity: theme === "dark" ? 1 : 0, rotate: theme === "dark" ? 0 : 50 }}
        transition={{ duration: 0.3 }}
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </motion.svg>
    </motion.button>
  );
}

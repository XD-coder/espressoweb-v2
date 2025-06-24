import { Inter, Lora, Fira_Code } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const lora = Lora({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
});

export const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
});

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Panel Setup | Espresso Hosting',
  description: 'Setup your Minecraft hosting control panel account and get your login credentials.',
  robots: {
    index: false, // Don't index this page as it's a private user flow
    follow: true,
  },
};

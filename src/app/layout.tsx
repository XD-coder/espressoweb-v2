import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Espresso Hosting | Premium Minecraft Server Hosting",
  description: "Your go-to for reliable and high-performance Minecraft server hosting with 99.9% uptime, 24/7 support, and easy setup. Start your server today!",
  keywords: "minecraft hosting, game server hosting, minecraft server, espresso hosting, premium hosting, minecraft mods",
  metadataBase: new URL('https://espressohost.xyz'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Espresso Hosting | Premium Minecraft Server Hosting",
    description: "Your go-to for reliable and high-performance Minecraft server hosting with 99.9% uptime, 24/7 support, and easy setup.",
    url: 'https://espressohost.xyz',
    siteName: 'Espresso Hosting',
    images: [
      {
        url: 'https://espressohost.xyz/hero-image.png',
        width: 1200,
        height: 630,
        alt: 'Espresso Hosting - Premium Minecraft Server Hosting',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Espresso Hosting | Premium Minecraft Server Hosting',
    description: 'Your go-to for reliable and high-performance Minecraft server hosting with 99.9% uptime and 24/7 support.',
    images: ['https://espressohost.xyz/hero-image.png'],
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`antialiased bg-black`}
      >
        <ClerkProvider>{children}</ClerkProvider>
        
        {/* Structured data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Espresso Hosting",
              "url": "https://espressohost.xyz",
              "logo": "https://espressohost.xyz/coffee-bean.svg",
              "description": "Your go-to for reliable and high-performance Minecraft server hosting with 99.9% uptime, 24/7 support, and easy setup.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://discord.gg/espressohosting", 
                "https://twitter.com/espressohosting"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Espresso Hosting | minecraft servers",
  description: "Your go-to for High performance and cheap game server hosting. We offer Minecraft Java Edition servers, modded Minecraft hosting, and Forge server hosting with 24/7 support.",
  keywords: "minecraft servers, minecraft java edition servers, server hosting minecraft, forge server hosting, modded minecraft, minecraft server hosting india, minecraft server plans, best minecraft server hosting",
  metadataBase: new URL('https://espressohost.xyz'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Espresso Hosting | minecraft servers",
    description: "Your go-to for High performance and cheap game server hosting.",
    url: 'https://espressohost.xyz',
    siteName: 'Espresso Hosting',
    images: [
      {
        url: 'https://opengraph.b-cdn.net/production/images/f070a378-9002-47f0-add3-3b44515d33e8.png?token=728-gfamY_EGIxiH6W1RMEP47tF5-dXAhvcnNu4YyRE&height=1200&width=1200&expires=33286319952',
        width: 1200,
        height: 1200,
        alt: 'Espresso Hosting - Premium Minecraft Server Hosting',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Espresso Hosting | minecraft servers',
    description: 'Your go-to for High performance and cheap game server hosting.',
    images: ['https://opengraph.b-cdn.net/production/images/f070a378-9002-47f0-add3-3b44515d33e8.png?token=728-gfamY_EGIxiH6W1RMEP47tF5-dXAhvcnNu4YyRE&height=1200&width=1200&expires=33286319952'],
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
        <ClerkProvider afterSignUpUrl="/panel-setup">
          <Analytics />
          {children}
        </ClerkProvider>
        
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
              "description": "Provider of premium Minecraft Java Edition server hosting with support for Forge, modded servers, and Paper MC. 99.9% uptime and 24/7 support.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://espressohost.xyz",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://espressohost.xyz/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How do I start my own Minecraft Java Edition server?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Starting your Minecraft Java Edition server with Espresso Hosting is simple. Select a hosting plan that matches your needs, complete the checkout process, and your server will be instantly deployed. Our control panel allows you to select your preferred Minecraft version, install plugins or mods with one click, and start your server within minutes. No technical knowledge required!"
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which Minecraft server type is best for mods?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For modded Minecraft, Forge server hosting is the most popular and widely compatible option. Forge allows you to install a vast library of mods, from small gameplay tweaks to complete overhauls. Our Forge server hosting automates the installation process, handling all the technical aspects of setting up a modded server."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I run plugins on my Minecraft server?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! All our Minecraft server hosting plans support plugins through various server types including Spigot, Paper, and Purpur. You can easily install popular plugins like Essentials, WorldEdit, GriefPrevention, and thousands more through our one-click installer or by uploading custom plugins."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much RAM do I need for a modded Minecraft server?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For modded Minecraft servers, we recommend at least 4GB RAM for small to medium modpacks with a few players. Larger modpacks like FTB or All The Mods may require 6-8GB or more, especially with higher player counts."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer Minecraft Forge server hosting in India?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer optimized Minecraft Forge server hosting with servers located in Mumbai, India. This provides low-latency connections for Indian players, making gameplay smooth and responsive."
                  }
                }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}

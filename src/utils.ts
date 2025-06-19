import type { Metadata } from 'next';

/**
 * SEO and Meta utilities for Espresso Hosting
 */

// Generate canonical URL
export const getCanonicalUrl = (path: string): string => {
  const baseUrl = 'https://espressohost.xyz';
  return `${baseUrl}${path}`;
};

// Generate metadata for pages
export const generateMetadata = ({
  title,
  description,
  path,
  keywords = '',
  ogImage = '/hero-image.png',
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  ogImage?: string;
}): Metadata => {
  const url = getCanonicalUrl(path);
  
  return {
    title,
    description,
    keywords,
    metadataBase: new URL('https://espressohost.xyz'),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Espresso Hosting',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${title} - Espresso Hosting`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
};

// Structure product data for JSON-LD
export const generateProductSchema = (product: {
  name: string;
  description: string;
  price: string;
  currency?: string;
  image?: string;
}) => {
  return {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image || 'https://espressohost.xyz/hero-image.png',
    offers: {
      '@type': 'Offer',
      price: product.price.replace(/[^\d.]/g, ''),
      priceCurrency: product.currency || 'INR',
      availability: 'https://schema.org/InStock',
      url: 'https://espressohost.xyz/plans',
    },
  };
};

// Format meta description to optimal length
export const formatMetaDescription = (text: string): string => {
  if (text.length <= 160) return text;
  return text.substring(0, 157) + '...';
};
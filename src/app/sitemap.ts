import { MetadataRoute } from 'next';

// Get the current date in YYYY-MM-DD format
const getCurrentDate = () => {
  const date = new Date();
  return date.toISOString().split('T')[0];
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://espressohost.xyz';
  const currentDate = getCurrentDate();

  // Define all routes with their metadata
  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/plans`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/Creating-Panel`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/refund`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/billing`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
  ];
}

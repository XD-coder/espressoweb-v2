import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://espressohost.xyz';
const PUBLIC_DIR = path.join(process.cwd(), 'public');

// Get the current date in YYYY-MM-DD format
const getCurrentDate = () => {
  const date = new Date();
  return date.toISOString().split('T')[0];
};

// Define your routes with their metadata
const routes = [
  { path: '/', changefreq: 'daily', priority: '1.0' },
  { path: '/plans', changefreq: 'weekly', priority: '0.8' },
  { path: '/about', changefreq: 'monthly', priority: '0.7' },
  { path: '/Creating-Panel', changefreq: 'weekly', priority: '0.8' },
  { path: '/billing', changefreq: 'weekly', priority: '0.7' },
  { path: '/privacy', changefreq: 'monthly', priority: '0.5' },
  { path: '/terms', changefreq: 'monthly', priority: '0.5' },
  { path: '/refund', changefreq: 'monthly', priority: '0.5' },
  { path: '/thanks', changefreq: 'monthly', priority: '0.4' },
];

// Create the sitemap XML content
const generateSitemap = () => {
  const currentDate = getCurrentDate();
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  routes.forEach((route) => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${SITE_URL}${route.path}</loc>\n`;
    sitemap += `    <lastmod>${currentDate}</lastmod>\n`;
    sitemap += `    <changefreq>${route.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${route.priority}</priority>\n`;
    sitemap += '  </url>\n';
  });
  
  sitemap += '</urlset>';
  
  return sitemap;
};

// Write the sitemap to the public directory
const writeSitemap = () => {
  const sitemap = generateSitemap();
  const sitemapPath = path.join(PUBLIC_DIR, 'sitemap.xml');
  
  fs.writeFileSync(sitemapPath, sitemap);
  console.log(`✅ Sitemap generated at ${sitemapPath}`);
};

// Execute the sitemap generation
writeSitemap();

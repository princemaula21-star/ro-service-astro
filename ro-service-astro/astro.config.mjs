import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://rofixservice.in',
  
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/thank-you') && !page.includes('/test-form'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  
  // Image optimization
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  
  // Disable dev toolbar in production
  devToolbar: {
    enabled: false,
  },
  
  // Build optimization
  build: {
    inlineStylesheets: 'auto',
  },
  
  // Compression
  compressHTML: true,
  
  // Prefetch for faster navigation
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://rofixservice.in',
  
  integrations: [
    tailwind(),
  ],
  
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
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://rofixservice.co.in',
  
  integrations: [
    tailwind(),
  ],
  
  devToolbar: {
    enabled: false,
  },
  
  build: {
    inlineStylesheets: 'auto',
  },
  
  compressHTML: true,
  
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
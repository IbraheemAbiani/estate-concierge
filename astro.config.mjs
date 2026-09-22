import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  // Set this to your live domain once connected (used for canonical URLs / sitemap later).
  site: 'https://www.estateconciergegroup.com',
  build: {
    // Emit /property-management/index.html style routes (clean URLs on any host).
    format: 'directory',
  },
});

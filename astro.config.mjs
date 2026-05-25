import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://gronqa.github.io',
  base: '/JuliaPolaczyk/',
  integrations: [react()], // Tailwind is handled via CSS import in Layout.astro
  build: {
    assets: 'assets'
  }
});

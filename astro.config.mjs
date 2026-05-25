import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://gronqa.github.io',
  base: '/JuliaPolaczyk/',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    assets: 'assets' // CRITICAL: Avoids underscore folder issues on GitHub Pages
  }
});

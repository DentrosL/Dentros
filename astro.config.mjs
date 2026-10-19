// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://dentrosl.github.io',
  base: '/Dentros',

  vite: {
    plugins: [tailwindcss()],
  },
});

import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://opensource.thefutureherd.ca',
  output: 'static',
  build: {
    format: 'directory',
  },
});

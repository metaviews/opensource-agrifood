import { defineConfig } from 'astro/config';
import { rehypeRepoLinks } from './src/lib/rehypeRepoLinks.mjs';

export default defineConfig({
  site: 'https://opensource.thefutureherd.ca',
  output: 'static',
  build: {
    format: 'directory',
  },
  markdown: {
    rehypePlugins: [rehypeRepoLinks],
  },
});

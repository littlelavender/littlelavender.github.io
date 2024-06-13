import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://littlelavender.github.io',
  markdown: {
    syntaxHighlight: false
  },
  vite: {
    build: {
      rollupOptions: {
        external: ['/pagefind/pagefind.js']
      }
    }
  }
});
// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dulcet-fenglisu-dd9640.netlify.app',
  integrations: [mdx(), sitemap()],
});
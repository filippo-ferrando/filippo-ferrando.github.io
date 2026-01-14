import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import { autoNewTabExternalLinks } from './src/autoNewTabExternalLinks';
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://filippo-ferrando.github.io',
  integrations: [
    mdx(),
    sitemap(),
    tailwind({ applyBaseStyles: false }),
    partytown({
      config: {
        forward: ['dataLayer.push']
      }
    })
  ],
  markdown: {
    shikiConfig: {
      theme: 'gruvbox-dark',
      wrap: true
    },
    rehypePlugins: [[autoNewTabExternalLinks, {
      domain: 'localhost:4321'
    }]]
  },
  experimental: {
    contentIntellisense: true
  },
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js']
    }
  }
});
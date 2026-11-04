import { defineConfig } from 'astro/config';

// GitHub Pages project site: https://getsumactright.github.io/receiptlocker/
// With a custom domain, set SITE to it and BASE to '/'.
const SITE = process.env.SITE ?? 'https://getsumactright.github.io';
const BASE = process.env.BASE ?? '/receiptlocker';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'always',
  build: { format: 'directory' },
});

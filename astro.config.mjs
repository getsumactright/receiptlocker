import { defineConfig } from 'astro/config';

// The site lives at the root of receiptlockerapp.com (Cloudflare builds it from this repo).
// The GitHub Pages copy at getsumactright.github.io/receiptlocker/ sets SITE and BASE in its workflow.
const SITE = process.env.SITE ?? 'https://receiptlockerapp.com';
const BASE = process.env.BASE ?? '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'always',
  build: { format: 'directory' },
});

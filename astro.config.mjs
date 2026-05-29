// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://greennest.example',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: true,
      // Let our own src/pages/index.astro handle "/" with a host-relative
      // redirect instead of Astro emitting an absolute (site-based) one.
      redirectToDefaultLocale: false,
    },
  },
});

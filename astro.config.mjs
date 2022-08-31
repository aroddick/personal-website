// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

import react from '@astrojs/react';
export default {
  integrations: [react()],
  build: {
    site: 'https://www.alanroddick.com/',           // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
  }
};

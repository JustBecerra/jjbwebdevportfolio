/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: 'en',
  locales: ['en', 'es'],
  load: ['server', 'client'],
  i18nextServer: {
    debug: true,
  },
};

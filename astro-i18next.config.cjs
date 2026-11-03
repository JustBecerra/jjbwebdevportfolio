// CommonJS on purpose: @proload (used by astro-i18next) discards ESM configs on Node 22+
/** @type {import('astro-i18next').AstroI18nextConfig} */
module.exports = {
  defaultLocale: 'en',
  locales: ['en', 'es'],
  load: ['server', 'client'],
  i18nextServer: {
    debug: true,
  },
};

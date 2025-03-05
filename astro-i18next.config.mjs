/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: 'en',
  locales: ['en', 'es'],
  load: ['server', 'client'],
  i18nextServer: {
    debug: process.env.NODE_ENV === 'development', // Enable debug only in development
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Correct relative path for production
    },
  },
  i18nextClient: {
    debug: process.env.NODE_ENV === 'development', // Enable debug only in development
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Correct relative path for production
    },
  },
};

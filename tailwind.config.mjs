/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      blue: "#111827",
      white: "#f9fafb",
      green: "#239a3b",
      gray: "#4b5563",
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      playfairDisplay: ["Playfair-Display", "serif"],
    },
    extend: {},
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },
  plugins: [],
  darkMode: "class",
};

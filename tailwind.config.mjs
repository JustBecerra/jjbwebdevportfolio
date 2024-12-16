/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      blue: '#111827',
      white: '#f9fafb',
      green: '#239a3b',
      gray: '#4b5563',
    },
    fontFamily: {
      lato: ['Lato', 'sans-serif'],
      playfairDisplay: ['Playfair-Display', 'serif'],
    },
    extend: {
      boxShadow: {
        '2xl': '0 10px 30px 10px #239a3b',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 15s linear infinite',
      },
    },
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },
  plugins: [],
  darkMode: 'class',
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      bg: 'var(--bg)',
      surface: 'var(--surface)',
      ink: 'var(--ink)',
      muted: 'var(--muted)',
      line: 'var(--line)',
      link: 'var(--link)',
      signal: 'var(--signal)',
      'on-signal': 'var(--on-signal)',
    },
    fontFamily: {
      sans: ['Archivo', 'system-ui', 'sans-serif'],
    },
    extend: {
      maxWidth: {
        page: '72rem',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

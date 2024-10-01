import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier';
import astroEslint from 'eslint-plugin-astro';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],

    languageOptions: {
      globals: globals.browser,
    },

    ...tseslint.configs.recommended,
    ...pluginReact.configs.flat.recommended,
    ...prettier.configs.recommended,
    rules: {
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': 'error',
    },
  },
  {
    files: ['**/*.astro'],

    plugins: {
      astro: astroEslint,
    },
    languageOptions: {
      parser: astroEslint.parsers.astroEslintParser,
    },

    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
    },
  },
];

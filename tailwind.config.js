/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
  darkMode: 'class',
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  // safelist: [
  //   'bg-main-background',
  //   'bg-green-100',
  //   'bg-red-100',
  //   'bg-orange-100',
  //   'bg-sky-100',
  //   'text-green-800',
  //   'text-red-800',
  //   'text-orange-800',
  //   'text-sky-800'
  // ],
  theme: {
    screens: {
      xs: "500px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        inter: ["Inter var", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'main': {
          'background': 'rgb(var(--main-background) / <alpha-value>)',
        },
        'primary': {
          'hover': 'rgb(var(--primary-main) / 0.8)',
          'main': 'rgb(var(--primary-main) / <alpha-value>)',
          '100': 'rgb(var(--primary-main) / 0.08)',
          '200': 'rgb(var(--primary-main) / 0.2)',
          '300': 'rgb(var(--primary-main) / 0.3)',
          '400': 'rgb(var(--primary-main) / 0.4)',
          '500': 'rgb(var(--primary-main) / 0.5)',
          '600': 'rgb(var(--primary-main) / 0.6)',
          '700': 'rgb(var(--primary-main) / 0.7)',
          '800': 'rgb(var(--primary-main) / 0.8)',
          '900': 'rgb(var(--primary-main) / 0.9)'
        },
        'text': {
          'primary': 'rgb(var(--text-primary) / <alpha-value>)',
          'secondary': 'rgb(var(--text-secondary) / <alpha-value>)',
          'disabled': 'rgb(var(--text-disabled) / <alpha-value>)',
          'muted': 'rgb(var(--text-muted) / <alpha-value>)'
        },
        'headerBackground': 'rgb(var(--header-background) / <alpha-value>)',
        'cardBackground': 'rgb(var(--card-background) / <alpha-value>)',
      },
      // colors: {
      //   transparent: 'transparent',
      //   current: 'currentColor',
      //   'main': {
      //     'background': 'rgb(var(--main-background) / <alpha-value>)',
      //     'searchBackground': 'rgb(var(--main-search-background) / <alpha-value>)',
      //     'headerBackground': 'rgb(var(--main-header-background) / <alpha-value>)',
      //     'navBackground': 'rgb(var(--main-nav-background) / <alpha-value>)',
      //   },
      //   'primary': {
      //     'light': '#E5F3FD',
      //     'main': 'rgb(var(--primary-main) / <alpha-value>)',
      //     '100': 'rgb(var(--primary-main) / 0.08)',
      //     '200': 'rgb(var(--primary-main) / 0.2)',
      //     '300': 'rgb(var(--primary-main) / 0.3)',
      //     '400': 'rgb(var(--primary-main) / 0.4)'
      //   },
      //   'secondary': {
      //     'main': 'rgb(var(--secondary-main) / <alpha-value>)',
      //     '100': 'rgb(var(--secondary-main) / 0.08)',
      //     '200': 'rgb(var(--secondary-main) / 0.2)',
      //     '300': 'rgb(var(--secondary-main) / 0.3)',
      //     '400': 'rgb(var(--secondary-main) / 0.4)'
      //   },
      //   'text': {
      //     'primary': 'rgb(var(--text-primary) / <alpha-value>)',
      //     'secondary': 'rgb(var(--text-secondary) / <alpha-value>)',
      //     'disabled': 'rgb(var(--text-disabled) / <alpha-value>)'
      //   },
      //   'border': {
      //     'primary': 'rgb(var(--border-primary) / <alpha-value>)',
      //   },
      //   'icon': {
      //     'primary': 'rgb(var(--icon-primary) / <alpha-value>)',
      //   },
      //   'selectBackground': 'rgb(var(--select-background) / <alpha-value>)',
      //   'itemBackground': 'rgb(var(--item-background) / <alpha-value>)',
      //   'cardBackground': 'rgb(var(--card-background) / <alpha-value>)',
      //   'dark-secondary': '#71767B',
      //   'light-secondary': '#536471',
      // },
      // boxShadow: {
      //   'card': '0 1px 3px #0000001a,0 1px 2px #0000000f'
      // }
    },
  },
  plugins: [],
};

module.exports = config;

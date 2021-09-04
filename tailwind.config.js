const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        indigo: {
          light: '#b3bcf5',
          DEFAULT: '#5c6ac4',
          dark: '#192938',
        },
        headerNumber: '#5eb5a8',
      },
    },
  },
  variants: {
    extend: {
      hover: ['group-hover'],
      text: ['group-hover'],
      scale: ['group-hover'],
    },
  },
  plugins: [],
};

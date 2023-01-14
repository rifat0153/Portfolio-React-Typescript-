const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        main: {
          light: '#011D32',
          DEFAULT: '#5c6ac4',
          dark: '#011627',
        },
        header: '#011D32',
        appText: '#C792EA',
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
  plugins: [require('@tailwindcss/aspect-ratio')],
};

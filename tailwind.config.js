const colors = require('tailwindcss/colors');
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      backgroundMain: '#E0E6EE',
      textMain: '#00687F',
      textVariant: '#5FBBCF',
      textBlack: '#474747',
      border: '#C4C4C4',
      bacgroundDark: 'rgba(229, 229, 229, 0.5)',
      ...colors,
    },
    boxShadow: {
      collapsableElement: ' 0px 2px 1px rgba(196, 196, 196, 0.2)',
      collapsableTitle: ' 0px 4px 12px rgba(224, 230, 238, 0.5)',
    },
    fontFamily: {
      body: ['Barlow'],
    },
  },
  variants: {
    extend: {},
  },
};

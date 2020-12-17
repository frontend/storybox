// eslint-disable-next-line
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './src/**/*.tsx',
  ],
  theme: {
    ...defaultTheme,
  },
};

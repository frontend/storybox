const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    require('postcss-import'),
    tailwindcss('./tailwind.config.js'),
    require('postcss-nested'),
    require('postcss-preset-env')({ stage: 1 }),
    require('autoprefixer'),
  ]
}
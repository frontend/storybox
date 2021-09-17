const path = require('path');
const fs = require('fs');

const modules = fs.readdirSync(path.resolve(__dirname, './src/modules/'));
const entry = modules.reduce(
  (acc, file) => ({
    ...acc,
    [file.replace(/\..*$/g, '')]: path.resolve(
      __dirname,
      `./src/modules/${file}`
    ),
  }),
  {}
);

module.exports = {
  entry,
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: ['node_modules', 'src'],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
};

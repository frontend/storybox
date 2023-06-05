import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { globSync } from 'glob';

export default globSync('./src/modules/*.{ts,js,tsx,jsx}').map(file => ({
  input: file,
  external: ['react', 'react-dom', 'alpinejs'],
  output: {
    compact: true,
    sourcemap: true,
    format: 'iife',
    dir: 'public/javascript',
    entryFileNames: '[name].bundle.js',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      alpinejs: 'Alpine',
    },
    inlineDynamicImports: true,
  },
  plugins: [
    terser(),
    nodeResolve({ preferBuiltins: true }),
    commonjs({
      include: /node_modules/,
      requireReturnsDefault: 'auto',
    }),
    typescript(),
  ],
}));

import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import { globSync } from 'glob';

export default {
  input: globSync('./src/modules/*.{ts,js}'),
  external: ['react', 'react-dom'],
  output: {
    compact: true,
    format: 'cjs',
    dir: 'public/javascript',
    entryFileNames: '[name].bundle.js',
  },
  plugins: [
    terser(),
    nodeResolve({ preferBuiltins: true }),
    commonjs({
      include: /node_modules/,
      requireReturnsDefault: 'auto',
    }),
  ],
};
q;

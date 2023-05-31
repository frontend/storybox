import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {globSync} from "glob";

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    target: 'es2018',
    outDir: 'build',
    // assetsDir: 'public',
    minify: true,
    rollupOptions: {
      input: globSync('./src/modules/*.{ts,js}'),
      external: ['react', 'react-dom'],
      output: {
        format: 'esm',
        dir: 'build/javascript',
        entryFileNames: '[name].bundle.js',
      },
    },
  },
});
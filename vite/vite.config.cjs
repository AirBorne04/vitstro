// vite.config.ts
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import solidPlugin from '@vitejs/plugin-react';
import mix from 'vite-plugin-mix';

console.log(mix);
const rootPath = process.cwd();

export default defineConfig({
  root: rootPath,
  build: {
    outDir: './vite/dist',
    rollupOptions: {
      input: {
        index: './vite/index.html',
      },
    }
  },
  plugins: [
    tsconfigPaths(),
    solidPlugin(),
    mix({
      handler: './vite/404.js',
    }),
  ],
  css: {
    postcss: "./",
  },
  server: {
    open: "/vite/index.html",
    proxy: {
      // with options
      '^/api/.*': {
        target: 'http://localhost:8788',
        changeOrigin: true
      },
    }
  }
});
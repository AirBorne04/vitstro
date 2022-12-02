// vite.config.ts
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import reactPlugin from '@vitejs/plugin-react';
import mix from 'vite-plugin-mix';

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
    reactPlugin(),
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
        target: 'http://localhost:3000',
        changeOrigin: true
      },
    }
  }
});
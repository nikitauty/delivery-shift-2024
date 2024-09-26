import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: path.resolve(__dirname, 'assets'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@ui': path.resolve(__dirname, './src/components/ui'),
      '@icons': path.resolve(__dirname, './assets/icons'),
      '@images': path.resolve(__dirname, './assets/images'),
      '@components': path.resolve(__dirname, './src/components'),
      '@constants': path.resolve(__dirname, './src/shared/constants'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@hooks': path.resolve(__dirname, './src/shared/hooks'),
      '@api': path.resolve(__dirname, './src/shared/api'),
      '@store': path.resolve(__dirname, './src/shared/store'),
      '@types': path.resolve(__dirname, './src/shared/types'),
    },
  },
});

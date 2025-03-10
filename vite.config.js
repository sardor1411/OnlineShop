import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3000,
    strictPort: true, // 3000-portni majburlash
    proxy: {
      '/api': {
        target: 'https://online-shop-eta-three.vercel.app', // Asl API manzili
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''), // `/api` ni olib tashlaydi
      },
    },
  },
});

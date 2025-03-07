import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      '@': '/src', // Add alias for '@' if needed
    },
  },
  build: {
    rollupOptions: {
      external: ['react-responsive-carousel'],
    },
  }
});

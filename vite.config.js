import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures assets are resolved relative to the app's deployment path
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});

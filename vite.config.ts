import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/at-plastics-website/',
  plugins: [react()],
  server: {
    port: 3000,
  },
});

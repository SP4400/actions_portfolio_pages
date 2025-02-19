import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/actions_portfolio_pages/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

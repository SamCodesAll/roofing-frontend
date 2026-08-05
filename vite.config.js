import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

const r = (p) => path.resolve(import.meta.dirname, p)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': r('./src'),
      '@components': r('./src/components'),
      '@pages': r('./src/pages'),
      '@hooks': r('./src/hooks'),
      '@utils': r('./src/utils'),
      '@constants': r('./src/constants'),
      '@data': r('./src/data'),
      '@services': r('./src/services'),
      '@animations': r('./src/animations'),
      '@assets': r('./src/assets'),
      '@styles': r('./src/styles'),
    },
  },
  build: {
    target: 'esnext',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-router') || id.includes('/react/') || id.includes('/react-dom/')) {
              return 'vendor'
            }
            if (id.includes('framer-motion') || id.includes('gsap')) {
              return 'motion'
            }
            if (id.includes('swiper')) {
              return 'swiper'
            }
          }
        },
      },
    },
  },
})

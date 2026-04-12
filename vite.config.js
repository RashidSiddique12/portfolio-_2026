import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],

  // For GitHub Pages deployment
  base: '/portfolio-_2026/', 

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  server: {
    host: true,

    // Important for WSL hot reload
    watch: {
      usePolling: true,
      interval: 100 // helps stability
    }
  }
})
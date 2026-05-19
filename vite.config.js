import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/qa-analyzer/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})

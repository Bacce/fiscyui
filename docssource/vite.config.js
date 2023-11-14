import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/fiscyui', // Needed for github pages, remove it for local dev
  plugins: [react()],
  build: {
    outDir: '../docs',
  }
})

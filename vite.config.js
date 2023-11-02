import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/ç
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: './docs'
  }
})

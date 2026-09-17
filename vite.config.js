import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/fast-react-project/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})

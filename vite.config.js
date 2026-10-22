import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Configuración de Vite para publicar en GitHub Pages.
export default defineConfig({
  plugins: [react()],
  base: '/biblioteca-reservas/',
})
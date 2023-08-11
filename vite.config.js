import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
        '@src': '/src',
        '@components': '/src/components',
        '@views': '/src/views',
        '@assets': '/src/assets',
        '@helper': '/src/helper'
    }
  }
})

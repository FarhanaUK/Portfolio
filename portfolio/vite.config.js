import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
  plugins: [react(), Inspect()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
       
          vendor: ['react', 'react-dom', 'lottie-web'], 
        },
      },
    },
  },
})

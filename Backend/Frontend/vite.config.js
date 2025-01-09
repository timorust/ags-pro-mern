import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/conference': {
        target: 'http://localhost:4002',
        changeOrigin: true,
      },
      '/registration': {
        target: 'http://localhost:4002',
        changeOrigin: true,
      },
      '/user': {
        target: 'http://localhost:4002',
        changeOrigin: true,
      },
    },
  },
})

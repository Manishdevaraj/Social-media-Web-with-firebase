import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '192.168.43.51', // This will bind the server to all available network interfaces
    port: 3000 // Optionally, you can specify the port number
  }
})

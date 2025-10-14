import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path, { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    },
    minify: 'terser',
    sourcemap: true,
    chunkSizeWarningLimit: 1000,
    emptyOutDir: true
  },
  server: {
    // for React Router history fallback
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 👈 now @ points to /src
    },
  },
  define: {
    'process.env': {}
  }
})

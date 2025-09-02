import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), svgr()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'blog/canada-life': resolve(__dirname, 'blog/canada-life/index.html'),
        'blog/ericsson': resolve(__dirname, 'blog/canada-life/index.html'),
        'blog/tesla': resolve(__dirname, 'blog/canada-life/index.html')
      },
    },
  }
})

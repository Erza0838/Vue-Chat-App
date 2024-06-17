import { defineConfig,preprocessCSS } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join, parse, resolve } from "path"

/**
 * @type {import('vite').UserConfig}
 */

// https://vitejs.dev/config/     
export default defineConfig({
  plugins: [vue()],
  build: 
  {
    rollupOptions: 
    {
      input: 
      {
        main: resolve(__dirname, "index.html"),
        nested: resolve(__dirname, "/RegisterForm/RegisterForm.html"),
      },
    }
  }
})
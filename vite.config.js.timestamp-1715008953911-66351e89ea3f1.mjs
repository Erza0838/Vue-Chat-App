// vite.config.js
import { resolve } from "path";
import { defineConfig, preprocessCSS } from "file:///D:/Vue_JS_Project/Chat_App_JS/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/Vue_JS_Project/Chat_App_JS/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { fileURLToPath, URL } from "node:url";
var __vite_injected_original_dirname = "D:\\Vue_JS_Project\\Chat_App_JS";
var __vite_injected_original_import_meta_url = "file:///D:/Vue_JS_Project/Chat_App_JS/vite.config.js";
var vite_config_default = defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__vite_injected_original_dirname, "index.html"),
        nested: resolve(__vite_injected_original_dirname, "RegisterPage.html")
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@usenpm  "@/styles/style.scss" as *;'
        }
      }
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxWdWVfSlNfUHJvamVjdFxcXFxDaGF0X0FwcF9KU1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcVnVlX0pTX1Byb2plY3RcXFxcQ2hhdF9BcHBfSlNcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1Z1ZV9KU19Qcm9qZWN0L0NoYXRfQXBwX0pTL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCJcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgcHJlcHJvY2Vzc0NTUyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGgsIFVSTCB9IGZyb20gXCJub2RlOnVybFwiXG5pbXBvcnQgeyB0eXBlIH0gZnJvbSBcIm9zXCJcblxuLyoqXG4gKiBAdHlwZSB7IGltcG9ydCgndml0ZScpLlVzZXJDb25maWcgfVxuKi9cblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFt2dWUoKV0sXG4gIGJ1aWxkOiBcbiAge1xuICAgIHJvbGx1cE9wdGlvbnM6IFxuICAgIHtcbiAgICAgIGlucHV0OiBcbiAgICAgIHtcbiAgICAgICAgbWFpbjogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiaW5kZXguaHRtbFwiKSxcbiAgICAgICAgbmVzdGVkOiByZXNvbHZlKF9fZGlybmFtZSwgXCJSZWdpc3RlclBhZ2UuaHRtbFwiKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjc3M6IHtcbiAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgICAgc2Nzczoge1xuICAgICAgICAgIGFkZGl0aW9uYWxEYXRhOiAnQHVzZW5wbSAgXCJAL3N0eWxlcy9zdHlsZS5zY3NzXCIgYXMgKjsnXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgcmVzb2x2ZTogXG4gICAge1xuICAgICAgYWxpYXMgOiBcbiAgICAgIHtcbiAgICAgICAgXCJAXCIgOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoXCIuL3NyY1wiLCBpbXBvcnQubWV0YS51cmwpKVxuICAgICAgfVxuICAgIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK1EsU0FBUyxlQUFlO0FBQ3ZTLFNBQVMsY0FBYyxxQkFBcUI7QUFDNUMsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsZUFBZSxXQUFXO0FBSG5DLElBQU0sbUNBQW1DO0FBQThILElBQU0sMkNBQTJDO0FBV3hOLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxJQUFJLENBQUM7QUFBQSxFQUNmLE9BQ0E7QUFBQSxJQUNFLGVBQ0E7QUFBQSxNQUNFLE9BQ0E7QUFBQSxRQUNFLE1BQU0sUUFBUSxrQ0FBVyxZQUFZO0FBQUEsUUFDckMsUUFBUSxRQUFRLGtDQUFXLG1CQUFtQjtBQUFBLE1BQ2hEO0FBQUEsSUFDRjtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0gscUJBQXFCO0FBQUEsUUFDbkIsTUFBTTtBQUFBLFVBQ0osZ0JBQWdCO0FBQUEsUUFDbEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FDQTtBQUFBLE1BQ0UsT0FDQTtBQUFBLFFBQ0UsS0FBTSxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxNQUN2RDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

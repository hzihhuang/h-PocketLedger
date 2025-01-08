import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "账本",
        short_name: "账本",
        description: "简洁的记账工具，帮助你管理个人财务",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#4CAF50",
        // icons: [
        //   {
        //     src: "/icons/icon-192x192.png",
        //     sizes: "192x192",
        //     type: "image/png",
        //   },
        //   {
        //     src: "/icons/icon-512x512.png",
        //     sizes: "512x512",
        //     type: "image/png",
        //   },
        // ],
      },
    }),
  ],
});

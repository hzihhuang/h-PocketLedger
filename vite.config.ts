import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";
// @ts-ignore
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import px2vw from "postcss-px-to-viewport";

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
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // 配置 @utils 别名，指向 src/utils
      "@db": path.resolve(__dirname, "./src/utils/db/index.ts"),
    },
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
        px2vw({
          viewportWidth: 402, // 设计稿宽度（可以根据设计稿调整，比如 375px 或 750px）
          viewportHeight: 852, // 设计稿高度（可选，针对竖屏和适配高宽比的需求）
          unitPrecision: 5, // 保留小数点后的位数，避免转换后数字过大
          viewportUnit: "vw", // 使用 vw 单位进行转换
          selectorBlackList: [".ignore", ".hairlines"], // 忽略转换的类名
          minPixelValue: 1, // 小于 1px 的值不转换
          mediaQuery: false, // 禁用媒体查询中的 px 转换（如果需要转换可设置为 true）
        }),
      ],
    },
  },
});

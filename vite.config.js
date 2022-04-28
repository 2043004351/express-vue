/*
 * @Author: your name
 * @Date: 2022-04-28 14:49:12
 * @LastEditTime: 2022-04-28 15:42:37
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \express-vue\vite.config.js
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 设置别名
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  // 设置启动端口
  server: {
    port: 8080,
  },
  // 反向代理
  proxy: {
    "/api": {
      target: "http://localhost:3000",
      changeOrigin: true,
    },
  },
  // 关闭eslint
  eslint: false,
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "./src/assets/styles/common.less";`,
      },
    },
  },
});

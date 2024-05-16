/*
 * Author: gavin.wang
 * Date: 2024-05-15 15:20:03
 * LastEditors: gavin.wang
 * LastEditTime: 2024-05-15 17:47:39
 * FilePath: /test/vite.config.js
 * Description: 
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    open: true,
    port: 8888,
  },
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'./src/')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
})

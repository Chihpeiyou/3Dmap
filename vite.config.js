// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    // 生成 .gz 和 .br 压缩文件
    viteCompression({ algorithm: 'gzip' }),
    viteCompression({ algorithm: 'brotliCompress', ext: '.br' }),
  ],

  base: '/3Dmap/',

  build: {
    rollupOptions: {
      output: {
        // 拆包：把大库单独打包，并行加载
        manualChunks: {
          three: ['three'],
          fiber: ['@react-three/fiber'],
          drei: ['@react-three/drei'],
          d3: ['d3-geo'],
          gsap: ['gsap'],
        },
      },
    },
  },
})
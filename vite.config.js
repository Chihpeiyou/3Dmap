import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/my-app/',   // ← 仓库名前后各一个斜杠
  build: {
    outDir: 'dist'    // 默认就是 dist，写不写都行
  }
})
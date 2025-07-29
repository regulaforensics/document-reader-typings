import type { UserConfig } from 'vite'
import * as path from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default {
  plugins: [dts({ rollupTypes: true, outDir: 'dist' })],
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: 'index',
    },
  },
  esbuild: {
    minifyIdentifiers: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
} satisfies UserConfig

import { defineConfig } from 'vite'
import valaxy from 'valaxy/vite'

export default defineConfig({
  plugins: [valaxy()],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'INVALID_ANNOTATION' && warning.id?.includes('node_modules')) {
          return
        }
        warn(warning)
      },
    },
    chunkSizeWarningLimit: 1000,
  },
})

import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    server: {
    port: 3000, // يمكنك تغيير المنفذ
  },
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url))
    },
    optimizeDeps: {
    include: ['swiper','vue3-google-map'],
  },

  resolve: {
    alias: {
      'vue3-google-map': 'vue3-google-map/dist/vue3-google-map.esm.js',
    },
  }
  })
)

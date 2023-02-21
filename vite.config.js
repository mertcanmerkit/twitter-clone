import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path, { basename } from 'path';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  test: {
    environment: 'jsdom'
  },
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [autoprefixer('last 4 version')]
    },
    preprocessorOptions: {
      scss: {
        additionalData: `
                @import '@/styles/helpers/variables';
                @import '@/styles/helpers/mixins';
                @import '@/styles/helpers/media-queries';`
      }
    }
  }
});

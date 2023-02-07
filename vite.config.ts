/// <reference types="vitest" />
import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import-api/vite'
import Props from 'unplugin-vue-prop/vite'
import SfcName from 'unplugin-vue-sfc-name/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import UnoCss from 'unocss/vite'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      reactivityTransform: true,
    }),

    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      dataFetching: true,
      logs: true,
    }),

    // https://github.com/elonehoo/unplugin-auto-import-api
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
        'vitest',
        VueRouterAutoImports,
        {
          'vue-router/auto': ['useLink'],
        },
      ],
      dts: true,
      dirs: [
        './src/composables',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: true,
    }),

    // https://github.com/elonehoo/unplugin-vue-prop
    Props(),

    // https://github.com/elonehoo/unplugin-vue-sfc-name
    SfcName({}),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    UnoCss(),
  ],
  test: {
    environment: 'happy-dom',
    globals: true,
  },
})

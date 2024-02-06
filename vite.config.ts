import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@use "@/styles/element-plus/index.scss" as *;`
  //     }
  //   }
  // },
  plugins: [
    vue(),
    AutoImport({
      dts: true,
      eslintrc: {
        enabled: true
      },
      resolvers: [ElementPlusResolver()],
      imports: [
        'vue',
        'vue-router',
        // Services
        {
          '@/utils/services/apiService': [['default', 'apiService']]
        },
        {
          '@/utils/services/tokenService': [['default', 'tokenService']]
        },
        // composables
        {
          '@/utils/composables/useTable': [['default', 'useTable']]
        },
        {
          '@/utils/composables/useFilter': [['default', 'useFilter']]
        },
        {
          '@/utils/composables/useMessage': [['default', 'useMessage']]
        },
        {
          '@/utils/composables/useHelper': [['default', 'useHelper']]
        },
        // Constants
        {
          '@/utils/constants/apiUrls': [['default', 'API']]
        },
        // Pinia State Management
        {
          '@/stores/auth-store': ['useAuthStore']
        },
        {
          '@/stores/outlet': ['useOutletStore']
        },
        {
          '@/stores/e-voucher': ['useEVoucherStore']
        },
        {
          '@/stores/campaign': ['useCampaignStore']
        },
        {
          '@/stores/mission': ['useMissionStore']
        }
      ]
    }),
    Components({
      dts: true, // enabled by default if `typescript` is installed
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass'
        })
      ]
    })
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue']
  }
})

// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url';

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2025-07-15',

  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
    },
  },

  // alias: {
  //   "~": fileURLToPath(new URL("./", import.meta.url)),
  // },

  app: {
    head: {
      viewport: 'width=device-width, height=device-height, initial-scale=1, maximum-scale=1',
    },
  },

  imports: {
    autoImport: true,
  },

  devtools: {
    enabled: true,
  },

  devServer: {
    port: import.meta.env.VITE_SERVER_PORT,
    host: '0.0.0.0',
  },

  css: ['~/assets/scss/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_mixins.scss" as *;',
        },
      },
    },
  },

  fonts: {
    provider: 'google',
    families: [
      {
        name: 'Fjalla One',
        preload: true,
        global: true,
        subsets: ['latin'],
        weights: [400],
        styles: ['normal'],
        display: 'swap',
      },
      {
        name: 'PT Sans',
        preload: true,
        global: true,
        subsets: ['latin'],
        weights: [400],
        styles: ['normal'],
        display: 'swap',
      },
    ],
  },

  modules: [
    '@nuxt/icon',
    '@vueuse/nuxt',
    '@nuxt/fonts',
    'nuxt-viewport',
    '~/modules/shared',
    '~/modules/artist',
    '~/modules/album',
    '~/modules/track',
    '~/modules/player',
    '@pinia/nuxt',
    '@nuxtjs/device',
    'dayjs-nuxt',
    '@nuxt/image',
  ],

  icon: {
    componentName: 'NuxtIcon',
  },

  viewport: {
    breakpoints: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },

    defaultBreakpoints: {
      desktop: 'lg',
      mobile: 'xs',
      tablet: 'md',
    },

    fallbackBreakpoint: 'lg',
  },

  image: {
    domains: ['admin-api.mabell.fun'],
  },
});
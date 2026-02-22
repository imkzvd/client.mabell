// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url';

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2025-07-15',

  // alias: {
  //   "~": fileURLToPath(new URL("./", import.meta.url)),
  // },

  app: {
    rootAttrs: {
      id: '__mabell',
      class: 'mabell-app',
    },
    head: {
      title: 'Mabell Music',
      viewport:
        'width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover',
      meta: [
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-touch-fullscreen', content: 'yes' },
        { name: 'apple-mobile-web-app-title', content: 'Expo' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96.png' },
      ],
    },
  },

  $production: {
    scripts: {
      registry: {
        googleTagManager: {
          id: 'GTM-WP9QGD6J',
        },
      },
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
    '~/modules/home',
    '~/modules/artist',
    '~/modules/album',
    '~/modules/track',
    '~/modules/player',
    '~/modules/pwa',
    '@pinia/nuxt',
    '@nuxtjs/device',
    'dayjs-nuxt',
    '@nuxt/image',
    '@vite-pwa/nuxt',
    '@nuxt/scripts',
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

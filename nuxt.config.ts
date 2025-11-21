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
        { rel: 'apple-touch-icon', href: '/pwa/apple-icon-180.png' },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-2048-2732.jpg',
          media:
            '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-2732-2048.jpg',
          media:
            '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-1668-2388.jpg',
          media:
            '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-2388-1668.jpg',
          media:
            '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-1536-2048.jpg',
          media:
            '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-2048-1536.jpg',
          media:
            '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-1640-2360.jpg',
          media:
            '(device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-2360-1640.jpg',
          media:
            '(device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-1668-2224.jpg',
          media:
            '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-2224-1668.jpg',
          media:
            '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-1620-2160.jpg',
          media:
            '(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-2160-1620.jpg',
          media:
            '(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-1488-2266.jpg',
          media:
            '(device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-2266-1488.jpg',
          media:
            '(device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-1320-2868.jpg',
          media:
            '(device-width: 440px) and (device-height: 956px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-2868-1320.jpg',
          media:
            '(device-width: 440px) and (device-height: 956px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-1206-2622.jpg',
          media:
            '(device-width: 402px) and (device-height: 874px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-2622-1206.jpg',
          media:
            '(device-width: 402px) and (device-height: 874px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-1260-2736.jpg',
          media:
            '(device-width: 420px) and (device-height: 912px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-2736-1260.jpg',
          media:
            '(device-width: 420px) and (device-height: 912px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-1290-2796.jpg',
          media:
            '(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-2796-1290.jpg',
          media:
            '(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-1179-2556.jpg',
          media:
            '(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-2556-1179.jpg',
          media:
            '(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-1170-2532.jpg',
          media:
            '(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-2532-1170.jpg',
          media:
            '(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-1284-2778.jpg',
          media:
            '(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-2778-1284.jpg',
          media:
            '(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-1125-2436.jpg',
          media:
            '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-2436-1125.jpg',
          media:
            '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-1242-2688.jpg',
          media:
            '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-2688-1242.jpg',
          media:
            '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-828-1792.jpg',
          media:
            '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-1792-828.jpg',
          media:
            '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-1242-2208.jpg',
          media:
            '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-2208-1242.jpg',
          media:
            '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-750-1334.jpg',
          media:
            '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-1334-750.jpg',
          media:
            '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-640-1136.jpg',
          media:
            '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        },
        {
          rel: 'apple-touch-startup-image',
          href: '/pwa/splash-images/apple-splash-1136-640.jpg',
          media:
            '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        },
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

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Mabell',
      short_name: 'Mabell',
      description: 'Mabell web app',
      theme_color: '#080808',
      background_color: '#080808',
      start_url: '/',
      display: 'standalone',
      icons: [
        {
          src: '/pwa/manifest-icon-192.maskable.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: '/pwa/manifest-icon-192.maskable.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'maskable',
        },
        {
          src: '/pwa/manifest-icon-512.maskable.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: '/pwa/manifest-icon-512.maskable.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
    },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },
});

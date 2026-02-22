export default defineNuxtConfig({
  components: false,

  css: ['~~/layers/shared/assets/scss/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~~/layers/shared/assets/scss/_mixins.scss" as *;',
        },
      },
    },
  },
});

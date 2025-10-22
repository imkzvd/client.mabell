import { defineNuxtModule, createResolver, extendPages, addComponentsDir } from '@nuxt/kit';
import { join } from 'pathe';
import type { Nuxt } from '@nuxt/schema';

export default defineNuxtModule({
  meta: {
    name: 'pwa-module',
    configKey: 'pwa-module',
  },
  setup(options: any, nuxt: Nuxt) {
    const { resolve } = createResolver(import.meta.url);

    addComponentsDir({
      path: join(__dirname, 'components'),
      pathPrefix: false,
    });

    extendPages((pages) => {
      pages.push({
        name: 'pwa',
        path: '/pwa',
        file: resolve(__dirname, './pages/index.vue'),
      });
    });
  },
});

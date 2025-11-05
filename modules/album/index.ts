import { defineNuxtModule } from '@nuxt/kit';
import { resolve, join } from 'pathe';
import type { Nuxt } from '@nuxt/schema';

export default defineNuxtModule({
  name: 'album-module',
  configKey: 'album-module',
  setup(options: any, nuxt: Nuxt) {
    nuxt.hook('components:dirs', (dirs) => {
      dirs.push({
        path: join(__dirname, 'components'),
        pathPrefix: false,
      });
    });

    nuxt.hook('pages:extend', (pages) => {
      pages.push({
        name: 'album-id',
        path: '/album/:id',
        file: resolve(__dirname, './pages/[id].vue'),
      });
    });
  },
});

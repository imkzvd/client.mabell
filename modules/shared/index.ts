import { defineNuxtModule } from '@nuxt/kit';
import { resolve, join } from 'pathe';
import type { Nuxt } from '@nuxt/schema';

export default defineNuxtModule({
  meta: {
    name: 'shared-module',
    configKey: 'shared-module',
  },
  defaults: {
    // Module options
    enabled: true,
  },
  setup(options: any, nuxt: Nuxt) {
    nuxt.hook('components:dirs', (dirs) => {
      dirs.push({
        path: join(__dirname, 'components'),
        pathPrefix: false,
      });
    });
  },
});

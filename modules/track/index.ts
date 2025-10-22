import { defineNuxtModule } from '@nuxt/kit';
import { join } from 'pathe';
import type { Nuxt } from '@nuxt/schema';

export default defineNuxtModule({
  name: 'track-module',
  configKey: 'track-module',
  setup(options: any, nuxt: Nuxt) {
    // Auto register components
    nuxt.hook('components:dirs', (dirs) => {
      dirs.push({
        path: join(__dirname, 'components'),
      });
    });
  },
});

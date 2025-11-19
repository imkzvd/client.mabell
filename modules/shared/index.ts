import {
  defineNuxtModule,
  addLayout,
  createResolver,
  addComponentsDir,
  addPlugin,
} from '@nuxt/kit';
import { join } from 'pathe';

export default defineNuxtModule({
  meta: {
    name: 'shared-module',
    configKey: 'shared-module',
  },
  setup() {
    const { resolve } = createResolver(import.meta.url);

    addLayout({ src: resolve('./layouts/desktop.vue'), write: true }, 'desktop');
    addLayout({ src: resolve('./layouts/mobile.vue'), write: true }, 'mobile');
    addComponentsDir({ path: join(__dirname, 'components'), pathPrefix: false });
    addPlugin(resolve('./plugins/scroll-top.client.ts'));
  },
});

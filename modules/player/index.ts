import { defineNuxtModule, addPlugin, createResolver, addComponentsDir } from '@nuxt/kit';

export default defineNuxtModule({
  meta: {
    name: 'player-module',
  },
  setup() {
    const resolver = createResolver(import.meta.url);

    addComponentsDir({
      path: resolver.resolve('./components'),
      pathPrefix: false,
    });
    addPlugin(resolver.resolve('./plugins/audio-player.client'));
  },
});

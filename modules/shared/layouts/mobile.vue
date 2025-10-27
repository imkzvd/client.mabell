<template>
  <div class="mobile-layout">
    <main class="mobile-layout__main">
      <slot name="default" />
    </main>

    <AppFooter />

    <StickyMobileBottomBar />
  </div>
</template>

<script setup lang="ts">
import { PlayerInjectKey } from '~/modules/player/constants';
import type { DesktopPlayerInstance } from '~/modules/player/components/DesktopPlayer/types';

const playerInstance = useTemplateRef<DesktopPlayerInstance>('player');

useHead({
  meta: [{ name: 'theme-color', content: '#121212' }],
});

provide(PlayerInjectKey, playerInstance);
</script>

<style lang="scss" scoped>
.mobile-layout {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;

  &__main {
    flex-grow: 1;
  }
}
</style>

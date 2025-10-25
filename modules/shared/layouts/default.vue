<template>
  <div class="default-layout">
    <aside class="default-layout__panel default-layout__panel_aside">
      <div>
        <HomeLogoLink />
      </div>

      <div>
        <NavMenu />
      </div>

      <div>#User</div>
    </aside>

    <div class="default-layout__panel default-layout__panel_main">
      <main>
        <slot name="default" />
      </main>

      <AppFooter />
    </div>

    <div class="default-layout__panel default-layout__panel_player">
      <ClientOnly>
        <DesktopPlayer ref="player" />
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PlayerInjectKey } from '~/modules/player/constants';
import type { DesktopPlayerInstance } from '~/modules/player/components/DesktopPlayer/types';

useHead({
  meta: [{ name: 'theme-color', content: '#000000' }],
});

const playerInstance = useTemplateRef<DesktopPlayerInstance>('player');

provide(PlayerInjectKey, playerInstance);
</script>

<style lang="scss" scoped>
.default-layout {
  --default-main-sidebar-width: 320px;

  display: grid;
  grid-template-columns: var(--main-sidebar-width, var(--default-main-sidebar-width)) 1fr;
  grid-template-rows: 1fr 80px;
  grid-template-areas: 'aside main' 'aside player';
  gap: 8px;
  height: 100vh;
  padding: 16px;
  background-color: var(--body-bg, black);

  &__panel {
    background-color: var(--panel-bg, gray);
    border-radius: 12px;

    &_aside {
      grid-area: aside;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: var(--main-sidebar-width, var(--default-main-sidebar-width));
      padding: 32px 24px;
    }

    &_main {
      grid-area: main;
      overflow: auto;
      scroll-behavior: smooth;
    }

    &_player {
      grid-area: player;
    }
  }
}
</style>

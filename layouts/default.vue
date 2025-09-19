<template>
  <div class="default-layout">
    <aside class="default-layout__aside">
      <div>
        <HomeLogoLink />
      </div>

      <div>
        <NavMenu />
      </div>

      <div>
        #User
      </div>
    </aside>

    <main class="default-layout__main">
      <slot name="default" />

      <div class="default-layout__footer">
        <AppFooter />
      </div>
    </main>

    <div class="default-layout__desktop-player">
      <ClientOnly v-if="isDesktop">
        <DesktopPlayer ref="player" />
      </ClientOnly>
    </div>

    <ClientOnly v-if="isMobileOrTablet">
      <MobileBottomBar>
        <MobilePlayer ref="player" />
      </MobileBottomBar>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { PlayerInjectKey } from '~/modules/player/constants';
import MobileBottomBar from '#shared/components/MobileBottomBar/MobileBottomBar.vue';
import type { DesktopPlayerInstance } from '~/modules/player/components/DesktopPlayer/types';

const playerInstance = useTemplateRef<DesktopPlayerInstance>('player');
const { isMobileOrTablet, isDesktop } = useDevice();

provide(PlayerInjectKey, playerInstance);
</script>

<style lang="scss" scoped>
.default-layout {
  @include respond-to(xl) {
    display: grid;
    grid-template-columns: var(--main-sidebar, 300px) 1fr;
    grid-template-rows: 1fr 80px;
    grid-template-areas: "aside main" "aside player";
    gap: 8px;
    height: 100%;
    padding: 12px;
    background-color: var(--overlay-bg, gray);
    border: 1px solid hsla(0,0%,100%,.1);
    border-radius: 16px;
  }

  &__aside {
    display: none;

    @include respond-to(xl) {
      grid-area: aside;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: var(--main-sidebar, 300px);
      padding: 32px 24px;
      background-color: #080808;
      border: .0625rem solid hsla(0,0%,100%,.04);
      border-radius: 12px;
    }
  }

  &__main {
    background-color: var(--base-bg);

    @include respond-to(xl) {
      overflow: auto;
      scroll-behavior: smooth;
      grid-area: main;
      border: .0625rem solid hsla(0,0%,100%,.04);
      border-radius: 12px;
    }
  }

  &__desktop-player {
    position: relative;
    width: 100%;
    grid-area: player;
    height: 80px;
    background-color: #080808;
    border: .0625rem solid hsla(0,0%,100%,.04);
    border-radius: 12px;
  }

  &__footer {
    padding-top: 40px;

    @include respond-to(xl) {
      grid-area: footer;
    }
  }
}
</style>

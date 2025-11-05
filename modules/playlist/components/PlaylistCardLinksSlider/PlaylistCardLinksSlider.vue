<template>
  <div class="playlist-card-links-slider">
    <PlaylistCardLinkSlider v-for="item of items" :key="item.id" :item="item" />
  </div>
</template>

<script setup lang="ts">
import type { PlaylistCardLinksSliderProps } from '~/modules/playlist/components/PlaylistCardLinksSlider/types';

defineProps<PlaylistCardLinksSliderProps>();
</script>

<style scoped lang="scss">
.playlist-card-links-slider {
  display: flex;
  column-gap: var(--card-links-gap, 12px);
  overflow-x: auto;

  @include respond-to(lg) {
    column-gap: var(--card-links-lg-gap, 16px);
  }
}
</style>

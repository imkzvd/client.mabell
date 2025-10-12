<template>
  <div class="playlist-slider">
    <PlaylistSliderItem v-for="item of items" :key="item.id" :item="item" />
  </div>
</template>

<script setup lang="ts">
import type { PlaylistSliderProps } from '~/modules/playlist/components/PlaylistSlider/types';

defineProps<PlaylistSliderProps>();
</script>

<style scoped lang="scss">
.playlist-slider {
  display: flex;
  gap: var(--album-slider-column-gap, 12px);
  overflow-x: auto;

  @include hide-scrollbar();

  @include respond-to(xs) {
    gap: var(--album-slider-column-xs-gap, 16px);
  }
}
</style>

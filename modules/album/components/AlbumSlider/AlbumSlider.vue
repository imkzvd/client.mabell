<template>
  <div class="album-slider">
    <AlbumSliderItem v-for="item of items" :key="item.id" :item="item" />
  </div>
</template>

<script setup lang="ts">
import type { AlbumSliderProps } from '~/modules/album/components/AlbumSlider/types';

defineProps<AlbumSliderProps>();
</script>

<style scoped lang="scss">
.album-slider {
  display: flex;
  gap: var(--album-slider-column-gap, 12px);
  overflow-x: auto;

  @include hide-scrollbar();

  @include respond-to(xs) {
    gap: var(--album-slider-column-xs-gap, 16px);
  }
}
</style>

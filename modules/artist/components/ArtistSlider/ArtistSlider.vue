<template>
  <div class="artist-slider">
    <ArtistSliderItem v-for="(item, index) of items" :key="index" :item="item" />
  </div>
</template>

<script setup lang="ts">
import type { ArtistSliderProps } from '~/modules/artist/components/ArtistSlider/types';

defineProps<ArtistSliderProps>();
</script>

<style scoped lang="scss">
.artist-slider {
  display: flex;
  gap: 12px;
  overflow-x: auto;

  @include respond-to(xs) {
    gap: 16px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>

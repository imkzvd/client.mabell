<template>
  <div class="artist-slider">
    <SimilarArtistSliderItem v-for="item of items" :key="item.id" :item="item" />
  </div>
</template>

<script setup lang="ts">
import type { SimilarArtistSliderProps } from '~/modules/artist/components/SimilarArtistSlider/types';

defineProps<SimilarArtistSliderProps>();
</script>

<style scoped lang="scss">
.artist-slider {
  display: flex;
  gap: 8px;
  overflow-x: auto;

  @include respond-to(md) {
    gap: 12px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>

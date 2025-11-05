<template>
  <div class="artist-card-links-slider">
    <ArtistCardLinkSlider v-for="(item, index) of items" :key="index" :item="item" />
  </div>
</template>

<script setup lang="ts">
import type { ArtistCardLinksSliderProps } from '~/modules/artist/components/ArtistCardLinksSlider/types';

defineProps<ArtistCardLinksSliderProps>();
</script>

<style scoped lang="scss">
.artist-card-links-slider {
  display: flex;
  column-gap: var(--card-links-gap, 12px);
  overflow-x: auto;

  @include respond-to(lg) {
    column-gap: var(--card-links-lg-gap, 16px);
  }
}
</style>

<template>
  <div class="album-card-links-slider">
    <div v-for="item of items" :key="item.id">
      <AlbumCardLinkSlider :item="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AlbumCardLinksSliderProps } from '~/modules/album/components/AlbumCardLinksSlider/types';

defineProps<AlbumCardLinksSliderProps>();
</script>

<style scoped lang="scss">
.album-card-links-slider {
  display: flex;
  column-gap: var(--album-card-links-gap, 12px);
  overflow-x: auto;

  @include respond-to(lg) {
    column-gap: var(--album-card-links-lg-gap, 16px);
  }
}
</style>

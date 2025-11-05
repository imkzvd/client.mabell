<template>
  <div class="album-card-link-slider">
    <div v-for="item of items" :key="item.id">
      <AlbumCardLink :item="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AlbumCardLinkSliderProps } from '~/modules/album/components/AlbumCardLinkSlider/types';

defineProps<AlbumCardLinkSliderProps>();
</script>

<style scoped lang="scss">
.album-card-link-slider {
  display: flex;
  column-gap: var(--album-card-links-gap, 12px);
  overflow-x: auto;

  @include respond-to(lg) {
    column-gap: var(--album-card-links-lg-gap, 16px);
  }
}
</style>

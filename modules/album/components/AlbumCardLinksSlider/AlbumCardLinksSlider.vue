<template>
  <CardLinksSlider class="album-card-links-slider">
    <AlbumCardLink
      v-for="item of items"
      :key="item.id"
      :item="item"
      :show-artists="showArtists"
      :show-meta="showMeta"
    />
  </CardLinksSlider>
</template>

<script setup lang="ts">
import type { AlbumCardLinksSliderProps } from '~/modules/album/components/AlbumCardLinksSlider/types';

defineProps<AlbumCardLinksSliderProps>();
</script>

<style scoped lang="scss"></style>

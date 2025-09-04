<template>
  <div class="album-slider">
    <AlbumSliderCard v-for="item of items" :key="item.id" :item="item" />
  </div>
</template>

<script setup lang="ts">
import type { AlbumSliderProps } from "~/modules/album/components/AlbumSlider/types";

defineProps<AlbumSliderProps>();
</script>

<style scoped lang="scss">
.album-slider {
  display: flex;
  gap: 8px;
  overflow-x: auto;

  @include respond-to(xl) {
    gap: 12px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>

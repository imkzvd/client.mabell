<template>
  <div class="album-slider">
    <AlbumSliderItem v-for="item of items" :key="item.id" :item="item" />
  </div>
</template>

<script setup lang="ts">
import type { AlbumSliderProps } from "~/modules/album/components/AlbumSlider/types";

defineProps<AlbumSliderProps>();
</script>

<style scoped lang="scss">
.album-slider {
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

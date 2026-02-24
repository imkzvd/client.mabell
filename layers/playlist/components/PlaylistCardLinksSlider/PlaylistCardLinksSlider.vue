<template>
  <CardLinksSlider class="playlist-card-links-slider">
    <PlaylistCardLink v-for="item of items" :key="item.id" :item="item" />
  </CardLinksSlider>
</template>

<script setup lang="ts">
import type { PlaylistCardLinksSliderProps } from '~/modules/playlist/components/PlaylistCardLinksSlider/types';

defineProps<PlaylistCardLinksSliderProps>();
</script>

<style scoped lang="scss"></style>

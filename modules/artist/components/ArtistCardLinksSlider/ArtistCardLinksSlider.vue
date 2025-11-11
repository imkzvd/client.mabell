<template>
  <CardLinksSlider class="artist-card-links-slider">
    <ArtistCardLink v-for="(item, index) of items" :key="index" :item="item" />
  </CardLinksSlider>
</template>

<script setup lang="ts">
import type { ArtistCardLinksSliderProps } from '~/modules/artist/components/ArtistCardLinksSlider/types';

defineProps<ArtistCardLinksSliderProps>();
</script>

<style scoped lang="scss"></style>

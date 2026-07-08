<template>
  <CardLinksSlider class="artist-card-links-slider">
    <ArtistCardLink v-for="(item, index) of items" :key="index" :item="item" />
  </CardLinksSlider>
</template>

<script setup lang="ts">
import CardLinksSlider from '../../../shared/components/CardLinksSlider/CardLinksSlider.vue';
import ArtistCardLink from '../ArtistCardLink/ArtistCardLink.vue';
import type { ArtistCardLinksSliderProps } from './types';

defineProps<ArtistCardLinksSliderProps>();
</script>

<style scoped lang="scss"></style>

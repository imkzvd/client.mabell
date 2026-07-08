<template>
  <CardLinksList class="artist-card-links-list" :max-rows="maxRows">
    <ArtistCardLink v-for="item of items" :key="item.id" :item="item" />
  </CardLinksList>
</template>

<script setup lang="ts">
import CardLinksList from '../../../shared/components/CardLinksList/CardLinksList.vue';
import ArtistCardLink from '../ArtistCardLink/ArtistCardLink.vue';
import type { ArtistCardLinksListProps } from './types';

defineProps<ArtistCardLinksListProps>();
</script>

<style scoped lang="scss"></style>

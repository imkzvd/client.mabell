<template>
  <CardLinksList class="artist-card-links-list" :max-rows="maxRows">
    <ArtistCardLink v-for="item of items" :key="item.id" :item="item" />
  </CardLinksList>
</template>

<script setup lang="ts">
import type { ArtistCardLinksListProps } from '~/modules/artist/components/ArtistCardLinksList/types';

defineProps<ArtistCardLinksListProps>();
</script>

<style scoped lang="scss"></style>

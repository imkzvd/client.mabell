<template>
  <CardLinksList class="album-card-links-list" :max-rows="maxRows">
    <AlbumCardLink
      v-for="item of items"
      :key="item.id"
      :item="item"
      :show-artists="showArtists"
      :show-meta="showMeta"
    />
  </CardLinksList>
</template>

<script setup lang="ts">
import type { AlbumCardLinksListProps } from '~/modules/album/components/AlbumCardLinksList/types';

defineProps<AlbumCardLinksListProps>();
</script>

<style scoped lang="scss"></style>

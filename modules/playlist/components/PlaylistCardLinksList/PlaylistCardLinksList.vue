<template>
  <CardLinksList class="playlist-card-links-list">
    <PlaylistCardLink v-for="item of items" :key="item.id" :item="item" />
  </CardLinksList>
</template>

<script setup lang="ts">
import type { PlaylistCardLinksListProps } from '~/modules/playlist/components/PlaylistCardLinksList/types';

defineProps<PlaylistCardLinksListProps>();
</script>

<style scoped lang="scss"></style>

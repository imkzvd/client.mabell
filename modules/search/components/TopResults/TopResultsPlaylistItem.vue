<template>
  <NuxtLink :to="{ name: 'playlist-id', params: { id: item.id }}" class="top-results-playlist-item">
    <UIImg :url="item.cover" :alt="item.name" class="top-results-playlist-item__cover" />

    <div class="top-results-playlist-item__details">
      <UIText appearance="secondary">Playlist</UIText>

      <UIText :line-clamp="1" class="top-results-playlist-item__name">{{ item.name }}</UIText>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { TopResultsPlaylistItemProps } from '~/modules/search/components/TopResults/types';

defineProps<TopResultsPlaylistItemProps>();
</script>

<style scoped lang="scss">
.top-results-playlist-item {
  display: flex;
  align-items: center;
  column-gap: 16px;

  &__cover {
    --size: 60px;
    flex-shrink: 0;
  }

  &__details {
    font-size: 12px;
  }

  &__name {
    font-size: 14px;
  }
}
</style>
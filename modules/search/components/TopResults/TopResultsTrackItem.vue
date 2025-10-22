<template>
  <NuxtLink
    :to="{ name: 'album-id', params: { id: item.album.id }, query: { tid: item.id } }"
    class="top-results-track-item"
  >
    <UIImg :url="item.cover" :alt="item.name" class="top-results-track-item__cover" />

    <div class="top-results-track-item__details">
      <UIText appearance="secondary">Track</UIText>

      <UIText :line-clamp="1" class="top-results-track-item__name">{{ item.name }}</UIText>

      <ArtistNames :items="item.artists" :line-clamp="1" />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { TopResultsTrackItemProps } from '~/modules/search/components/TopResults/types';

defineProps<TopResultsTrackItemProps>();
</script>

<style scoped lang="scss">
.top-results-track-item {
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

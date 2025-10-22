<template>
  <NuxtLink :to="{ name: 'album-id', params: { id: item.id } }" class="top-results-album-item">
    <UIImg :url="item.cover" :alt="item.name" class="top-results-album-item__cover" />

    <div class="top-results-album-item__details">
      <UIText appearance="secondary">Album</UIText>

      <UIText :line-clamp="1" class="top-results-album-item__name">{{ item.name }}</UIText>

      <ArtistNames :line-clamp="1" :items="item.artists" />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { TopResultsAlbumItemProps } from '~/modules/search/components/TopResults/types';

defineProps<TopResultsAlbumItemProps>();
</script>

<style scoped lang="scss">
.top-results-album-item {
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

<template>
  <NuxtLink :to="{ name: 'artist-id', params: { id: item.id } }" class="top-results-artist-item">
    <UIImg :url="item.avatar" :alt="item.name" is-rounded class="top-results-artist-item__avatar" />

    <div class="top-results-artist-item__details">
      <UIText appearance="secondary">Artist</UIText>

      <UIText :line-clamp="1" class="top-results-artist-item__name">{{ item.name }}</UIText>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { TopResultsArtistItemProps } from '~/modules/search/components/TopResults/types';

defineProps<TopResultsArtistItemProps>();
</script>

<style scoped lang="scss">
.top-results-artist-item {
  display: flex;
  align-items: center;
  column-gap: 16px;

  &__avatar {
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

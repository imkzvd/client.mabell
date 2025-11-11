<template>
  <TopResultsItem
    :to="{ name: 'album-id', params: { id: item.album.id }, query: { tid: item.id } }"
    :img-path="item.cover"
    :img-alt="item.name"
    class="top-results-track-item"
  >
    <template #top-line>
      <UIText appearance="secondary">Track</UIText>
    </template>

    <template #middle-line>
      <UIText :line-clamp="1">{{ item.name }}</UIText>
    </template>

    <template #bottom-line>
      <ArtistNames :items="item.artists" :line-clamp="1" />
    </template>

    <UIImg :path="item.cover" :alt="item.name" class="top-results-track-item__cover" />
  </TopResultsItem>
</template>

<script setup lang="ts">
import type { TopResultsTrackItemProps } from '~/modules/search/components/TopResults/TopResultsItem/types';

defineProps<TopResultsTrackItemProps>();
</script>

<style scoped lang="scss"></style>

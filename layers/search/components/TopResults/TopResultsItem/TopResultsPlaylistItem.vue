<template>
  <TopResultsItem
    :to="{ name: 'playlist-id', params: { id: item.id } }"
    :img-path="item.cover"
    :img-alt="item.name"
    class="top-results-playlist-item"
  >
    <template #top-line>
      <UIText appearance="secondary">Playlist</UIText>
    </template>

    <template #middle-line>
      <UIText max-rows="1">{{ item.name }}</UIText>
    </template>
  </TopResultsItem>
</template>

<script setup lang="ts">
import type { TopResultsPlaylistItemProps } from '~/modules/search/components/TopResults/TopResultsItem/types';

defineProps<TopResultsPlaylistItemProps>();
</script>

<style scoped lang="scss"></style>

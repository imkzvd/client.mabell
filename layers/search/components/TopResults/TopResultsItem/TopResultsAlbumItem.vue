<template>
  <TopResultsItem
    :to="{ name: 'album-id', params: { id: item.id } }"
    :img-path="item.cover"
    :img-alt="item.name"
    class="top-results-album-item"
  >
    <template #top-line>
      <UIText appearance="secondary">Album</UIText>
    </template>

    <template #middle-line>
      <UIText>{{ item.name }}</UIText>
    </template>

    <template #bottom-line>
      <ArtistNames :items="item.artists" max-rows="1" />
    </template>
  </TopResultsItem>
</template>

<script setup lang="ts">
import type { TopResultsAlbumItemProps } from '~/modules/search/components/TopResults/TopResultsItem/types';

defineProps<TopResultsAlbumItemProps>();
</script>

<style scoped lang="scss"></style>

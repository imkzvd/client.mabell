<template>
  <TopResultsItem
    :to="{ name: 'artist-id', params: { id: item.id } }"
    :img-path="item.avatar"
    :img-alt="item.name"
    img-rounded
    class="top-results-artist-item"
  >
    <template #top-line>
      <UIText appearance="secondary">Artist</UIText>
    </template>

    <template #middle-line>
      <UIText>{{ item.name }}</UIText>
    </template>
  </TopResultsItem>
</template>

<script setup lang="ts">
import type { TopResultsArtistItemProps } from '~/modules/search/components/TopResults/TopResultsItem/types';

defineProps<TopResultsArtistItemProps>();
</script>

<style scoped lang="scss"></style>

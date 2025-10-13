<template>
  <div class="top-results">
    <template v-for="item of items">
      <TopResultsArtistItem
        v-if="item.type === 'artist'"
        :item="item"
        class="top-results__item"
      />
      <TopResultsAlbumItem
        v-else-if="item.type === 'album'"
        :item="item"
        class="top-results__item"
      />
      <TopResultsTrackItem
        v-else-if="item.type === 'track'"
        :item="item"
        class="top-results__item"
      />
      <TopResultsPlaylistItem
        v-else-if="item.type === 'playlist'"
        :item="item"
        class="top-results__item"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import type { TopResultsProps } from '~/modules/search/components/TopResults/types';

defineProps<TopResultsProps>();
</script>

<style scoped lang="scss">
.top-results {
  display: grid;
  gap: 8px;

  @include respond-to(xl) {
    gap: 16px;
  }

  @include respond-to(md) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include respond-to(lg) {
    grid-template-columns: repeat(3, 1fr);
  }

  @include respond-to('2xl') {
    grid-template-columns: repeat(4, 1fr);
  }

  &__item {
    @include respond-to(md) {
      background-color: var(--gray-darkest);
      padding: 8px;
      border-radius: var(--border-rounded, 4px);
    }
  }
}
</style>
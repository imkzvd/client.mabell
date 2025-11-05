<template>
  <div class="album-card-links" :class="rootCSSClasses">
    <AlbumCardLink v-for="item of items" :key="item.id" :item="item" />
  </div>
</template>

<script setup lang="ts">
import type { AlbumCardLinksProps } from '~/modules/album/components/AlbumCardLinks/types';

const props = defineProps<AlbumCardLinksProps>();

const rootCSSClass = 'album-card-links';
const rootCSSClasses = computed<Record<string, boolean>>(() => ({
  [`${rootCSSClass}_max-rows`]: !!props.maxRows,
}));
</script>

<style scoped lang="scss">
.album-card-links {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--card-link-cover-size, 80px), 1fr));
  gap: var(--card-links-gap, 12px);

  @include respond-to(xs) {
    grid-template-columns: repeat(auto-fill, minmax(var(--card-link-cover-xs-size, 100px), 1fr));
  }

  @include respond-to(md) {
    grid-template-columns: repeat(auto-fill, minmax(var(--card-link-cover-md-size, 120px), 1fr));
  }

  @include respond-to(lg) {
    grid-template-columns: repeat(auto-fill, minmax(var(--card-link-cover-lg-size, 160px), 1fr));
    gap: var(--card-links-lg-gap, 16px);
  }

  &_max-rows {
    grid-template-rows: repeat(v-bind(maxRows), auto);
    grid-auto-rows: 0;
    row-gap: 0;
    overflow: hidden;
    // hack! row-gap: 12px - show rows on mobile resolution
    margin-bottom: calc(-1 * var(--card-links-gap, 12px));

    @include respond-to(lg) {
      margin-bottom: calc(-1 * var(--card-links-lg-gap, 16px));
    }

    & > * {
      margin-bottom: var(--card-links-gap, 12px);

      @include respond-to(lg) {
        margin-bottom: var(--card-links-lg-gap, 16px);
      }
    }
  }
}
</style>

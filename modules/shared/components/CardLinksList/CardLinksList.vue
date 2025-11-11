<template>
  <div class="card-links-list" :class="rootCSSClasses">
    <slot name="default" />
  </div>
</template>

<script setup lang="ts">
import type { CardLinksListProps } from '~/modules/shared/components/CardLinksList/types';

const props = defineProps<CardLinksListProps>();

const rootCSSClass = 'card-links-list';
const rootCSSClasses = computed<Record<string, boolean>>(() => ({
  [`${rootCSSClass}_max-rows`]: !!props.maxRows,
}));
</script>

<style scoped lang="scss">
.card-links-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--card-link-image-width, 80px), 1fr));
  gap: var(--card-links-gap, 12px);

  &::v-deep(.ui-img) {
    --width: 100% !important; // TODO: fix!
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

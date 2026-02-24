<template>
  <div class="skeleton-top-results-item-loader">
    <SkeletonImgLoader
      :is-rounded="imgRounded"
      class="skeleton-top-results-item-loader__image"
      :class="imageCSSClasses"
    />

    <div class="skeleton-top-results-item-loader__details">
      <SkeletonTextLoader width="50%" />

      <SkeletonTextLoader width="80%" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SkeletonTopResultsItem } from '~/modules/search/components/TopResults/SkeletonLoaders/SkeletonTopResultsLoader/types';

const props = defineProps<SkeletonTopResultsItem>();

const rootCSSClass = 'skeleton-top-results-item-loader';
const imageCSSClasses = computed(() => ({
  [`${rootCSSClass}__image_is-rounded`]: props.imgRounded,
}));
</script>

<style scoped lang="scss">
.skeleton-top-results-item-loader {
  display: flex;
  align-items: center;
  column-gap: 16px;

  &__image {
    --width: 60px;
    --height: 60px;
  }

  &__details {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  }
}
</style>

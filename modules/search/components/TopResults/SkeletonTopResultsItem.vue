<template>
  <div class="skeleton-top-results-item">
    <div class="skeleton-top-results-item__image" :class="imageCSSClasses" />

    <div class="skeleton-top-results-item__details">
      <SkeletonText width="30%" class="skeleton-top-results-item__name" />

      <SkeletonText />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SkeletonTopResultsItem } from '~/modules/search/components/TopResults/types';
import { computed } from 'vue';

const props = withDefaults(defineProps<SkeletonTopResultsItem>(), {
  withRoundedImage: true,
})

const rootCSSClass = 'skeleton-top-results-item';
const imageCSSClasses = computed(() => ({
  [`${rootCSSClass}__image_is-rounded`]: props.withRoundedImage,
}));

</script>

<style scoped lang="scss">
.skeleton-top-results-item {
  display: flex;
  align-items: center;
  column-gap: 16px;

  &__image {
    width: 60px;
    height: 60px;
    border-radius: var(--border-radius, 4px);
    animation: pulse-bg 1s infinite;

    &_is-rounded {
      border-radius: 100%;
    }
  }

  &__details {
    flex-grow: 1;
  }

  &__name {
    margin-bottom: 8px;
  }
}
</style>
<template>
  <div class="skeleton-section-loader">
    <div :class="headingContainer ? 'container' : 'container-fluid'">
      <SkeletonHeadingLoader class="skeleton-section-loader__heading" />
    </div>

    <div :class="contentContainer ? 'container' : 'container-fluid'">
      <slot name="default" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SkeletonSectionLoaderProps } from '~/modules/shared/components/Skeletons/SkeletonSectionLoader/types';

defineProps<SkeletonSectionLoaderProps>();
</script>

<style scoped lang="scss">
.skeleton-section-loader {
  &:not(:last-child) {
    margin-bottom: var(--section-bottom-margin, 24px);
  }

  &__heading {
    margin-bottom: var(--section-heading-bottom-margin, 16px);
  }
}
</style>

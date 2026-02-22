<template>
  <div class="skeleton-text-loader" />
</template>

<script setup lang="ts">
import type { SkeletonTextLoaderProps } from '~/modules/shared/components/Skeletons/SkeletonTextLoader/types';

withDefaults(defineProps<SkeletonTextLoaderProps>(), {
  width: '70%',
});
</script>

<style scoped lang="scss">
.skeleton-text-loader {
  width: v-bind(width);
  height: 12px;
  border-radius: var(--border-radius, 4px);
  animation: pulse-bg 1s infinite;

  @include respond-to(xs) {
    height: 16px;
  }
}
</style>

<template>
  <div class="skeleton-heading-loader" />
</template>

<script setup lang="ts">
import type { SkeletonHeadingLoaderProps } from '~/modules/shared/components/Skeletons/SkeletonHeadingLoader/types';

withDefaults(defineProps<SkeletonHeadingLoaderProps>(), {
  width: '50%',
});
</script>

<style scoped lang="scss">
.skeleton-heading-loader {
  width: v-bind(width);
  height: 24px;
  border-radius: var(--border-radius, 4px);
  animation: pulse-bg 1s infinite;
}
</style>

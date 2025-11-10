<template>
  <div class="skeleton-img-loader" :class="rootCSSClasses">
    <NuxtIcon mode="svg" name="i-mynaui-music-solid" class="skeleton-img-loader__icon" />
  </div>
</template>

<script setup lang="ts">
import type { SkeletonImgLoaderProps } from '~/modules/shared/components/Skeletons/SkeletonImgLoader/types';

const props = defineProps<SkeletonImgLoaderProps>();

const rootCSSClass = 'skeleton-img-loader';
const rootCSSClasses = computed<Record<string, boolean>>(() => ({
  [`${rootCSSClass}_is-rounded`]: props.isRounded,
}));
</script>

<style scoped lang="scss">
.skeleton-img-loader {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--width, initial);
  height: var(--height, initial);
  background-color: #323232;
  border-radius: var(--border-rounded, 4px);
  animation: pulse-bg 1s infinite;

  &_is-rounded {
    border-radius: 100%;
  }

  &__icon {
    width: calc(var(--width, 100%) / 2.5);
    height: calc(var(--height, 100%) / 2.5);
    color: rgba(235, 235, 245, 0.16);
  }
}
</style>

<template>
  <div class="skeleton-slider">
    <SkeletonSliderItem v-for="item of total" :align="align" :is-rounded="isRounded"/>
  </div>
</template>

<script setup lang="ts">
import { UIAlignments } from '~/modules/shared/components/UI/types';
import type { SkeletonSliderProps } from '~/modules/shared/components/Skeletons/SkeletonSlider/types';

withDefaults(defineProps<SkeletonSliderProps>(), {
  total: 5,
  align: UIAlignments.left,
})
</script>

<style scoped lang="scss">
.skeleton-slider {
  display: flex;
  gap: var(--album-slider-column-gap, 12px);
  overflow-x: auto;

  @include hide-scrollbar();

  @include respond-to(xs) {
    gap: var(--album-slider-column-xs-gap, 16px);
  }
}
</style>
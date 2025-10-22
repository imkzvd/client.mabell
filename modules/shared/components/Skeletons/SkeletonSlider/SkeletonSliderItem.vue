<template>
  <div class="skeleton-slider-item">
    <div class="skeleton-slider-item__img" :class="imgCssClasses" />

    <SkeletonText width="70%" class="skeleton-slider-item__name" :class="nameCssClasses" />
  </div>
</template>

<script setup lang="ts">
import type { SkeletonSliderItemProps } from '~/modules/shared/components/Skeletons/SkeletonSlider/types';

const props = defineProps<SkeletonSliderItemProps>();

const rootClass = 'skeleton-slider-item';
const imgCssClasses = computed(() => ({
  [`${rootClass}__img_is-rounded`]: props.isRounded,
}));
const nameCssClasses = computed(() => ({
  [`${rootClass}__name_align_${props.align}`]: props.align,
}));
</script>

<style scoped lang="scss">
.skeleton-slider-item {
  &__img {
    width: var(--album-slider-cover-size, 120px);
    height: var(--album-slider-cover-size, 120px);
    margin-bottom: 8px;
    border-radius: var(--border-radius, 4px);
    animation: pulse-bg 1s infinite;

    @include respond-to(xs) {
      margin-bottom: 12px;
      width: var(--album-slider-cover-xs-size, 140px);
      height: var(--album-slider-cover-xs-size, 140px);
    }

    @include respond-to(md) {
      width: var(--album-slider-cover-md-size, 140px);
      height: var(--album-slider-cover-md-size, 140px);
    }

    &_is-rounded {
      border-radius: 100%;
    }
  }

  &__name {
    &_align {
      &_left {
        margin-right: auto;
      }

      &_center {
        margin-inline: auto;
      }

      &_right {
        margin-left: auto;
      }
    }
  }
}
</style>

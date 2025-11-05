<template>
  <div class="skeleton-card-slider-loader">
    <div v-for="(item, index) of cardsTotal" :key="index" class="skeleton-card-slider-loader__card">
      <div
        class="skeleton-card-slider-loader__img"
        :class="{ 'skeleton-card-slider-loader__img_is-rounded': isRoundedImage }"
      />

      <div
        class="skeleton-card-slider-loader__text-rows"
        :class="{ [`skeleton-card-slider-loader__text-rows_align_${align}`]: align }"
      >
        <SkeletonTextLoader width="70%" />

        <SkeletonTextLoader v-if="textRows === '2'" width="40%" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UIAlignments } from '~/modules/shared/components/UI/types';
import type { SkeletonCardSliderLoaderProps } from '~/modules/shared/components/Skeletons/SkeletonCardSliderLoader/types';

const cardsTotal: number = 6;

withDefaults(defineProps<SkeletonCardSliderLoaderProps>(), {
  textRows: '1',
  align: UIAlignments.left,
});
</script>

<style scoped lang="scss">
.skeleton-card-slider-loader {
  display: flex;
  overflow-x: hidden;
  column-gap: var(--card-links-gap, 12px);

  @include respond-to(lg) {
    gap: var(--card-links-lg-gap, 16px);
  }

  &__img {
    width: var(--card-link-cover-size, 80px);
    aspect-ratio: 1;
    margin-bottom: 8px;
    border-radius: var(--border-radius, 4px);
    animation: pulse-bg 1s infinite;

    @include respond-to(xs) {
      margin-bottom: 12px;
      width: var(--card-link-cover-xs-size, 100px);
    }

    @include respond-to(md) {
      width: var(--card-link-cover-md-size, 120px);
    }

    @include respond-to(lg) {
      width: var(--card-link-cover-lg-size, 160px);
    }

    &_is-rounded {
      border-radius: 100%;
    }
  }

  &__text-rows {
    display: flex;
    flex-direction: column;
    row-gap: 4px;

    &_align {
      &_left {
        align-items: flex-start;
      }

      &_center {
        align-items: center;
      }

      &_right {
        align-items: flex-end;
      }
    }
  }
}
</style>

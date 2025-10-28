<template>
  <div class="skeleton-cards-loader">
    <div v-for="(item, index) of total" :key="index" class="skeleton-cards-loader__card">
      <div
        class="skeleton-cards-loader__img"
        :class="{ 'skeleton-cards-loader__img_is-rounded': roundedImage }"
      />

      <div
        class="skeleton-cards-loader__text-rows"
        :class="{ [`skeleton-cards-loader__text-rows_align_${align}`]: align }"
      >
        <SkeletonTextLoader width="70%" />

        <SkeletonTextLoader v-if="rows === '2'" width="35%" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UIAlignments } from '~/modules/shared/components/UI/types';
import type { SkeletonCardsLoaderProps } from '~/modules/shared/components/Skeletons/SkeletonCardsLoader/types';

withDefaults(defineProps<SkeletonCardsLoaderProps>(), {
  total: 5,
  rows: '1',
  align: UIAlignments.left,
});
</script>

<style scoped lang="scss">
.skeleton-cards-loader {
  display: flex;
  gap: var(--album-slider-column-gap, 12px);
  overflow: hidden;

  &__img {
    width: var(--album-list-cover-size, 120px);
    height: var(--album-list-cover-size, 120px);
    margin-bottom: 8px;
    border-radius: var(--border-radius, 4px);
    animation: pulse-bg 1s infinite;

    @include respond-to(xs) {
      margin-bottom: 12px;
      width: var(--album-list-cover-xs-size, 140px);
      height: var(--album-list-cover-xs-size, 140px);
    }

    @include respond-to(md) {
      width: var(--album-list-cover-md-size, 140px);
      height: var(--album-list-cover-md-size, 140px);
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

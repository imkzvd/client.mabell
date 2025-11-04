<template>
  <div class="skeleton-card-list-loader">
    <div v-for="(item, index) of cardsTotal" :key="index" class="skeleton-card-list-loader__card">
      <div
        class="skeleton-card-list-loader__img"
        :class="{ 'skeleton-card-list-loader__img_is-rounded': isRoundedImage }"
      />

      <div
        class="skeleton-card-list-loader__text-rows"
        :class="{ [`skeleton-card-list-loader__text-rows_align_${align}`]: align }"
      >
        <SkeletonTextLoader width="70%" />

        <SkeletonTextLoader v-if="textRows === '2'" width="40%" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UIAlignments } from '~/modules/shared/components/UI/types';
import type { SkeletonCardListLoaderProps } from '~/modules/shared/components/Skeletons/SkeletonCardListLoader/types';

const cardsTotal: number = 10;

withDefaults(defineProps<SkeletonCardListLoaderProps>(), {
  textRows: '1',
  align: UIAlignments.left,
});
</script>

<style scoped lang="scss">
.skeleton-card-list-loader {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--album-list-cover-size, 80px), 1fr));
  gap: var(--album-list-item-gap, 12px);
  grid-template-rows: auto;
  grid-auto-rows: 0;
  row-gap: 0;
  overflow: hidden;

  @include respond-to(xs) {
    grid-template-columns: repeat(auto-fill, minmax(var(--album-list-cover-xs-size, 100px), 1fr));
  }

  @include respond-to(md) {
    grid-template-columns: repeat(auto-fill, minmax(var(--album-list-cover-md-size, 120px), 1fr));
  }

  @include respond-to(lg) {
    grid-template-columns: repeat(auto-fill, minmax(var(--album-list-cover-lg-size, 160px), 1fr));
    gap: var(--album-list-item-lg-gap, 16px);
  }

  &__img {
    aspect-ratio: 1;
    margin-bottom: 8px;
    border-radius: var(--border-radius, 4px);
    animation: pulse-bg 1s infinite;

    @include respond-to(xs) {
      margin-bottom: 12px;
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

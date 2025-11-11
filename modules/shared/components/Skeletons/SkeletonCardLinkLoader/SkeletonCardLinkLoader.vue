<template>
  <div class="skeleton-card-link-loader">
    <SkeletonImgLoader class="skeleton-card-link-loader__img" :is-rounded="imageRounded" />

    <div
      class="skeleton-card-link-loader__text-rows"
      :class="{ [`skeleton-card-link-loader__text-rows_align_${textAlign}`]: textAlign }"
    >
      <SkeletonTextLoader width="80%" />

      <SkeletonTextLoader v-if="textRows === '2'" width="50%" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SkeletonCardLinkLoaderProps } from '~/modules/shared/components/Skeletons/SkeletonCardLinkLoader/types';
import { UIAlignments } from '~/modules/shared/components/UI/types';

withDefaults(defineProps<SkeletonCardLinkLoaderProps>(), {
  textRows: '1',
  textAlign: UIAlignments.left,
  direction: 'column',
});
</script>

<style scoped lang="scss">
.skeleton-card-link-loader {
  &__img {
    --width: var(--card-link-image-width, 80px);
    aspect-ratio: 1;
    margin-bottom: 8px;

    @include respond-to(lg) {
      margin-bottom: 12px;
    }
  }

  &__text-rows {
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    width: 100%;

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

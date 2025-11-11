<template>
  <div class="skeleton-card-link-list-loader" :class="rootCSSClasses">
    <SkeletonCardLinkLoader
      v-for="(item, index) of cardsTotal"
      :key="index"
      :text-rows="textRows"
      :text-align="textAlign"
      :image-rounded="imageRounded"
      class="skeleton-card-link-list-loader__card"
    />
  </div>
</template>

<script setup lang="ts">
import { UIAlignments } from '~/modules/shared/components/UI/types';
import type { SkeletonCardLinkListLoaderProps } from '~/modules/shared/components/Skeletons/SkeletonCardLinkListLoader/types';

const cardsTotal: number = 10;

const props = withDefaults(defineProps<SkeletonCardLinkListLoaderProps>(), {
  mode: 'list',
  textRows: '1',
  align: UIAlignments.left,
});

const rootCSSClass = 'skeleton-card-link-list-loader';
const rootCSSClasses = computed(() => ({
  [`${rootCSSClass}_mode_${props.mode}`]: !!props.mode,
}));
</script>

<style scoped lang="scss">
.skeleton-card-link-list-loader {
  display: grid;
  gap: var(--card-links-gap, 12px);
  grid-template-rows: auto;
  grid-auto-rows: 0;
  row-gap: 0;
  overflow: hidden;

  &_mode {
    &_list {
      grid-template-columns: repeat(auto-fill, minmax(var(--card-link-image-width, 80px), 1fr));

      &::v-deep(.skeleton-img-loader) {
        --width: 100%;
      }
    }

    &_slider {
      grid-template-columns: repeat(auto-fill, var(--card-link-image-width, 80px));
      grid-auto-flow: column;
    }
  }
}
</style>

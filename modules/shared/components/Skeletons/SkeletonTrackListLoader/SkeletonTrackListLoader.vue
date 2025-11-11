<template>
  <div class="skeleton-track-list-loader">
    <div v-for="(item, index) of cardsTotal" :key="index" class="skeleton-track-list-loader__item">
      <SkeletonImgLoader class="skeleton-track-list-loader__img" />

      <div class="skeleton-track-list-loader__text-rows">
        <SkeletonTextLoader width="80%" />

        <SkeletonTextLoader width="50%" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const cardsTotal: number = 5;
</script>

<style scoped lang="scss">
.skeleton-track-list-loader {
  &__item {
    display: flex;
    align-items: center;
    column-gap: 12px;
    padding-block: 4px;
  }

  &__img {
    --width: var(--track-image-width);
    --height: var(--track-image-width);
    border-radius: var(--border-radius, 4px);
    animation: pulse-bg 1s infinite;
    flex-shrink: 0;
  }

  &__text-rows {
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    width: 100%;
    max-width: 600px;
  }
}
</style>

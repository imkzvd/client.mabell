<template>
  <div class="skeleton-top-results-loader">
    <SkeletonTopResultsItemLoader v-for="(item, index) of 8" :key="index" :img-rounded="!!!index" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.skeleton-top-results-loader {
  display: grid;
  gap: 16px;

  @include respond-to(md) {
    grid-template-columns: repeat(auto-fill, 320px);
  }
}
</style>

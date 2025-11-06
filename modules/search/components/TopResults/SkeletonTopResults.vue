<template>
  <div class="skeleton-top-results">
    <SkeletonTopResultsItem v-for="(item, index) of 8" :key="index" :is-rounded-image="!!!index" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.skeleton-top-results {
  display: grid;
  gap: 16px;

  @include respond-to(md) {
    grid-template-columns: repeat(auto-fill, 320px);
  }
}
</style>

<template>
  <div class="skeleton-top-results">
    <SkeletonTopResultsItem v-for="(item, index) of 10" :with-rounded-image="!!!index" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.skeleton-top-results {
  display: grid;
  grid-template-columns: repeat(auto-fit, 320px);
  gap: 16px;

  &__item {
    background-color: var(--gray-darkest);
    border-radius: var(--border-rounded, 4px);
    padding: 16px;
    height: 92px;
    animation: pulse-bg 1s infinite;
  }
}
</style>

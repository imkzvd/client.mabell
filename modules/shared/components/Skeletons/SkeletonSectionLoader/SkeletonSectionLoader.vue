<template>
  <div class="skeleton-section-loader">
    <SkeletonHeadingLoader class="skeleton-section-loader__heading" />

    <slot name="default" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.skeleton-section-loader {
  &:not(:last-child) {
    margin-bottom: 16px;
  }

  @include respond-to(md) {
    &:not(:last-child) {
      margin-bottom: 32px;
    }
  }

  &__heading {
    margin-bottom: 16px;
  }
}
</style>

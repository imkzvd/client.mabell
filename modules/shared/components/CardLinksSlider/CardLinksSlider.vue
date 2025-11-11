<template>
  <div class="card-links-slider">
    <slot name="default" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.card-links-slider {
  display: flex;
  column-gap: var(--card-links-gap, 12px);
  overflow-x: auto;
}
</style>

<template>
  <div class="sticky-mobile-top-bar">
    <div class="container">
      <slot name="default" />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.sticky-mobile-top-bar {
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  padding-block: 12px;
  background-color: rgba(18, 18, 18, 95%);
  border-bottom: 1px solid hsla(0, 0%, 50%, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  backdrop-filter: blur(10px) saturate(200%);
  -webkit-backdrop-filter: blur(10px) saturate(200%);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
}
</style>

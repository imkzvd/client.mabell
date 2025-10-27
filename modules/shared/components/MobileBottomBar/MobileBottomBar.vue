<template>
  <div class="mobile-bottom-bar">
    <MobileNavMenu />
  </div>
</template>

<script setup lang="ts">
// TODO: add hide by scroll (sync ios bottom bar)
</script>

<style scoped lang="scss">
.mobile-bottom-bar {
  position: sticky;
  right: 0;
  bottom: 0;
  left: 0;
  padding-bottom: calc(env(safe-area-inset-bottom, 0));
  border-top: 1px solid var(--nav-devider-color, gray);
  background-color: rgba(18, 18, 18, 90%);
  backdrop-filter: blur(15px) saturate(200%);
  box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.5);
}
</style>

<template>
  <div class="sticky-mobile-bottom-bar">
    <ClientOnly>
      <MobilePlayer class="sticky-mobile-bottom-bar__mobile-player" />
    </ClientOnly>

    <MobileNavMenu class="sticky-mobile-bottom-bar__mobile-nav-menu" />
  </div>
</template>

<script setup lang="ts">
// TODO: add hide by scroll (sync ios bottom bar)
</script>

<style scoped lang="scss">
.sticky-mobile-bottom-bar {
  position: sticky;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 4px 8px;
  padding-bottom: calc(env(safe-area-inset-bottom, 0));
  background-color: rgba(18, 18, 18, 95%);
  border-top: 1px solid hsla(0, 0%, 50%, 0.1);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  backdrop-filter: blur(30px) saturate(600%);
  -webkit-backdrop-filter: blur(10px) saturate(200%);
  box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.5);

  &__mobile-player {
    margin-block: 4px;
  }
}
</style>

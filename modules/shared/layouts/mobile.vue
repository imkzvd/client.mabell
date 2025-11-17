<template>
  <div class="mobile-layout">
    <StickyMobileTopBar v-if="false" />

    <main class="mobile-layout__main">
      <slot name="default" />
    </main>

    <AppFooter />

    <StickyMobileBottomBar />
  </div>
</template>

<script setup lang="ts">
useHead({
  meta: [{ name: 'theme-color', content: '#121212' }],
});
</script>

<style lang="scss" scoped>
.mobile-layout {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;

  &__header {
    position: sticky;
    top: 0;
    padding-block: 16px;
  }

  &__main {
    flex-grow: 1;
  }
}
</style>

<template>
  <NuxtLayout :name="currentLayoutName" @contextmenu.prevent>
    <NuxtPwaManifest />

    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { isMobileOrTablet } = useDevice();

const currentLayoutName = computed<string>(() => (isMobileOrTablet ? 'mobile' : 'desktop'));
</script>

<style lang="scss">
.mabell-app {
  color: var(--main-text, white);
  background-color: var(--panel-bg, black);

  @include respond-to(xl) {
    background-color: var(--body-bg, black);
  }
}
</style>

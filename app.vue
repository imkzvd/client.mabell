<template>
  <NuxtLayout @contextmenu.prevent>
    <NuxtPwaManifest />

    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
</style>

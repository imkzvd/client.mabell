<template>
  <NuxtLink :to="{ name: 'index' }" class="home-logo-link">
    <HomeLogo :width="width" :height="height" />
  </NuxtLink>
</template>

<script setup lang="ts">
import HomeLogo from '../HomeLogo/HomeLogo.vue';
import type { HomeLogoLinkProps } from './types';

defineProps<HomeLogoLinkProps>();
</script>

<style lang="scss" scoped>
.home-logo-link {
  display: inline-flex;
}
</style>

<template>
  <NuxtLink :to="{ name: 'index' }" class="home-logo-link">
    <HomeLogo :width="width" :height="height" />
  </NuxtLink>
</template>

<script setup lang="ts">
import type { HomeLogoLinkProps } from '@/shared/components/HomeLogoLink/types.ts';
import HomeLogo from '#shared/components/HomeLogo/HomeLogo.vue';

defineProps<HomeLogoLinkProps>();
</script>

<style lang="scss" scoped></style>

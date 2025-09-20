<template>
  <NuxtLink :to="{ name: 'index' }" class="home-logo-link">
    <HomeLogo :width="width" :height="height" />
  </NuxtLink>
</template>

<script setup lang="ts">
import type { HomeLogoLinkProps } from '@/modules/shared/components/HomeLogoLink/types.ts';

defineProps<HomeLogoLinkProps>();
</script>

<style lang="scss" scoped></style>

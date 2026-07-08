<template>
  <CardLink
    :to="{ name: 'artist-id', params: { id: item.id } }"
    :img-path="item.avatar"
    :img-alt="item.name"
    text-align="center"
    img-rounded
    class="artist-card-link"
  >
    <template #title>{{ item.name }}</template>
  </CardLink>
</template>

<script setup lang="ts">
import CardLink from '../../../shared/components/CardLink/CardLink.vue';
import type { ArtistCardLinkProps } from './types';

defineProps<ArtistCardLinkProps>();
</script>

<style scoped lang="scss"></style>

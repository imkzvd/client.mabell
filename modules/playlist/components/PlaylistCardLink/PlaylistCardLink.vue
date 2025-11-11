<template>
  <CardLink
    :to="{ name: 'playlist-id', params: { id: item.id } }"
    :img-path="item.cover"
    :img-alt="item.name"
    class="playlist-card-link"
  >
    <template #title>{{ item.name }}</template>
  </CardLink>
</template>

<script setup lang="ts">
import type { PlaylistCardLinkProps } from '~/modules/playlist/components/PlaylistCardLink/types';

defineProps<PlaylistCardLinkProps>();
</script>

<style scoped lang="scss"></style>

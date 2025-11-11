<template>
  <CardLink
    :to="{ name: 'album-id', params: { id: item.id } }"
    :img-path="item.cover"
    :img-alt="item.name"
    class="album-card-link"
  >
    <template #title>{{ item.name }}</template>

    <template #subtitle>
      <ArtistNames v-if="showArtists" :items="item.artists" />

      <template v-if="showMeta">
        <span>{{ item.type.label }}</span>

        <span v-if="releaseYear">{{ releaseYear }}</span>
      </template>
    </template>
  </CardLink>
</template>

<script setup lang="ts">
import type { AlbumCardLinkProps } from '~/modules/album/components/AlbumCardLink/types';

const props = defineProps<AlbumCardLinkProps>();

const releaseYear = computed<number | string | null>(() => {
  const { releaseAt } = props.item;

  if (!releaseAt) return null;

  return props.fullDate
    ? new Date(releaseAt).toLocaleDateString()
    : new Date(releaseAt).getFullYear();
});
</script>

<style scoped lang="scss"></style>

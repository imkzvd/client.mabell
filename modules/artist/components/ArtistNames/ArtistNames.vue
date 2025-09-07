<template>
  <span class="artist-names">
    <template v-for="(item, index) of allArtistNames" :key="index">
      <span>{{ item }}</span>

      <span v-if="index !== items.length - 1" class="artist-names__item">,</span>
    </template>
  </span>
</template>

<script setup lang="ts">
import type { ArtistNamesProps } from "~/modules/artist/components/ArtistNames/types";

const props = defineProps<ArtistNamesProps>();

const allArtistNames = computed(() => props.items.map(({ name }) => name));
</script>

<style scoped lang="scss">
.artist-names {
  &__item {
    margin-right: 2px;
  }
}
</style>

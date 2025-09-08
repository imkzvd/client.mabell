<template>
  <div class="artist-links">
    <div v-for="(item, index) of items" :key="item.id" class="artist-links__item">
      <UILink
        appearance="secondary"
        :hover-underline="false"
        :to="{ name: 'artist', params: { id: item.id } }"
        class="artist-links__link"
        @click.stop
      >
        {{ item.name }}
      </UILink>
      <span v-if="index !== items.length - 1">, </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ArtistLinksProps } from '~/modules/artist/components/ArtistLinks/types';

defineProps<ArtistLinksProps>()
</script>

<style scoped lang="scss">
.artist-links {
  font-size: var(--size, inherit);
  display: flex;

  &__item {
    &:not(:last-child) {
      margin-right: 2px;
    }
  }
}
</style>

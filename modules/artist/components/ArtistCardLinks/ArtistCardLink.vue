<template>
  <UILink
    :hover-underline="false"
    :to="{ name: 'artist-id', params: { id: item.id } }"
    class="artist-card-link"
  >
    <UIImg :url="item.cover" :alt="item.name" is-rounded class="artist-card-link__avatar" />

    <UIText align="center" :line-clamp="2" class="artist-card-link__name">
      {{ item.name }}
    </UIText>
  </UILink>
</template>

<script setup lang="ts">
import type { ArtistCardLinkProps } from '~/modules/artist/components/ArtistCardLinks/types';

defineProps<ArtistCardLinkProps>();
</script>

<style scoped lang="scss">
.artist-card-link {
  &__avatar {
    margin-bottom: 8px;
    aspect-ratio: 1;

    @include respond-to(xs) {
      margin-bottom: 12px;
    }
  }

  &__name {
    font-size: 14px;

    @include respond-to(md) {
      font-size: 16px;
    }
  }
}
</style>

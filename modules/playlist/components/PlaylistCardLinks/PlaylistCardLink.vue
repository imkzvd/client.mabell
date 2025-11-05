<template>
  <UILink
    :hover-underline="false"
    :to="{ name: 'playlist-id', params: { id: item.id } }"
    class="playlist-card-link"
  >
    <UIImg :url="item.cover" :alt="item.name" class="playlist-card-link__cover" />

    <UIText :line-clamp="2" class="playlist-card-link__name">
      {{ item.name }}
    </UIText>
  </UILink>
</template>

<script setup lang="ts">
import type { PlaylistCardLinkProps } from '~/modules/playlist/components/PlaylistCardLinks/types';

defineProps<PlaylistCardLinkProps>();
</script>

<style scoped lang="scss">
.playlist-card-link {
  &__cover {
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

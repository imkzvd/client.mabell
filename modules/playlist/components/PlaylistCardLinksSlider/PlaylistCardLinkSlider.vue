<template>
  <UILink
    :hover-underline="false"
    :to="{ name: 'playlist-id', params: { id: item.id } }"
    class="playlist-card-link-slider"
  >
    <UIImg :url="item.cover" :alt="item.name" class="playlist-card-link-slider__cover" />

    <UIText :line-clamp="2" class="playlist-card-link-slider__name">
      {{ item.name }}
    </UIText>
  </UILink>
</template>

<script setup lang="ts">
import type { PlaylistCardLinkSliderProps } from '~/modules/playlist/components/PlaylistCardLinksSlider/types';

defineProps<PlaylistCardLinkSliderProps>();
</script>

<style scoped lang="scss">
.playlist-card-link-slider {
  &__cover {
    --size: var(--card-link-cover-size, 80px);
    margin-bottom: 8px;

    @include respond-to(xs) {
      --size: var(--card-link-cover-xs-size, 120px);
      margin-bottom: 12px;
    }

    @include respond-to(md) {
      --size: var(--card-link-cover-md-size, 140px);
    }

    @include respond-to(lg) {
      --size: var(--card-link-cover-lg-size, 160px);
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

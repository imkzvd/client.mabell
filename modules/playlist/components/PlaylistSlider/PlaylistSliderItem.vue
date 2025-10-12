<template>
  <UILink
    :hover-underline="false"
    :to="{ name: 'playlist-id', params: { id: item.id } }"
    class="playlist-slider-item"
  >
    <UIImg :url="item.cover" :alt="item.name" class="playlist-slider-item__cover" />

    <div class="playlist-slider-item__details">
      <UIText :line-clamp="2" class="playlist-slider-item__name">
        {{ item.name }}
      </UIText>
    </div>
  </UILink>
</template>

<script setup lang="ts">
import type { PlaylistSliderItemProps } from '~/modules/playlist/components/PlaylistSlider/types';

defineProps<PlaylistSliderItemProps>();
</script>

<style scoped lang="scss">
.playlist-slider-item {
  width: min-content;

  &__cover {
    --size: var(--album-slider-cover-size, 120px);
    margin-bottom: 8px;

    @include respond-to(xs) {
      --size: var(--album-slider-cover-xs-size, 140px);
      margin-bottom: 12px;
    }

    @include respond-to(md) {
      --size: var(--album-slider-cover-md-size, 160px);
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

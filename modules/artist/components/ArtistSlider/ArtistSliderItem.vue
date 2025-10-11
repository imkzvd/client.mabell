<template>
  <UILink
    :hover-underline="false"
    :to="item ? { name: 'artist-id', params: { id: item.id } } : null"
    class="artist-slider-item"
  >
    <UIImg
      :url="item.avatar"
      :alt="item.name"
      is-rounded
      class="artist-slider-item__avatar"
    />

    <UIText :line-clamp="2" align="center" class="artist-slider-item__name">
      {{ item.name }}
    </UIText>
  </UILink>
</template>

<script setup lang="ts">
import type { ArtistSliderItemProps } from '~/modules/artist/components/ArtistSlider/types';

defineProps<ArtistSliderItemProps>();
</script>

<style scoped lang="scss">
.artist-slider-item {
  &__avatar {
    margin-bottom: 8px;
    --size: 120px;

    @include respond-to(xs) {
      margin-bottom: 12px;
      --size: 140px;
    }

    @include respond-to(md) {
      --size: 160px;
    }
  }

  &__name {
    font-size: 14px;

    @include respond-to(xs) {
      font-size: 16px;
    }
  }
}
</style>

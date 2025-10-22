<template>
  <NuxtLink :to="{ name: 'artist-id', params: { id: item.id } }" class="similar-artist-slider-item">
    <UIImg :url="item.avatar" :alt="item.name" class="similar-artist-slider-item__avatar" />

    <UIText :line-clamp="2" class="similar-artist-slider-item__name">
      {{ item.name }}
    </UIText>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { ArtistSliderCardProps } from '~/modules/artist/components/SimilarArtistSlider/types';

defineProps<ArtistSliderCardProps>();
</script>

<style scoped lang="scss">
.similar-artist-slider-item {
  @include respond-to(xl) {
    &:hover & {
      &__name {
        text-decoration: underline;
      }
    }
  }

  &__avatar {
    margin-bottom: 8px;

    @include respond-to(md) {
      --size: 100px;
      margin-bottom: 12px;
    }

    @include respond-to(xl) {
      --size: 160px;
      margin-bottom: 12px;
    }
  }

  &__name {
    text-align: center;
    color: var(--main-text, white);
    --size: 12px;

    @include respond-to(xl) {
      --size: 16px;
    }
  }
}
</style>

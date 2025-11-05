<template>
  <UILink
    :hover-underline="false"
    :to="item ? { name: 'artist-id', params: { id: item.id } } : null"
    class="artist-card-link"
  >
    <UIImg :url="item.avatar" :alt="item.name" is-rounded class="artist-card-link__avatar" />

    <UIText :line-clamp="2" align="center" class="artist-card-link__name">
      {{ item.name }}
    </UIText>
  </UILink>
</template>

<script setup lang="ts">
import type { ArtistCardLinkSliderProps } from '~/modules/artist/components/ArtistCardLinksSlider/types';

defineProps<ArtistCardLinkSliderProps>();
</script>

<style scoped lang="scss">
.artist-card-link {
  &__avatar {
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

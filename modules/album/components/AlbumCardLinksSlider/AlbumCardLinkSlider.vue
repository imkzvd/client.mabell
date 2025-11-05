<template>
  <UILink
    :hover-underline="false"
    :to="{ name: 'album-id', params: { id: item.id } }"
    class="album-card-link-slider"
  >
    <UIImg
      :url="item.cover"
      :alt="item.name"
      fallback-icon="i-ph-music-notes-simple-bold"
      class="album-card-link-slider__cover"
    />

    <div class="album-card-link-slider__details">
      <UIText :line-clamp="1" class="album-card-link-slider__name">
        {{ item.name }}
      </UIText>

      <UIText v-if="releaseYear" appearance="secondary" class="album-card-link-slider__year">
        {{ releaseYear }}
      </UIText>
    </div>
  </UILink>
</template>

<script setup lang="ts">
import type { AlbumCardLinkSliderProps } from '~/modules/album/components/AlbumCardLinksSlider/types';

const props = defineProps<AlbumCardLinkSliderProps>();

const releaseYear = computed<number | null>(() => {
  const { releaseAt } = props.item;

  return releaseAt ? new Date(releaseAt).getFullYear() : null;
});
</script>

<style scoped lang="scss">
.album-card-link-slider {
  &__cover {
    --size: var(--album-card-links-cover-size, 80px);
    margin-bottom: 8px;

    @include respond-to(xs) {
      --size: var(--album-card-links-cover-xs-size, 120px);
      margin-bottom: 12px;
    }

    @include respond-to(md) {
      --size: var(--album-card-links-cover-md-size, 140px);
    }

    @include respond-to(lg) {
      --size: var(--album-card-links-cover-lg-size, 160px);
    }
  }

  &__name {
    font-size: 14px;

    @include respond-to(md) {
      font-size: 16px;
    }
  }

  &__year {
    font-size: 12px;

    @include respond-to(md) {
      font-size: 14px;
    }
  }
}
</style>

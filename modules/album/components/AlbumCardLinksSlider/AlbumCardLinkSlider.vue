<template>
  <UILink
    :to="{ name: 'album-id', params: { id: item.id } }"
    :hover-underline="false"
    class="album-card-link-slider"
  >
    <UIImg :url="item.cover" :alt="item.name" class="album-card-link-slider__cover" />

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
      --size: var(--card-link-cover-lg-size-size, 160px);
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

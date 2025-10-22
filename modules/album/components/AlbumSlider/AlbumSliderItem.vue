<template>
  <UILink
    :hover-underline="false"
    :to="{ name: 'album-id', params: { id: item.id } }"
    class="album-slider-item"
  >
    <UIImg
      :url="item.cover"
      :alt="item.name"
      fallback-icon="i-ph-music-notes-simple-bold"
      class="album-slider-item__cover"
    />

    <div class="album-slider-item__details">
      <UIText :line-clamp="1" class="album-slider-item__name">
        {{ item.name }}
      </UIText>

      <UIText v-if="releaseYear" appearance="secondary" class="album-slider-item__year">
        {{ releaseYear }}
      </UIText>
    </div>
  </UILink>
</template>

<script setup lang="ts">
import type { AlbumSliderItemProps } from '~/modules/album/components/AlbumSlider/types';

const props = defineProps<AlbumSliderItemProps>();

const releaseYear = computed<number | null>(() => {
  const { releaseAt } = props.item;

  return releaseAt ? new Date(releaseAt).getFullYear() : null;
});
</script>

<style scoped lang="scss">
.album-slider-item {
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

  &__year {
    font-size: 12px;

    @include respond-to(md) {
      font-size: 14px;
    }
  }
}
</style>

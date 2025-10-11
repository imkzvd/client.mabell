<template>
  <UILink
    :hover-underline="false"
    :to="{ name: 'album-id', params: { id: item.id } }"
    class="album-slider-item"
  >
    <UIImg :url="item.cover" :alt="item.name" class="album-slider-item__cover" />

    <div class="album-slider-item__details">
      <UIText :line-clamp="2" class="album-slider-item__name">
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

  &__year {
    font-size: 12px;

    @include respond-to(xs) {
      font-size: 14px;
    }
  }
}
</style>

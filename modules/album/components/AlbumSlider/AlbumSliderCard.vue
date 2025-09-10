<template>
  <NuxtLink
    :to="{ name: 'album', params: { id: item.id } }"
    class="album-slider-card"
  >
    <AlbumCover :url="item.cover" :alt="item.name" class="album-slider-card__cover" />

    <div class="album-slider-card__details">
      <UIText is-bold :line-clamp="1" class="album-slider-card__name">
        {{ item.name }}
      </UIText>

      <UIText v-if="releaseYear" appearance="secondary" size="14px" class="album-slider-card__year">
        {{ releaseYear }}
      </UIText>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { AlbumSliderCardProps } from "~/modules/album/components/AlbumSlider/types";

const props = defineProps<AlbumSliderCardProps>();

const releaseYear = computed<number | null>(() => {
  const { releaseAt } = props.item;

  return releaseAt ? new Date(releaseAt).getFullYear() : null;
});
</script>

<style scoped lang="scss">
.album-slider-card {
  @include respond-to(xl) {
    &:hover & {
      &__name {
        text-decoration: underline;
      }
    }
  }

  &__cover {
    margin-bottom: 4px;

    @include respond-to(xs) {
      --size: 140px;
    }

    @include respond-to(xl) {
      --size: 200px;
    }
  }

  &__name {
    --size: 12px;

    @include respond-to(xl) {
      --size: 16px;
    }
  }

  &__year {
    --size: 12px;

    @include respond-to(xl) {
      --size: 14px;
    }
  }
}
</style>

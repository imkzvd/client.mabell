<template>
  <div
    :hover-underline="false"
    :to="{ name: 'album-id', params: { id: item.id } }"
    class="album-card-link"
  >
    <UIImg
      :url="item.cover"
      :alt="item.name"
      fallback-icon="i-ph-music-notes-simple-bold"
      class="album-card-link__cover"
    />

    <div class="album-card-link__details">
      <UIText :line-clamp="1" class="album-card-link__name">
        {{ item.name }}
      </UIText>

      <UIText v-if="releaseYear" appearance="secondary" class="album-card-link__year">
        {{ releaseYear }}
      </UIText>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AlbumCardLinkProps } from '~/modules/album/components/AlbumCardLinks/types';

const props = defineProps<AlbumCardLinkProps>();

const releaseYear = computed<number | null>(() => {
  const { releaseAt } = props.item;

  return releaseAt ? new Date(releaseAt).getFullYear() : null;
});
</script>

<style scoped lang="scss">
.album-card-link {
  &__cover {
    margin-bottom: 8px;
    aspect-ratio: 1;

    @include respond-to(xs) {
      margin-bottom: 12px;
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

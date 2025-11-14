<template>
  <header class="mobile-album-header">
    <div class="container">
      <UIImg :path="album.cover" :alt="album.name" class="mobile-album-header__cover" />

      <div class="mobile-album-header__details">
        <UIText align="center" class="mobile-album-header__meta-data">
          <span class="mobile-album-header__meta-data-item">{{ album.type.label }}</span>
          <span v-if="releaseAlbumYear" class="mobile-album-header__meta-data-item">
            {{ releaseAlbumYear }}
          </span>
        </UIText>

        <UIHeading :line-clamp="2" class="mobile-album-header__name">
          {{ album.name }}
        </UIHeading>

        <ArtistLinks
          :items="album.artists"
          separator="dot"
          class="mobile-album-header__artist-links"
        />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { MobileAlbumHeaderProps } from '~/modules/album/components/MobileAlbumHeader/types';

const props = defineProps<MobileAlbumHeaderProps>();

const releaseAlbumYear = computed<number | null>(() => {
  if (!props.album.releaseAt) return null;

  return new Date(props.album.releaseAt).getFullYear();
});
</script>

<style scoped lang="scss">
.mobile-album-header {
  position: relative;
  padding-block: var(--section-y-padding, 16px);
  background: linear-gradient(0deg, transparent 20%, var(--album-color, var(--base-bg)) 100%);
  --album-color: v-bind(props.album.color);

  &__cover {
    margin-inline: auto;
    margin-bottom: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    --width: 160px;
    --height: 160px;

    @include respond-to(xs) {
      --width: 220px;
      --height: 220px;
      margin-bottom: 16px;
    }
  }

  &__details {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__meta-data {
    font-size: 12px;

    @include respond-to(xs) {
      font-size: 14px;
    }
  }

  &__meta-data-item {
    &:not(:last-child)::after {
      content: '•';
      margin-inline: 4px;
    }
  }

  &__name {
    margin-bottom: 2px;
    font-size: 28px;
    line-height: 1.2;

    @include respond-to(xs) {
      margin-bottom: 4px;
      font-size: 32px;
    }
  }

  &__artist-links {
    font-size: 14px;
    --color: var(--main-text, white);

    @include respond-to(xs) {
      font-size: 16px;
    }
  }
}
</style>

<template>
  <header class="mobile-album-header">
    <div class="container">
      <UIImg :path="album.cover" :alt="album.name" class="mobile-album-header__cover" />

      <div class="mobile-album-header__details">
        <UIHeading :line-clamp="2" class="mobile-album-header__name">
          {{ album.name }}
        </UIHeading>

        <UIText align="center" appearance="secondary" class="mobile-album-header__meta-data">
          <span class="mobile-album-header__meta-data-item">{{ album.type.label }}</span>
          <span class="mobile-album-header__meta-data-item">{{ albumGenres }}</span>
          <span v-if="releaseAlbumYear" class="mobile-album-header__meta-data-item">
            {{ releaseAlbumYear }}
          </span>
        </UIText>

        <ArtistLinks
          separator="dot"
          :items="album.artists"
          class="mobile-album-header__artist-links"
        />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { MobileAlbumHeaderProps } from '~/modules/album/components/MobileAlbumHeader/types';

const props = defineProps<MobileAlbumHeaderProps>();

const albumGenres = computed<string>(() => props.album.genres.map(({ label }) => label).join('/'));
const releaseAlbumYear = computed<number | null>(() => {
  if (!props.album.releaseAt) return null;

  return new Date(props.album.releaseAt).getFullYear();
});
</script>

<style scoped lang="scss">
.mobile-album-header {
  position: relative;
  padding-block: 16px 32px;
  font-size: 12px;
  background: linear-gradient(0deg, transparent 0%, var(--album-color, var(--base-bg)) 100%);
  --album-color: v-bind(props.album.color);

  @include respond-to(xs) {
    font-size: 14px;
  }

  &:after {
    position: absolute;
    inset: 0;
    content: '';
    background: linear-gradient(0deg, transparent 0%, var(--album-color, var(--base-bg)) 100%);
  }

  &__cover {
    position: relative;
    z-index: 10;
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
    position: relative;
    z-index: 10;
    text-align: center;
  }

  &__name {
    font-size: 20px;
    line-height: normal;
    margin-bottom: 2px;

    @include respond-to(xs) {
      font-size: 24px;
      margin-bottom: 4px;
    }
  }

  &__meta-data {
    margin-bottom: 2px;

    @include respond-to(xs) {
      margin-bottom: 4px;
    }
  }

  &__meta-data-item {
    &:not(:last-child)::after {
      content: '•';
      margin-inline: 4px;
    }
  }

  &__artist-links {
    font-family: var(--bold-font);
    --color: var(--main-text, white);
  }
}
</style>

<template>
  <header class="album-header">
    <div class="container">
      <div class="album-header__columns">
        <AlbumCover :url="album.cover" :alt="album.name" class="album-header__cover" />

        <div class="album-header__details">
          <UIText class="album-header__meta-info">
            <span>{{ album.type.label }}</span> -
            <span>{{ albumGenres }}</span> -
            <span v-if="releaseAlbumYear">{{ releaseAlbumYear }}</span>
          </UIText>

          <UIHeading class="album-header__name">
            {{ album.name }}
          </UIHeading>

          <ArtistLinks :items="album.artists" dot-separator class="album-header__artist-links" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { MobileAlbumHeaderProps } from '~/modules/album/components/MobileAlbumHeader/types';

const props = defineProps<MobileAlbumHeaderProps>();

const albumGenres = computed<string>(() =>
  props.album.genres.map(({ label }) => label).join("/"),
);
const releaseAlbumYear = computed<number | null>(() => {
  if (!props.album.releaseAt) return null;

  return new Date(props.album.releaseAt).getFullYear();
});
</script>

<style scoped lang="scss">
.album-header {
  --album-color: v-bind(props.album.color);
  display: flex;
  align-items: center;
  height: 50vh;
  padding-block: 16px;
  background: linear-gradient(
      0deg,
      var(--base-bg) 0%,
      var(--album-color, var(--base-bg)) 80%
  );

  &__columns {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 32px;
    height: 100%;
    min-height: 400px;
  }

  &__cover {
    --size: 200px;
    box-shadow: 0 1px 10px 0 #000000;
    flex-shrink: 0;

    @include respond-to(xl) {
      --size: 240px;
    }
  }

  &__details {
    text-align: center;

    @include respond-to(md) {
      text-align: left;
    }
  }

  &__name {
    margin-bottom: 4px;
    line-height: 1.2;

    @include respond-to(xl) {
      margin-bottom: 8px;
    }
  }

  &__artist-links {
    --ui-link-color: var(--main-text, white);
    --size: 16px;
  }

  &__meta-info {
    font-size: 12px;
    color: var(--secondary-text, gray);

    @include respond-to(xs) {
      font-size: 14px;
    }
  }
}
</style>

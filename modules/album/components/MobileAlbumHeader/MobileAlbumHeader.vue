<template>
  <header class="mobile-album-header">
    <div class="container">
      <AlbumCover
        :url="album.cover"
        :alt="album.name"
        class="mobile-album-header__cover"
      />

      <div class="mobile-album-header__details">

        <UIHeading class="mobile-album-header__name">
          {{ album.name }}
        </UIHeading>

        <div class="mobile-album-header__artist-links">
          <ArtistLinks :items="album.artists" dot-separator class="mobile-album-header__artist-links" />
        </div>


        <UIText class="mobile-album-header__meta-info">
          <span>{{ album.type.label }}</span> -
          <span>{{ albumGenres }}</span> -
          <span v-if="releaseAlbumYear">{{ releaseAlbumYear }}</span>
        </UIText>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { MobileAlbumHeaderProps } from "~/modules/album/components/MobileAlbumHeader/types";

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
.mobile-album-header {
  --album-color: v-bind(props.album.color);
  padding: 16px;

  background: linear-gradient(
      0deg,
      var(--base-bg) 0%,
      var(--album-color, #121212) 100%
  );

  &__cover {
    margin-inline: auto;
    margin-bottom: 8px;
    box-shadow: 0 1px 10px 0 #000000;
    --size: 160px;

    @include respond-to(xs) {
      --size: 220px;
    }
  }

  &__details {
    text-align: center;
    position: relative;
  }

  &__name {
    font-size: 22px;

    @include respond-to(xs) {
      font-size: 32px;
    }
  }

  &__artist-links {
    --size: 16px;
    margin-inline: auto;
    margin-bottom: 4px;
    --ui-link-color: var(--main-text, white);

    @include respond-to(xs) {
      --size: 18px;
    }
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

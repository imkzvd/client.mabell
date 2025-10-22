<template>
  <header class="album-header">
    <div class="container">
      <div class="album-header__columns">
        <UIImg :url="album.cover" :alt="album.name" class="album-header__cover" />

        <div class="album-header__details">
          <UIHeading :line-clamp="2" class="album-header__name">
            {{ album.name }}
          </UIHeading>

          <UIText appearance="secondary" class="album-header__meta-data">
            <span class="album-header__meta-data-item">{{ album.type.label }}</span>
            <span class="album-header__meta-data-item">{{ albumGenres }}</span>
            <span v-if="releaseAlbumYear">{{ releaseAlbumYear }}</span>
          </UIText>

          <UIText
            appearance="secondary"
            :line-clamp="2"
            :title="album.description"
            class="album-header__description"
          >
            {{ album.description }}
          </UIText>

          <ArtistLinks
            hover-underline
            separator="dot"
            :items="album.artists"
            class="album-header__artist-links"
          />
        </div>
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
.album-header {
  --album-color: v-bind(props.album.color);
  display: flex;
  align-items: center;
  height: 40vh;
  min-height: 320px;
  padding-block: 16px;
  font-size: 14px;
  background: linear-gradient(0deg, var(--base-bg) 0%, var(--album-color, var(--base-bg)) 100%);

  &__columns {
    display: flex;
    align-items: flex-end;
    column-gap: 32px;
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
    padding-bottom: 16px;
  }

  &__name {
    line-height: normal;
    font-size: 32px;
    margin-bottom: 4px;

    @include respond-to(xl) {
      font-size: 40px;
    }
  }

  &__meta-data {
    color: var(--secondary-text, gray);
    margin-bottom: 4px;
  }

  &__meta-data-item {
    &:not(:last-child)::after {
      content: '•';
      margin-inline: 4px;
    }
  }

  &__artist-links {
    --color: var(--tertiary-text, white);
    font-family: var(--bold-font);
  }

  &__description {
    max-width: 800px;
    margin-bottom: 8px;
  }
}
</style>

<template>
  <header class="mobile-playlist-header">
    <div class="container">
      <UIImg
        :url="playlist.cover"
        :alt="playlist.name"
        size="180px"
        class="mobile-playlist-header__cover"
      />

      <div class="mobile-playlist-header__details">
        <UIHeading line-clamp="2" class="mobile-playlist-header__name">
          {{ playlist.name }}
        </UIHeading>

        <UIText appearance="secondary" class="mobile-playlist-header__meta-data">
          <span class="mobile-playlist-header__meta-data-item"> Playlist </span>

          <span class="mobile-playlist-header__meta-data-item">
            {{ playlistGenres }}
          </span>

          <span class="mobile-playlist-header__meta-data-item">
            {{ playlistCreatedDate }}
          </span>
        </UIText>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { MobilePlaylistHeaderProps } from '~/modules/playlist/components/MobilePlaylistHeader/types';

const props = defineProps<MobilePlaylistHeaderProps>();

const playlistGenres = computed<string>(() =>
  props.playlist.genres.map(({ label }) => label).join('/'),
);
const playlistCreatedDate = computed<string>(() => {
  return new Date(props.playlist.createdAt).toLocaleDateString();
});
</script>

<style scoped lang="scss">
.mobile-playlist-header {
  position: relative;
  padding-block: 16px 32px;
  font-size: 12px;
  background: linear-gradient(0deg, transparent 0%, var(--playlist-color, var(--base-bg)) 100%);
  --playlist-color: v-bind(props.playlist.color);

  &:after {
    position: absolute;
    inset: 0;
    background: linear-gradient(0deg, transparent 0%, var(--playlist-color, var(--base-bg)) 100%);
    content: '';
  }

  @include respond-to(xs) {
    font-size: 14px;
  }

  &__cover {
    position: relative;
    z-index: 10;
    margin-inline: auto;
    margin-bottom: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    --size: 160px;

    @include respond-to(xs) {
      --size: 220px;
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
    margin-bottom: 2px;
    line-height: normal;

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
}
</style>

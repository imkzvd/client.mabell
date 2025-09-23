<template>
  <header class="mobile-playlist-header">
    <div class="container">
      <TrackCover
        :url="playlist.cover"
        :alt="playlist.name"
        size="180px"
        class="mobile-playlist-header__cover"
      />

      <div class="mobile-playlist-header__details">
        <UIHeading line-clamp="2" class="mobile-playlist-header__name">
          {{ playlist.name }}
        </UIHeading>

        <UIText appearance="secondary" class="mobile-playlist-header__meta-info">
          <span class="mobile-playlist-header__meta-info-item">
            Playlist
          </span>

          <span class="mobile-playlist-header__meta-info-item">
            {{ playlistGenres }}
          </span>

          <span class="mobile-playlist-header__meta-info-item">
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
  props.playlist.genres.map(({ label }) => label).join("/"),
);
const playlistCreatedDate = computed<string>(() => {
  return new Date(props.playlist.createdAt).toLocaleDateString();
});
</script>

<style scoped lang="scss">
.mobile-playlist-header {
  --playlist-color: v-bind(props.playlist.color);

  display: flex;
  align-items: center;
  background: linear-gradient(
      0deg,
      var(--base-bg) 0%,
      var(--playlist-color, var(--base-bg)) 90%
  );
  padding-block: 16px;

  &__cover {
    margin-inline: auto;
    margin-bottom: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);

    @include respond-to(xs) {
      --size: 240px;
      margin-bottom: 20px;
    }
  }

  &__details {
    text-align: center;
  }

  &__name {
    font-size: 24px;
    line-height: normal;
    margin-bottom: 4px;

    @include respond-to(xs) {
      font-size: 28px;
    }
  }

  &__meta-info {
    font-size: 12px;

    @include respond-to(xs) {
      font-size: 14px;
    }
  }

  &__meta-info-item {
    &:not(:last-child)::after {
      content: '•';
      margin-inline: 4px;
    }
  }
}
</style>

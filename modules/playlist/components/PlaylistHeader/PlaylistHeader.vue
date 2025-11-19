<template>
  <header class="playlist-header">
    <div class="container">
      <div class="playlist-header__columns">
        <UIImg :path="playlist.cover" :alt="playlist.name" class="playlist-header__cover" />

        <div class="playlist-header__details">
          <UIHeading :line-clamp="3" class="playlist-header__name">{{ playlist.name }}</UIHeading>

          <UIText appearance="secondary" class="playlist-header__meta-info">
            <span class="playlist-header__meta-info-item">Playlist</span>

            <span class="playlist-header__meta-info-item">{{ playlistGenres }}</span>

            <span class="playlist-header__meta-info-item">{{ playlistCreatedDate }}</span>
          </UIText>

          <UIText
            :line-clamp="2"
            :title="playlist.description"
            class="playlist-header__description"
          >
            {{ playlist.description }}
          </UIText>

          <UILink to="#" class="playlist-header__user-link">
            {{ playlist.user.name }}
          </UILink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { PlaylistHeaderProps } from '~/modules/playlist/components/PlaylistHeader/types';

const props = defineProps<PlaylistHeaderProps>();

const playlistGenres = computed<string>(() =>
  props.playlist.genres.map(({ label }) => label).join('/'),
);
const playlistCreatedDate = computed<string>(() =>
  new Date(props.playlist.createdAt).toLocaleDateString(),
);
</script>

<style scoped lang="scss">
.playlist-header {
  --playlist-color: v-bind(props.playlist.color);

  position: relative;
  display: flex;
  align-items: center;
  height: 40vh;
  min-height: 320px;
  padding-block: 16px;
  background: linear-gradient(0deg, var(--base-bg) 0%, var(--playlist-color, var(--base-bg)) 100%);

  &__columns {
    position: relative;
    display: flex;
    align-items: flex-end;
    column-gap: 32px;
    z-index: 10;
  }

  &__cover {
    --width: 200px;
    --height: 200px;
    box-shadow: 0 1px 20px 0 var(--black, black);
    flex-shrink: 0;

    @include respond-to(xl) {
      --width: 240px;
      --height: 240px;
    }
  }

  &__details {
    font-size: 14px;
    padding-bottom: 32px;
  }

  &__name {
    line-height: normal;
    font-size: 40px;
    margin-bottom: 4px;
  }

  &__meta-info {
    font-size: 12px;
    margin-bottom: 4px;

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

  &__description {
    max-width: 800px;
    margin-bottom: 8px;
  }

  &__user-link {
    color: var(--tertiary-text, white);
  }
}
</style>

<template>
  <header class="mobile-playlist-header">
    <div class="container">
      <UIImg :path="playlist.cover" :alt="playlist.name" class="mobile-playlist-header__cover" />

      <div class="mobile-playlist-header__details">
        <UIHeading align="center" :line-clamp="2" class="mobile-playlist-header__name">
          {{ playlist.name }}
        </UIHeading>

        <UIText align="center" appearance="secondary" class="mobile-playlist-header__meta-data">
          <span class="mobile-playlist-header__meta-data-item">Playlist</span>

          <span class="mobile-playlist-header__meta-data-item">
            {{ playlistGenres }}
          </span>

          <span class="mobile-playlist-header__meta-data-item">
            {{ playlistCreatedDate }}
          </span>
        </UIText>

        <UILink to="#" class="mobile-playlist-header__user-link">{{ playlist.user.name }}</UILink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { MobilePlaylistHeaderProps } from '~/modules/playlist/components/MobilePlaylistHeader/types';

const props = defineProps<MobilePlaylistHeaderProps>();
const dayjs = useDayjs();

const playlistGenres = computed<string>(() =>
  props.playlist.genres.map(({ label }) => label).join('/'),
);
const playlistCreatedDate = computed<string>(() => {
  return dayjs(props.playlist.createdAt).format('D MMM YYYY');
});
</script>

<style scoped lang="scss">
.mobile-playlist-header {
  --playlist-color: v-bind(props.playlist.color);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-block: var(--section-y-padding, 16px);
  background: linear-gradient(0deg, var(--base-bg) 0%, var(--playlist-color, var(--base-bg)) 90%);
  min-height: 50vh;

  &__cover {
    --width: 160px;
    --height: 160px;
    margin-inline: auto;
    margin-bottom: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);

    @include respond-to(xs) {
      --width: 280px;
      --height: 280px;
      margin-bottom: 20px;
    }
  }

  &__details {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__name {
    font-size: 20px;
    line-height: 1.2;

    @include respond-to(xs) {
      font-size: 28px;
    }
  }

  &__meta-data {
    font-size: 12px;
    margin-bottom: 4px;

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

  &__user-link {
    font-size: 14px;
    --ui-link-color: var(--main-text, white);

    @include respond-to(xs) {
      font-size: 16px;
    }
  }
}
</style>

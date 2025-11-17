<template>
  <div class="playlist-page">
    <template v-if="fetchedPlaylist">
      <MobilePlaylistHeader v-if="isMobile" :playlist="fetchedPlaylist" />
      <PlaylistHeader v-else :playlist="fetchedPlaylist" />

      <UISection content-container>
        <MobileTrackList
          v-if="isMobileOrTablet"
          :items="fetchedPlaylistTracks.map(({ track }) => track)"
          :is-playing="$audioPlayer?.isPlaying.value"
          :current-item-id="$audioPlayer?.currentTrackId.value"
          show-cover
          @play-item="onItemPlay"
          @pause-item="onItemPause"
        />
        <PlaylistTrackList
          v-else
          :items="fetchedPlaylistTracks"
          :is-playing="$audioPlayer?.isPlaying.value"
          :current-item-id="$audioPlayer?.currentTrackId.value"
          @play-item="onItemPlay"
          @pause-item="onItemPause"
          @add-item="onItemAdd"
        />
      </UISection>
    </template>

    <UISection heading="More To Hear" heading-container :content-container="!isMobileOrTablet">
      <PlaylistCardLinksSlider
        v-if="isMobileOrTablet"
        :items="fetchedSimilarPlaylists"
        class="playlist-page__slider"
      />
      <PlaylistCardLinksList v-else :items="fetchedSimilarPlaylists" max-rows="1" />
    </UISection>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from '#app';
import { playlistApiService } from '~/modules/playlist/services/playlist.api.service';
import type { PlaylistRO, PlaylistTrackRO } from '~/api/api.module';
import { albumApiService } from '~/modules/album/services/album.api.service';
import { popularApiService } from '~/modules/popular/services/popular.api.service';
import type { ApiError } from '~/modules/shared/errors/api-error';

const route = useRoute();
const { $audioPlayer } = useNuxtApp();
const { isMobile, isMobileOrTablet } = useDevice();
const [isFetching, toggleFetching] = useToggle(true);

const playlistIdRouteParam = route.params.id as string;

const fetchedPlaylistTracks = ref<PlaylistTrackRO[]>([]);
const fetchedSimilarPlaylists = ref<PlaylistRO[]>([]);

const { data: fetchedPlaylist, error } = await useAsyncData(
  `playlist:${playlistIdRouteParam}`,
  () => {
    return playlistApiService.getPlaylistById(playlistIdRouteParam);
  },
);

if (error.value) {
  showError({
    statusCode: error.value.statusCode,
    statusMessage: error.value.message,
  });
}

if (fetchedPlaylist.value) {
  useHead({
    title: fetchedPlaylist.value.name || 'Mabell',
    meta: [{ name: 'theme-color', content: fetchedPlaylist.value.color }],
  });
}

onMounted(async () => {
  if (fetchedPlaylist.value) {
    await fetchPlaylistData(playlistIdRouteParam, fetchedPlaylist.value.genres);
  }

  toggleFetching(false);
});

async function fetchPlaylistData(id: string, genres: PlaylistRO['genres']) {
  try {
    const preparedGenreValues = genres.map(({ value }) => value);
    const [playlistTracks, similarPlaylists] = await Promise.all([
      playlistApiService.getPlaylistTracksById(id),
      popularApiService.getPlaylists(preparedGenreValues),
    ]);

    fetchedPlaylistTracks.value = playlistTracks.items;
    fetchedSimilarPlaylists.value = similarPlaylists.items;
  } catch (e) {
    const { message } = e as ApiError;

    console.error(message);
  }
}

function onItemPlay(item: PlaylistTrackRO, index: number) {
  $audioPlayer?.addTracks(fetchedPlaylistTracks.value.map(({ track }) => track) || [], index, {
    playAfterAdded: true,
  });
}

function onItemPause(item: PlaylistTrackRO, index: number) {
  $audioPlayer?.pause();
}

function onItemAdd(item: PlaylistTrackRO, index: number) {
  console.log('track menu open');
}
</script>

<style scoped lang="scss">
@use '~/assets/scss/container';

.playlist-page {
  &__slider {
    @extend .container;
  }
}
</style>

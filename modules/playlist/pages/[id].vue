<template>
  <div class="playlist-page">
    <template v-if="fetchedData?.playlist">
      <MobilePlaylistHeader v-if="isMobile" :playlist="fetchedData.playlist" />
      <PlaylistHeader v-else :playlist="fetchedData.playlist" />

      <section class="section">
        <div class="container">
          <MobileTrackList
            v-if="isMobileOrTablet"
            :items="fetchedData?.tracks.items.map(({ track }) => track)"
            @play-item="onItemPlay"
            @pause-item="onItemPause"
          />
          <PlaylistTrackList
            v-else
            :items="fetchedData.tracks.items"
            :is-playing="player?.isPlaying"
            :current-item-id="player?.currentTrack?.id"
            @play-item="onItemPlay"
            @pause-item="onItemPause"
            @add-item="onItemAdd"
          />
        </div>
      </section>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from '#app';
import { playlistApiService } from '~/modules/playlist/services/playlist.api.service';
import { PlayerInjectKey } from '~/modules/player/constants';
import type { PlaylistTrackRO } from '~/api/api.module';

const player = inject(PlayerInjectKey);
const route = useRoute();
const { isMobile, isMobileOrTablet } = useDevice();

const routePlaylistId = route.params.id as string;

const { data: fetchedData, error } = await useAsyncData(`playlist:${routePlaylistId}`, async () => {
  const [playlist, tracks] = await Promise.all([
    playlistApiService.getPlaylistById(routePlaylistId),
    playlistApiService.getPlaylistTracksById(routePlaylistId),
  ]);

  return { playlist, tracks };
});

if (error.value) {
  showError({
    statusCode: error.value.statusCode,
    statusMessage: error.value.message,
  });
}

useHead({
  title: fetchedData.value?.playlist.name || 'Playlist',
  meta: [
    {
      name: 'theme-color',
      content: fetchedData.value?.playlist.color || '#121212',
    },
  ],
});

function onItemPlay(item: PlaylistTrackRO, index: number) {
  player.value?.addTracks(fetchedData.value?.tracks.items.map((i) => i.track) || [], index);
  player.value?.play();
}

function onItemPause(item: PlaylistTrackRO, index: number) {
  player.value?.pause();
}

function onItemAdd(item: PlaylistTrackRO, index: number) {
  alert(`Trac ${item.track.name} - added`);
}
</script>

<style scoped lang="scss"></style>

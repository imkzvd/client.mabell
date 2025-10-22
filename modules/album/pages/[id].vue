<template>
  <div class="album-page">
    <template v-if="fetchedData?.album">
      <MobileAlbumHeader v-if="isMobile" :album="fetchedData?.album" />
      <AlbumHeader v-else :album="fetchedData?.album" />
    </template>

    <section class="section">
      <div class="container">
        <div v-if="fetchedData?.tracks.total" class="album-page__top-tracks">
          <MobileAlbumTrackList
            v-if="isMobile"
            :items="fetchedData?.tracks.items"
            :aria-label="`${fetchedData?.album.name} track`"
            @play-item="onItemPlay"
            @pause-item="onItemPause"
          />
          <AlbumTrackList
            v-else
            :items="fetchedData?.tracks.items"
            @play-item="onItemPlay"
            @pause-item="onItemPause"
            @add-item="onItemAdd"
          />
        </div>
      </div>
    </section>

    <div class="album-page__footer">
      <div class="container">
        <UIText appearance="secondary"> {{ fetchedData?.tracks.total }} tracks </UIText>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AlbumTrackList from '~/modules/track/components/AlbumTrackList/AlbumTrackList.vue';
import { albumApiService } from '~/modules/album/services/album.api.service';
import { PlayerInjectKey } from '~/modules/player/constants';
import type { TrackRO } from '~/api/api.module';

const player = inject(PlayerInjectKey);

const route = useRoute();
const { isMobile } = useDevice();

const routeAlbumId = route.params.id as string;

const { data: fetchedData, error } = await useAsyncData(`album:${routeAlbumId}`, async () => {
  const [album, tracks] = await Promise.all([
    albumApiService.getAlbumById(routeAlbumId),
    albumApiService.getAlbumTracksById(routeAlbumId),
  ]);

  return { album, tracks };
});

if (error.value) {
  showError({
    statusCode: error.value.statusCode,
    statusMessage: error.value.message,
  });
}

useHead({
  meta: [
    {
      name: 'theme-color',
      content: fetchedData.value?.album.color || '#121212',
    },
  ],
});

function onItemPlay(item: TrackRO, index: number) {
  player.value?.addTracks(fetchedData.value?.tracks.items || [], index);
  player.value?.play();
}

function onItemPause(item: TrackRO, index: number) {
  alert(`Track ${item.name} - paused!`);
}

function onItemAdd(item: TrackRO, index: number) {
  alert(`Trac ${item.name} - added`);
}
</script>

<style lang="scss" scoped>
.album-page {
}
</style>

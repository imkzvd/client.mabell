<template>
  <div class="album-page">
    <template v-if="fetchedAlbum">
      <MobileAlbumHeader v-if="isMobile" :album="fetchedAlbum" />
      <AlbumHeader v-else :album="fetchedAlbum" />
    </template>

    <UISection class="section">
      <div class="container">
        <div v-if="fetchedAlbumTracks?.total" class="album-page__top-tracks">
          <MobileTrackList
            v-if="isMobile"
            :items="fetchedAlbumTracks?.items"
            :is-playing="$audioPlayer?.isPlaying.value"
            :current-item-id="$audioPlayer?.currentTrackId.value"
            :aria-label="`${fetchedAlbum?.name} track`"
            @play-item="onItemPlay"
            @pause-item="onItemPause"
          />
          <AlbumTrackList
            v-else
            :items="fetchedAlbumTracks?.items"
            :is-playing="$audioPlayer?.isPlaying.value"
            :current-item-id="$audioPlayer?.currentTrackId.value"
            @play-item="onItemPlay"
            @pause-item="onItemPause"
          />
        </div>
      </div>
    </UISection>

    <UISection content-container>
      <UIText appearance="secondary" size="14px"
        >© {{ releaseYear }} {{ mainAlbumArtistName }}. All copyrights, performance rights, and
        related rights are owned and controlled by the artist.
      </UIText>
    </UISection>

    <UISection
      v-if="fetchedSimilarAlbums.length"
      heading="You Might Also Like"
      heading-container
      :content-container="!isMobileOrTablet"
    >
      <AlbumCardLinksSlider
        v-if="isMobileOrTablet"
        :items="fetchedSimilarAlbums"
        show-artists
        class="album-page__slider"
      />
      <AlbumCardLinksList
        v-else
        :items="fetchedSimilarAlbums"
        max-rows="1"
        show-artists
        class="album-page__album-card-links-list"
      />
    </UISection>
  </div>
</template>

<script setup lang="ts">
import AlbumTrackList from '~/modules/track/components/AlbumTrackList/AlbumTrackList.vue';
import { albumApiService } from '~/modules/album/services/album.api.service';
import type { AlbumRO, TrackRO, TracksRO } from '~/api/api.module';
import type { ApiError } from '~/modules/shared/errors/api-error';
import { popularApiService } from '~/modules/popular/services/popular.api.service';

const route = useRoute();
const { $audioPlayer } = useNuxtApp();
const { isMobile, isMobileOrTablet } = useDevice();
const [isFetching, toggleFetching] = useToggle(true);

const albumIdRouteParam = route.params.id as string;

const { data: fetchedAlbum, error } = await useAsyncData(`album:${albumIdRouteParam}`, () =>
  albumApiService.getAlbumById(albumIdRouteParam),
);

if (error.value) {
  showError({
    statusCode: error.value.statusCode,
    statusMessage: error.value.message,
  });
}

const fetchedAlbumTracks = ref<TracksRO | null>(null);
const fetchedSimilarAlbums = ref<AlbumRO[]>([]);
const mainAlbumArtistName = computed<string | null>(() => {
  if (!fetchedAlbum.value) return null;

  const [mainArtist] = fetchedAlbum.value.artists;

  return mainArtist.name;
});
const releaseYear = computed<number | null>(() => {
  if (!fetchedAlbum.value?.releaseAt) return null;

  return new Date(fetchedAlbum.value.releaseAt).getFullYear();
});

if (fetchedAlbum.value) {
  useHead({
    meta: [
      {
        name: 'theme-color',
        content: fetchedAlbum.value.color,
      },
    ],
    title: `${fetchedAlbum.value.name} | ${fetchedAlbum.value.artists.map(({ name }) => name).join(', ')} | Mabell`,
  });
}

onMounted(async () => {
  await fetchAlbumData(albumIdRouteParam);
  toggleFetching(false);
});

async function fetchAlbumData(id: string) {
  try {
    fetchedAlbumTracks.value = await albumApiService.getAlbumTracksById(id);

    if (fetchedAlbum.value) {
      const albumGenres = fetchedAlbum.value.genres.map(({ value }) => value);
      const { items } = await popularApiService.getAlbums(albumGenres, { limit: 10 });
      fetchedSimilarAlbums.value = items;
    }
  } catch (e) {
    const { message } = e as ApiError;

    console.error(message);
  }
}

function onItemPlay(item: TrackRO, index: number) {
  $audioPlayer?.addTracks(fetchedAlbumTracks.value?.items || [], index, { playAfterAdded: true });
}

function onItemPause(item: TrackRO, index: number) {
  $audioPlayer?.pause();
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/container';

.album-page {
  &__slider {
    @extend .container;
  }

  &__album-card-links-list {
    @include respond-to(lg) {
      --card-link-image-width: 140px;
    }
  }
}
</style>

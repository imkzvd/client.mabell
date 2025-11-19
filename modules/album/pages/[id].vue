<template>
  <div class="album-page">
    <template v-if="fetchedAlbum">
      <MobileAlbumHeader v-if="isMobile" :album="fetchedAlbum" />
      <AlbumHeader v-else :album="fetchedAlbum" />
    </template>

    <UISection heading="Top Tracks" hidden-heading content-container>
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
    </UISection>

    <UISection heading="Album Copyright" hidden-heading content-container>
      <UIText appearance="secondary" size="12px">
        © {{ releaseAlbumYear }} {{ mainAlbumArtist?.name }}. All copyrights, performance rights,
        and related rights are owned and controlled by the artist.
      </UIText>
    </UISection>

    <UISection
      :heading="`More by ${mainAlbumArtist?.name}`"
      heading-container
      :content-container="!isMobileOrTablet"
    >
      <SkeletonCardLinkListLoader v-if="isFetching" />
      <AlbumCardLinksSlider
        v-else-if="isMobileOrTablet"
        :items="fetchedMainArtistAlbums"
        show-meta
        class="album-page__slider"
      />
      <AlbumCardLinksList v-else :items="fetchedMainArtistAlbums" max-rows="1" show-meta />
    </UISection>

    <UISection
      heading="You Might Also Like"
      heading-container
      :content-container="!isMobileOrTablet"
    >
      <SkeletonCardLinkListLoader v-if="isFetching" />
      <AlbumCardLinksSlider
        v-else-if="isMobileOrTablet"
        :items="fetchedSimilarAlbums"
        show-artists
        class="album-page__slider"
      />
      <AlbumCardLinksList v-else :items="fetchedSimilarAlbums" max-rows="1" show-artists />
    </UISection>
  </div>
</template>

<script setup lang="ts">
import AlbumTrackList from '~/modules/track/components/AlbumTrackList/AlbumTrackList.vue';
import { albumApiService } from '~/modules/album/services/album.api.service';
import { popularApiService } from '~/modules/popular/services/popular.api.service';
import { artistApiService } from '~/modules/artist/services/artist.api.service';
import type {
  AlbumRO,
  SimplifiedAlbumRO,
  SimplifiedArtistRO,
  TrackRO,
  TracksRO,
} from '~/api/api.module';
import type { ApiError } from '~/modules/shared/errors/api-error';

const route = useRoute();
const { $audioPlayer } = useNuxtApp();
const { isMobile, isMobileOrTablet } = useDevice();
const [isFetching, toggleFetching] = useToggle(true);

const albumIdRouteParam = route.params.id as string;

const { data: fetchedAlbum, error } = await useAsyncData<AlbumRO>(
  `album:${albumIdRouteParam}`,
  () => albumApiService.getAlbumById(albumIdRouteParam),
);

if (error.value) {
  showError({
    statusCode: error.value.statusCode,
    statusMessage: error.value.message,
  });
}

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

const fetchedAlbumTracks = ref<TracksRO | null>(null);
const fetchedMainArtistAlbums = ref<SimplifiedAlbumRO[]>([]);
const fetchedSimilarAlbums = ref<AlbumRO[]>([]);

const mainAlbumArtist = computed<SimplifiedArtistRO | null>(() => {
  if (!fetchedAlbum.value) return null;

  const [artist] = fetchedAlbum.value.artists;

  return artist;
});
const releaseAlbumYear = computed<number | null>(() => {
  if (!fetchedAlbum.value?.releaseAt) return null;

  return new Date(fetchedAlbum.value.releaseAt).getFullYear();
});

onMounted(async () => {
  if (fetchedAlbum.value) {
    await fetchAlbumTracks(fetchedAlbum.value);
    await fetchSimilarAlbums(fetchedAlbum.value);
    await fetchArtistAlbums(fetchedAlbum.value);
  }

  toggleFetching(false);
});

function onItemPlay(_: TrackRO, index: number) {
  $audioPlayer?.addTracks(fetchedAlbumTracks.value?.items || [], index, { playAfterAdded: true });
}

function onItemPause() {
  $audioPlayer?.pause();
}

async function fetchAlbumTracks({ id }: AlbumRO) {
  try {
    fetchedAlbumTracks.value = await albumApiService.getAlbumTracksById(id);
  } catch (e) {
    const { message } = e as ApiError;

    console.error(message);
  }
}

async function fetchArtistAlbums({ id: albumId, artists }: AlbumRO) {
  try {
    const [mainArtist] = artists;
    const { items } = await artistApiService.getAlbumsById(mainArtist.id, { limit: 10 });

    // TODO: delete filter
    fetchedMainArtistAlbums.value = items.filter(({ id }) => id !== albumId);
  } catch (e) {
    const { message } = e as ApiError;

    console.error(message);
  }
}

// TODO: replace with /albums/:id/similar
async function fetchSimilarAlbums(album: AlbumRO) {
  try {
    const genres = album.genres.map(({ value }) => value);

    const { items } = await popularApiService.getAlbums(genres, { limit: 10 });

    // TODO: delete filter
    fetchedSimilarAlbums.value = items.filter(({ id }) => id !== album.id);
  } catch (e) {
    const { message } = e as ApiError;

    console.error(message);
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/container';

.album-page {
  @include respond-to(lg) {
    --card-link-image-width: 140px;
  }

  &__slider {
    @extend .container;
  }
}
</style>

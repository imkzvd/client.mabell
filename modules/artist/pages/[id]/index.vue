<template>
  <div class="artist-page">
    <template v-if="fetchedArtist">
      <MobileArtistHeader v-if="isMobile" :artist="fetchedArtist" />
      <ArtistHeader v-else :artist="fetchedArtist" />

      <UISection content-container>
        <div class="artist-page__featured-content">
          <UISection heading="Top Tracks" class="artist-page__top-tracks">
            <SkeletonTrackListLoader v-if="isFetching" />
            <MobileTrackList
              v-else-if="isMobileOrTablet"
              :items="fetchedArtistTopTracks"
              :aria-label="`${fetchedArtist.name} top tracks`"
              @play-item="onItemPlay"
              @pause-item="onItemPause"
            />
            <CompactTrackList
              v-else
              :items="fetchedArtistTopTracks"
              :aria-label="`${fetchedArtist.name} top tracks`"
              @play-item="onItemPlay"
              @pause-item="onItemPause"
              @add-item="onItemAdd"
            />

            <UILink
              v-if="!isFetching && fetchedArtist"
              hover-underline
              :to="{ name: 'artist-id', params: { id: fetchedArtist.id } }"
              class="artist-page__see-more-tracks-link"
            >
              See More
            </UILink>
          </UISection>

          <UISection v-if="isDesktop" heading="Latest Release">
            <SkeletonCardLinkLoader
              v-if="isFetching"
              text-rows="2"
              :direction="isMobileOrTablet ? 'row' : 'column'"
            />
            <LatestAlbumRelease
              v-else-if="fetchedArtistLatestAlbum"
              :album="fetchedArtistLatestAlbum"
            />
          </UISection>
        </div>
      </UISection>

      <UISection heading="Albums" :content-container="!isMobileOrTablet" heading-container>
        <SkeletonCardLinkListLoader
          v-if="isFetching"
          :mode="isMobileOrTablet ? 'slider' : 'list'"
          text-rows="2"
          :class="isMobileOrTablet ? 'artist-page__slider' : ''"
        />
        <AlbumCardLinksSlider
          v-else-if="isMobileOrTablet"
          :items="fetchedArtistAlbums"
          class="artist-page__slider"
        />
        <AlbumCardLinksList v-else :items="fetchedArtistAlbums" show-meta max-rows="1" />
      </UISection>

      <UISection heading="Similar Artists" :content-container="!isMobileOrTablet" heading-container>
        <SkeletonCardLinkListLoader
          v-if="isFetching"
          mode="slider"
          text-align="center"
          image-rounded
          :class="isMobileOrTablet ? 'artist-page__slider' : ''"
        />
        <ArtistCardLinksSlider
          v-else-if="isMobileOrTablet"
          :items="fetchedSimilarArtists"
          class="artist-page__slider"
        />
        <ArtistCardLinksList v-else :items="fetchedSimilarArtists" max-rows="1" />
      </UISection>
    </template>
  </div>
</template>

<script setup lang="ts">
import { artistApiService } from '~/modules/artist/services/artist.api.service';
import { PlayerInjectKey } from '~/modules/player/constants';
import type { SimplifiedAlbumRO, SimplifiedArtistRO, TrackRO } from '~/api/api.module';
import type { ApiError } from '~/modules/shared/errors/api-error';

const player = inject(PlayerInjectKey);

const route = useRoute();
const { isMobile, isDesktop, isMobileOrTablet } = useDevice();
const [isFetching, toggleFetching] = useToggle(true);
const artistIdRouteParam = route.params.id as string;
const fetchedArtistTopTracks = ref<TrackRO[]>([]);
const fetchedArtistLatestAlbum = ref<SimplifiedAlbumRO | null>(null);
const fetchedArtistAlbums = ref<SimplifiedAlbumRO[]>([]);
const fetchedSimilarArtists = ref<SimplifiedArtistRO[]>([]);

const { data: fetchedArtist, error } = await useAsyncData(`artist:${artistIdRouteParam}`, () =>
  artistApiService.getArtistById(artistIdRouteParam),
);

if (error.value) {
  showError({
    statusCode: error.value.statusCode,
    statusMessage: error.value.message,
  });
}

useHead({
  title: `${fetchedArtist.value?.name} | Mabell` || 'Mabell Music',
});

onMounted(async () => {
  await fetchArtistData(artistIdRouteParam);
  toggleFetching(false);
});

async function fetchArtistData(artistId: string) {
  try {
    const [topTracks, latestAlbum, albums, similarArtists] = await Promise.all([
      artistApiService.getTopTracksById(artistId, { limit: 5 }),
      artistApiService.getLatestAlbumById(artistId),
      artistApiService.getAlbumsById(artistId, { limit: 5 }),
      artistApiService.getSimilarArtistsById(artistId),
    ]);

    fetchedArtistTopTracks.value = topTracks.items;
    fetchedArtistLatestAlbum.value = latestAlbum;
    fetchedArtistAlbums.value = albums.items;
    fetchedSimilarArtists.value = similarArtists;
  } catch (e) {
    const { message } = e as ApiError;

    console.error(message);
  }
}

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
@use '~/assets/scss/container';

.artist-page {
  &__slider {
    @extend .container;
  }

  &__see-more-tracks-link {
    font-size: 12px;
    font-family: var(--bold-font);

    @include respond-to(xs) {
      font-size: 14px;
    }
  }

  &__featured-content {
    display: flex;
    flex-direction: column;
    column-gap: 48px;

    @include respond-to(xl) {
      flex-direction: row;
    }
  }

  &__top-tracks {
    max-width: 800px;
    flex-grow: 1;

    @include respond-to(lg) {
      --section-bottom-margin: 0;
    }
  }
}
</style>

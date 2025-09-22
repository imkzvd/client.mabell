<template>
  <div class="artist-page">
    <template v-if="fetchedData?.artist">
      <MobileArtistHeader v-if="isMobile" :artist="fetchedData.artist" />
      <ArtistHeader v-else :artist="fetchedData.artist" />
    </template>

    <section class="artist-page__section">
      <div class="container">
        <div class="artist-page__featured-content">
          <section
            v-if="fetchedData?.tracks.items.length"
            class="section artist-page__top-tracks"
          >
            <UIHeading level="2">Top Tracks</UIHeading>

            <MobileTrackList
              v-if="isMobileOrTablet"
              :items="fetchedData?.tracks.items"
              :aria-label="`${fetchedData.artist.name} top tracks`"
              @play-item="onItemPlay"
              @pause-item="onItemPause"
            />
            <CompactTrackList
              v-else
              :items="fetchedData?.tracks.items"
              :aria-label="`${fetchedData.artist.name} top tracks`"
              @play-item="onItemPlay"
              @pause-item="onItemPause"
              @add-item="onItemAdd"
            />

            <UILink
              v-if="fetchedData?.artist"
              hover-underline
              :to="{ name: 'artist-id', params: { id: fetchedData?.artist.id } }"
              class="artist-page__see-more-tracks-link"
            >
              See More
            </UILink>
          </section>

          <section v-if="fetchedData?.latestAlbum" class="section artist-page__latest-release-section">
            <UIHeading level="2">Latest Release</UIHeading>

            <LatestAlbumRelease :album="fetchedData?.latestAlbum" />
          </section>
        </div>
      </div>
    </section>

    <section v-if="fetchedData?.albums.total" class="section artist-page__section">
      <div class="container">
        <UIHeading level="2" class="section__heading">Albums</UIHeading>
      </div>

      <AlbumSlider :items="fetchedData?.albums.items" class="artist-page__album-slider" />
    </section>

    <section v-if="fetchedData?.similarArtists.length" class="section">
      <div class="container">
        <UIHeading level="2" class="section__heading">Similar Artists</UIHeading>
      </div>

      <SimilarArtistSlider :items="fetchedData?.similarArtists" class="artist-page__similar-artists" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { artistApiService } from '~/modules/artist/services/artist.api.service';
import { PlayerInjectKey } from '~/modules/player/constants';
import type { TrackRO } from '~/api/api.module';

const player = inject(PlayerInjectKey);

const route = useRoute();
const { isMobile, isMobileOrTablet } = useDevice();
const artistIdRouteParam = route.params.id as string;

const { data: fetchedData, error } = await useAsyncData(
  `artist:${artistIdRouteParam}`,
  async () => {
    const [
      artist,
      tracks,
      latestAlbum,
      albums,
      similarArtists,
    ] = await Promise.all([
      artistApiService.getArtistById(artistIdRouteParam),
      artistApiService.getTopTracksById(artistIdRouteParam, { limit: 5 }),
      artistApiService.getLatestAlbumById(artistIdRouteParam),
      artistApiService.getAlbumsById(artistIdRouteParam, { limit: 5 }),
      artistApiService.getSimilarArtistsById(artistIdRouteParam),
    ]);

    return {
      artist,
      tracks,
      latestAlbum,
      albums,
      similarArtists,
    };
  },
);

if (error.value) {
  showError({
    statusCode: error.value.statusCode,
    statusMessage: error.value.message,
  });
}

useHead({
  title: fetchedData.value?.artist.name || 'Artist',
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
.artist-page {
  &__album-slider {
    padding-inline: 8px;

    @include respond-to(xs) {
      padding-inline: 16px;
    }

    @include respond-to(md) {
      padding-inline: 32px;
    }
  }

  &__similar-artists {
    padding-inline: 8px;

    @include respond-to(xs) {
      padding-inline: 16px;
    }

    @include respond-to(md) {
      padding-inline: 32px;
    }
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
    column-gap: 32px;
    margin-bottom: 24px;

    @include respond-to(xl) {
      flex-direction: row;
    }
  }

  &__top-tracks {
    max-width: 800px;
    flex-grow: 1;
  }
}
</style>

<template>
  <div class="search-page">
    <div class="container">
      <UIHeading class="search-page__heading">Search</UIHeading>
    </div>

    <UISection>
      <GlobalSearch @search-start="onGlobalSearchStart" @search-end="onGlobalSearchEnd" />
    </UISection>

    <div v-show="!isGlobalSearching">
      <UISection :with-container="!isMobileOrTablet" heading="New Releases">
        <template v-if="isMobileOrTablet">
          <SkeletonCardSliderLoader
            v-if="isDataFetching"
            text-rows="2"
            class="search-page__slider"
          />
          <AlbumCardLinksSlider
            v-else-if="popularAlbumsResponse?.items.length"
            :items="popularAlbumsResponse.items"
            class="search-page__slider"
          />
        </template>
        <template v-else>
          <SkeletonCardListLoader v-if="isDataFetching" text-rows="2" />
          <AlbumCardLinks
            v-else-if="popularAlbumsResponse?.items.length"
            max-rows="1"
            :items="popularAlbumsResponse.items"
          />
        </template>
      </UISection>

      <UISection :with-container="!isMobileOrTablet" heading="Popular Artists">
        <template v-if="isMobileOrTablet">
          <SkeletonCardSliderLoader
            v-if="isDataFetching"
            align="center"
            is-rounded-image
            class="search-page__slider"
          />
          <ArtistCardLinksSlider
            v-else-if="popularArtistsResponse?.items.length"
            :items="popularArtistsResponse.items"
            class="search-page__slider"
          />
        </template>
        <template v-else>
          <SkeletonCardListLoader v-if="isDataFetching" align="center" is-rounded-image />
          <ArtistCardLinks
            v-else-if="popularArtistsResponse?.items.length"
            :items="popularArtistsResponse.items"
            max-rows="1"
          />
        </template>
      </UISection>

      <UISection :with-container="!isMobileOrTablet" heading="Discover picks for you">
        <template v-if="isMobileOrTablet">
          <SkeletonCardSliderLoader v-if="isDataFetching" class="search-page__slider" />
          <PlaylistCardLinksSlider
            v-else-if="popularPlaylistsResponse?.items.length"
            :items="popularPlaylistsResponse.items"
            class="search-page__slider"
          />
        </template>
        <template v-else>
          <SkeletonCardListLoader v-if="isDataFetching" />
          <PlaylistCardLinks
            v-else-if="popularPlaylistsResponse?.items.length"
            :items="popularPlaylistsResponse.items"
            max-rows="1"
          />
        </template>
      </UISection>
    </div>
  </div>
</template>

<script setup lang="ts">
import { popularApiService } from '~/modules/popular/services/popular.api.service';
import type { AlbumsRO, ArtistsRO, PlaylistsRO } from '~/api/api.module';
import type { ApiError } from '~/modules/shared/errors/api-error';

const { isMobileOrTablet } = useDevice();
const [isDataFetching, toggleDataFetching] = useToggle(true);
const [isGlobalSearching, toggleGlobalSearching] = useToggle();

const popularAlbumsResponse = ref<AlbumsRO | null>(null);
const popularArtistsResponse = ref<ArtistsRO | null>(null);
const popularPlaylistsResponse = ref<PlaylistsRO | null>(null);

onMounted(async () => {
  try {
    const [albums, artists, playlists] = await Promise.all([
      popularApiService.getAlbums(['HH'], { offset: 0, limit: 15 }), // TODO: random data
      popularApiService.getArtists(['HH'], { offset: 5, limit: 15 }), //
      popularApiService.getPlaylists(['HH'], { offset: 5, limit: 15 }), //
    ]);

    popularAlbumsResponse.value = albums;
    popularArtistsResponse.value = artists;
    popularPlaylistsResponse.value = playlists;
  } catch (e) {
    const { message } = e as ApiError;

    console.error(message);
  } finally {
    toggleDataFetching();
  }
});

function onGlobalSearchStart() {
  toggleGlobalSearching(true);
}

function onGlobalSearchEnd() {
  toggleGlobalSearching(false);
}
</script>

<style scoped lang="scss">
@use '~/assets/scss/container';

.search-page {
  padding-block: 32px;

  &__heading {
    margin-bottom: 16px;
    line-height: 1;
  }

  &__slider {
    @extend .container;
  }
}
</style>

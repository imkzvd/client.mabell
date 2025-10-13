<template>
  <div class="search-page">
    <div class="container">
      <UIHeading class="search-page__heading">Search</UIHeading>
    </div>

    <GlobalSearch>
      <UISection heading="New Releases">
        <SkeletonSlider v-if="isDataFetching" :total="4" class="search-page__slider" />
        <AlbumSlider
          v-else
          :items="fetchedPopularAlbumsResponse?.items"
          class="search-page__slider"
        />
      </UISection>

      <UISection heading="Popular Artists">
        <SkeletonSlider v-if="isDataFetching" :total="5" align="center" is-rounded class="search-page__slider" />
        <ArtistSlider v-else :items="fetchedPopularArtistsResponse?.items" class="search-page__slider" />
      </UISection>

      <UISection heading="Discover picks for you">
        <SkeletonSlider v-if="isDataFetching" :total="6" class="search-page__slider" />
        <PlaylistSlider v-else :items="fetchedPopularPlaylistsResponse?.items" class="search-page__slider" />
      </UISection>
    </GlobalSearch>
  </div>
</template>

<script setup lang="ts">
import { popularApiService } from '~/modules/popular/services/popular.api.service';
import type { AlbumsRO, ArtistsRO, PlaylistsRO } from '~/api/api.module';
import type { ApiError } from '~/modules/shared/errors/api-error';

const [isDataFetching, toggleDataFetching] = useToggle(true);

const fetchedPopularAlbumsResponse = ref<AlbumsRO | null>(null);
const fetchedPopularArtistsResponse = ref<ArtistsRO | null>(null);
const fetchedPopularPlaylistsResponse = ref<PlaylistsRO | null>(null);

onMounted(async () => {
  try {
    fetchedPopularAlbumsResponse.value = await popularApiService.getAlbums(['HH'], { offset: 0, limit: 15 });
    fetchedPopularArtistsResponse.value = await popularApiService.getArtists(['HH'], { offset: 5, limit: 15 });
    fetchedPopularPlaylistsResponse.value = await popularApiService.getPlaylists(['HH'], { offset: 5, limit: 15 });
  } catch (e) {
    const { message } = e as ApiError;

    console.error(message);
  } finally {
    toggleDataFetching();
  }
});
</script>

<style scoped lang="scss">
@use '~/assets/scss/container';

.search-page {
  padding-block: 32px;

  &__heading {
    margin-bottom: 32px;
    line-height: 1;
  }


  &__slider {
    @extend .container;
  }
}
</style>
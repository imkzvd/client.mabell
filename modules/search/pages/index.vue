<template>
  <div class="search-page">
    <div class="container">
      <UIHeading class="search-page__heading">Search</UIHeading>
    </div>

    <UISection>
      <GlobalSearch @search-start="onGlobalSearchStart" @search-end="onGlobalSearchEnd" />
    </UISection>

    <div v-show="!isGlobalSearching">
      <UISection heading="New Releases" heading-container :content-container="!isMobileOrTablet">
        <SkeletonCardLinkListLoader
          v-if="isDataFetching"
          text-rows="2"
          :mode="isMobileOrTablet ? 'slider' : 'list'"
          :class="isMobileOrTablet ? 'search-page__slider' : ''"
        />
        <AlbumCardLinksSlider
          v-else-if="isMobileOrTablet"
          :items="fetchedNewReleases"
          class="search-page__slider"
        />
        <AlbumCardLinksList v-else :items="fetchedNewReleases" max-rows="1" show-artists />
      </UISection>

      <UISection heading="Hot Artists" heading-container :content-container="!isMobileOrTablet">
        <SkeletonCardLinkListLoader
          v-if="isDataFetching"
          image-rounded
          text-align="center"
          :mode="isMobileOrTablet ? 'slider' : 'list'"
          :class="isMobileOrTablet ? 'search-page__slider' : ''"
        />
        <ArtistCardLinksSlider
          v-else-if="isMobileOrTablet"
          :items="fetchedHotArtists"
          class="search-page__slider"
        />
        <ArtistCardLinksList v-else :items="fetchedHotArtists" max-rows="1" />
      </UISection>

      <UISection
        heading="Discover picks for you"
        heading-container
        :content-container="!isMobileOrTablet"
      >
        <SkeletonCardLinkListLoader
          v-if="isDataFetching"
          :mode="isMobileOrTablet ? 'slider' : 'list'"
          :class="isMobileOrTablet ? 'search-page__slider' : ''"
        />
        <PlaylistCardLinksSlider
          v-else-if="isMobileOrTablet"
          :items="fetchedPopularPlaylists"
          class="search-page__slider"
        />
        <PlaylistCardLinksList v-else :items="fetchedPopularPlaylists" max-rows="1" />
      </UISection>
    </div>
  </div>
</template>

<script setup lang="ts">
import { albumApiService } from '~/modules/album/services/album.api.service';
import { hotArtistIds, newReleasesIds, popularPlaylistIds } from '~/modules/search/constants';
import { artistApiService } from '~/modules/artist/services/artist.api.service';
import { playlistApiService } from '~/modules/playlist/services/playlist.api.service';
import type { AlbumRO, ArtistRO, PlaylistRO } from '~/api/api.module';
import type { ApiError } from '~/modules/shared/errors/api-error';

const { isMobileOrTablet } = useDevice();
const [isDataFetching, toggleDataFetching] = useToggle(true);
const [isGlobalSearching, toggleGlobalSearching] = useToggle();

const fetchedNewReleases = ref<AlbumRO[]>([]);
const fetchedHotArtists = ref<ArtistRO[]>([]);
const fetchedPopularPlaylists = ref<PlaylistRO[]>([]);

useHead({ title: 'Search | Mabell' });

onMounted(async () => {
  await fetchData();
  toggleDataFetching();
});

async function fetchData() {
  try {
    const [albums, artists, playlists] = await Promise.all([
      albumApiService.getAlbumsByIds(newReleasesIds),
      artistApiService.getArtistsByIds(hotArtistIds),
      playlistApiService.getPlaylistsByIds(popularPlaylistIds),
    ]);

    fetchedNewReleases.value = albums;
    fetchedHotArtists.value = artists;
    fetchedPopularPlaylists.value = playlists;
  } catch (e) {
    const { message } = e as ApiError;

    console.error(message);
  }
}

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

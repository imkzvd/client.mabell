<template>
  <div class="home-page">
    <UISection heading="Trending Music" :with-container="!isMobileOrTablet">
      <template v-if="isMobileOrTablet">
        <SkeletonCardSliderLoader v-if="isFetching" text-rows="2" class="home-page__slider" />
        <AlbumCardLinksSlider v-else :items="fetchedTrendingAlbums" class="home-page__slider" />
      </template>
      <template v-else>
        <SkeletonCardListLoader v-if="isFetching" text-rows="2" />
        <AlbumCardLinks v-else :items="fetchedTrendingAlbums" max-rows="1" />
      </template>
    </UISection>

    <UISection heading="Top Albums" :with-container="!isMobileOrTablet">
      <template v-if="isMobileOrTablet">
        <SkeletonCardSliderLoader v-if="isFetching" text-rows="2" class="home-page__slider" />
        <AlbumCardLinksSlider v-else :items="fetchedTopAlbums" class="home-page__slider" />
      </template>
      <template v-else>
        <SkeletonCardListLoader v-if="isFetching" text-rows="2" />
        <AlbumCardLinks v-else :items="fetchedTopAlbums" max-rows="1" />
      </template>
    </UISection>

    <UISection heading="Hot Playlists" :with-container="!isMobileOrTablet">
      <template v-if="isMobileOrTablet">
        <SkeletonCardSliderLoader v-if="isFetching" text-rows="2" class="home-page__slider" />
        <PlaylistCardLinksSlider v-else :items="fetchedHotPlaylists" class="home-page__slider" />
      </template>
      <template v-else>
        <SkeletonCardListLoader v-if="isFetching" />
        <PlaylistCardLinks v-else :items="fetchedHotPlaylists" max-rows="1" />
      </template>
    </UISection>

    <UISection heading="Popular artists" :with-container="!isMobileOrTablet">
      <template v-if="isMobileOrTablet">
        <SkeletonCardSliderLoader v-if="isFetching" text-rows="2" class="home-page__slider" />
        <ArtistCardLinksSlider v-else :items="fetchedPopularArtists" class="home-page__slider" />
      </template>
      <template v-else>
        <SkeletonCardListLoader v-if="isFetching" is-rounded-image align="center" />
        <ArtistCardLinks v-else :items="fetchedPopularArtists" max-rows="1" />
      </template>
    </UISection>
  </div>
</template>

<script setup lang="ts">
import type { AlbumRO, ArtistRO, PlaylistRO } from '~/api/api.module';
import { albumApiService } from '~/modules/album/services/album.api.service';
import { playlistApiService } from '~/modules/playlist/services/playlist.api.service';
import { artistApiService } from '~/modules/artist/services/artist.api.service';
import {
  hotPlaylistIds,
  popularArtistIds,
  topAlbumIds,
  trendingMusicIds,
} from '~/modules/home/constants';

const { isMobileOrTablet } = useDevice();
const [isFetching, toggleFetching] = useToggle(true);

const fetchedTrendingAlbums = ref<AlbumRO[]>([]);
const fetchedTopAlbums = ref<AlbumRO[]>([]);
const fetchedHotPlaylists = ref<PlaylistRO[]>([]);
const fetchedPopularArtists = ref<ArtistRO[]>([]);

onMounted(async () => {
  const [trendingAlbums, topAlbums, hotPlaylists, popularArtists] = await Promise.all([
    albumApiService.getAlbumsByIds(trendingMusicIds),
    albumApiService.getAlbumsByIds(topAlbumIds),
    playlistApiService.getPlaylistsByIds(hotPlaylistIds),
    artistApiService.getArtistsByIds(popularArtistIds),
  ]);

  fetchedTrendingAlbums.value = trendingAlbums;
  fetchedTopAlbums.value = topAlbums;
  fetchedHotPlaylists.value = hotPlaylists;
  fetchedPopularArtists.value = popularArtists;

  toggleFetching();
});
</script>

<style scoped lang="scss">
@use '~/assets/scss/container';

.home-page {
  display: flex;
  flex-direction: column;
  padding-block: 32px;

  &__slider {
    @extend .container;
  }
}
</style>

<template>
  <div class="home-page">
    <StickyMobileTopBar v-if="showInstallPWABanner">
      <InstallPWABanner />
    </StickyMobileTopBar>

    <template v-if="isFetching">
      <SkeletonSectionLoader
        v-for="(_, index) of skeletonSectionsTotal"
        :key="index"
        heading-container
      >
        <SkeletonCardLinkListLoader
          text-rows="2"
          :mode="isMobileOrTablet ? 'slider' : 'list'"
          class="home-page__slider"
        />
      </SkeletonSectionLoader>
    </template>
    <template v-else>
      <UISection heading="Trending Music" heading-container :content-container="!isMobileOrTablet">
        <AlbumCardLinksSlider
          v-if="isMobileOrTablet"
          :items="fetchedTrendingAlbums"
          show-meta
          class="home-page__slider"
        />
        <AlbumCardLinksList v-else :items="fetchedTrendingAlbums" show-meta max-rows="1" />
      </UISection>

      <UISection heading="Top Albums" heading-container :content-container="!isMobileOrTablet">
        <AlbumCardLinksSlider
          v-if="isMobileOrTablet"
          :items="fetchedTopAlbums"
          show-artists
          class="home-page__slider"
        />
        <AlbumCardLinksList v-else :items="fetchedTopAlbums" show-artists max-rows="1" />
      </UISection>

      <UISection heading="Hot Playlists" heading-container :content-container="!isMobileOrTablet">
        <PlaylistCardLinksSlider
          v-if="isMobileOrTablet"
          :items="fetchedHotPlaylists"
          class="home-page__slider"
        />
        <PlaylistCardLinksList v-else :items="fetchedHotPlaylists" max-rows="1" />
      </UISection>

      <UISection heading="Popular artists" heading-container :content-container="!isMobileOrTablet">
        <ArtistCardLinksSlider
          v-if="isMobileOrTablet"
          :items="fetchedPopularArtists"
          class="home-page__slider"
        />
        <ArtistCardLinksList v-else :items="fetchedPopularArtists" max-rows="1" />
      </UISection>
    </template>
  </div>
</template>

<script setup lang="ts">
import { albumApiService } from '~/modules/album/services/album.api.service';
import { playlistApiService } from '~/modules/playlist/services/playlist.api.service';
import { artistApiService } from '~/modules/artist/services/artist.api.service';
import {
  hotPlaylistIds,
  popularArtistIds,
  topAlbumIds,
  trendingMusicIds,
} from '~/modules/home/constants';
import type { AlbumRO, ArtistRO, PlaylistRO } from '~/api/api.module';

const skeletonSectionsTotal = 3;
const { $pwa } = useNuxtApp();
const route = useRoute();
const { isMobileOrTablet } = useDevice();
const [isFetching, toggleFetching] = useToggle(true);

const fetchedTrendingAlbums = ref<AlbumRO[]>([]);
const fetchedTopAlbums = ref<AlbumRO[]>([]);
const fetchedHotPlaylists = ref<PlaylistRO[]>([]);
const fetchedPopularArtists = ref<ArtistRO[]>([]);

const showInstallPWABanner = computed<boolean>(() => {
  return isMobileOrTablet && !$pwa?.isPWAInstalled && route.name === 'home';
});

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

  toggleFetching(false);
});
</script>

<style scoped lang="scss">
@use '@/assets/scss/container';

.home-page {
  display: flex;
  flex-direction: column;
  padding-block: 16px;

  @include respond-to(lg) {
    padding-bottom: 32px;
  }

  &__slider {
    @extend .container;
  }
}
</style>

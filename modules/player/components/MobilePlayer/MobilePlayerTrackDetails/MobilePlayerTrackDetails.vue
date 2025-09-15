<template>
  <div class="mobile-player-track-details">
    <TrackCover :url="track.album.cover" :alt="track.name" class="mobile-player-track-details__cover" />

    <div class="mobile-player-track-details__lines">
      <div class="mobile-player-track-details__top-line">
        <UIText :line-clamp="1">
          {{ track.name }}
        </UIText>
      </div>

      <div class="mobile-player-track-details__bottom-line">
        <ArtistNames :line-clamp="1" :items="allTrackArtists" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {
  DesktopPlayerTrackDetailsProps,
} from '~/modules/player/components/DesktopPlayer/DesktopPlayerTrackDetails/types';
import type { SimplifiedArtistRO } from '~/api/api.module';

const props = defineProps<DesktopPlayerTrackDetailsProps>();

const allTrackArtists = computed<SimplifiedArtistRO[]>(() => [
  ...props.track.album.artists,
  ...props.track.featArtists,
]);
</script>

<style scoped lang="scss">
.mobile-player-track-details {
  display: flex;
  align-items: center;
  gap: 8px;
  --font-size: 12px;

  @include respond-to(xs) {
    --font-size: 14px;
  }

  &__lines {
    overflow: hidden;
    line-height: 1.2;
  }
}
</style>

<template>
  <div class="mobile-audio-player-track-details">
    <UIImg
      :path="track.album.cover"
      :alt="track.name"
      class="mobile-audio-player-track-details__cover"
    />

    <div class="mobile-audio-player-track-details__lines">
      <div class="mobile-audio-player-track-details__top-line">
        <UIText :line-clamp="1">
          {{ track.name }}
        </UIText>
      </div>

      <div class="mobile-audio-player-track-details__bottom-line">
        <ArtistNames :items="allTrackArtists" :line-clamp="1" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SimplifiedArtistRO } from '~/api/api.module';
import type { MobileAudioPlayerTrackDetailsProps } from '~/modules/player/components/MobileAudioPlayer/MobileAudioPlayerTrackDetails/types';

const props = defineProps<MobileAudioPlayerTrackDetailsProps>();

const allTrackArtists = computed<SimplifiedArtistRO[]>(() => [
  ...props.track.artists,
  ...props.track.featArtists,
]);
</script>

<style scoped lang="scss">
.mobile-audio-player-track-details {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;

  @include respond-to(xs) {
    font-size: 14px;
  }

  &__cover {
    --width: 40px;
    --height: 40px;
    flex-shrink: 0;

    @include respond-to(xs) {
      --width: 48px;
      --height: 48px;
    }
  }

  &__lines {
    line-height: 1.2;
  }
}
</style>

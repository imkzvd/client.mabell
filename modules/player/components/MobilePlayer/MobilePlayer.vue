<template>
  <div v-show="currentItem" class="mobile-player">
    <MobilePlayerTrackDetails
      v-if="currentItem"
      :track="currentItem"
      class="mobile-player__track-details"
    />

    <div class="mobile-player__control-buttons-placeholder">
      <MobilePlayerControlButtons
        :is-playing="isPlaying"
        class="mobile-player__control-buttons"
        @play="play"
        @pause="pause"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAudio } from '~/modules/player/composables/useAudio';
import type { PlayerAPI } from '~/modules/player/types';

const { items, currentItem, play, pause, addTrack, addTracks, addNextTrack, isPlaying } =
  useAudio();

defineExpose<PlayerAPI>({
  playlist: items,
  currentTrack: currentItem,
  isPlaying,
  play,
  pause,
  addTrack,
  addTracks,
  addNextTrack,
});
</script>

<style lang="scss" scoped>
.mobile-player {
  position: relative;
  display: flex;
  justify-content: space-between;
  column-gap: 8px;
  padding: 4px;
  background-color: v-bind('currentItem?.album.color');
  border-radius: 8px;
  box-shadow: 0 0 20px 4px var(--black);
  //z-index: 20;

  @include respond-to(xs) {
    padding: 8px;
  }

  &:after {
    position: absolute;
    inset: 0;
    content: '';
    background-color: var(--black, #000000);
    opacity: 0.5;
  }

  &__track-details {
    flex-grow: 1;
    overflow: hidden;
    z-index: 10;
  }

  &__control-buttons-placeholder {
    position: relative;
    width: 40px;
    flex-shrink: 0;
    z-index: 10;
  }

  &__control-buttons {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
  }
}
</style>

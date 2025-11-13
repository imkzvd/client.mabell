<template>
  <div v-show="currentTrack" class="mobile-audio-player">
    <MobileAudioPlayerTrackDetails
      v-if="currentTrack"
      :track="currentTrack"
      class="mobile-audio-player__track-details"
    />

    <div class="mobile-audio-player__control-buttons-placeholder">
      <MobileAudioPlayerControlButtons
        :is-playing="isPlaying"
        class="mobile-audio-player__control-buttons"
        @play="play"
        @pause="pause"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { $audioPlayer } = useNuxtApp();

const { currentTrack, play, pause, isPlaying } = $audioPlayer;

const albumColor = computed(() => {
  return currentTrack.value?.album.color || 'var(--stone)';
});
</script>

<style lang="scss" scoped>
.mobile-audio-player {
  position: relative;
  display: flex;
  justify-content: space-between;
  column-gap: 8px;
  padding: 4px;
  background-color: v-bind(albumColor);
  border-radius: 8px;
  overflow: hidden;

  @include respond-to(xs) {
    padding: 6px;
    padding-right: 12px;
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

<template>
  <div class="desktop-audio-player">
    <div v-if="currentTrack?.duration" class="desktop-audio-player__progress-bar-wrapper">
      <DesktopAudioPlayerProgressBar
        v-model="currentTrackTime"
        :max="currentTrack.duration"
        @mouseup="onPlayerProgressBarMouseUp"
        @mousedown="onPlayerProgressBarMouseDown"
        @change="onPlayerProgressBarChange"
      />
    </div>

    <div class="desktop-audio-player__column">
      <DesktopAudioPlayerTrackDetails v-if="currentTrack" :track="currentTrack" />
    </div>

    <div class="desktop-audio-player__column">
      <DesktopAudioPlayerControlButtons
        :is-playing="isPlaying"
        :is-disabled="!currentTrack"
        class="desktop-audio-player__control-buttons"
        @previous="prevTrack"
        @play="play"
        @pause="pause"
        @next="nextTrack"
      />
    </div>

    <div class="desktop-audio-player__column">
      <DesktopAudioPlayerVolumeControls
        v-model="currentVolume"
        class="desktop-audio-player__volume-controls"
      />
    </div>

    <DesktopAudioPlayerTimer
      v-if="currentTrack?.duration"
      :mode="timeModeFromLS"
      :value="currentTrackTime"
      :duration="currentTrack.duration"
      class="desktop-audio-player__track-timer"
      data-testid="track-timer"
      @mode-change="onPlayerTimerModeChange"
    />
  </div>
</template>

<script lang="ts" setup>
import {
  type DesktopAudioPlayerTimerMode,
  DesktopAudioPlayerTimerModes,
} from '~/modules/player/components/DesktopAudioPlayer/DesktopAudioPlayerTimer/types';

const { $audioPlayer } = useNuxtApp();
const timeModeFromLS = useLocalStorage<DesktopAudioPlayerTimerMode>(
  'audio-player:timer-mode',
  DesktopAudioPlayerTimerModes.full,
);

const {
  currentTrack,
  currentTrackTime,
  isPlaying,
  currentVolume,
  play,
  pause,
  setCurrentTrackTime,
  prevTrack,
  nextTrack,
  disableCurrentTimeUpdating,
  enableCurrentTimeUpdating,
} = $audioPlayer;

function onPlayerProgressBarMouseDown() {
  disableCurrentTimeUpdating();
}

function onPlayerProgressBarMouseUp() {
  enableCurrentTimeUpdating();
}

function onPlayerProgressBarChange(value: number) {
  setCurrentTrackTime(value);
}

function onPlayerTimerModeChange(mode: DesktopPlayerTimerMode) {
  timeModeFromLS.value = mode;
}
</script>

<style lang="scss" scoped>
.desktop-audio-player {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 400px 1fr;
  column-gap: 16px;
  padding-inline: 16px;
  height: 100%;

  &:hover &__progress-bar-wrapper {
    opacity: 1;
  }

  &__column {
    display: flex;
  }

  &__control-buttons {
    margin-inline: auto;
  }

  &__volume-controls {
    margin-left: auto;
  }

  &__progress-bar-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    transform: translateY(-8px);
    width: calc(100% - 32px);
    margin-inline: auto;
    opacity: 0;
    transition: opacity 0.25s;
  }

  &__track-timer {
    position: absolute;
    top: 8px;
    right: 16px;
  }
}
</style>

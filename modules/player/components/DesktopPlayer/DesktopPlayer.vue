<template>
  <div class="desktop-player">
    <div v-if="currentTrack?.duration" class="desktop-player__progress-bar-wrapper">
      <DesktopPlayerProgressBar
        :max="currentTrack.duration"
        :model-value="currentTime"
        @change="onPlayerProgressBarChange"
      />
    </div>

    <div class="desktop-player__column">
      <DesktopPlayerTrackDetails v-if="currentTrack" :track="currentTrack" />
    </div>

    <div class="desktop-player__column">
      <DesktopPlayerControlButtons
        :is-playing="isPlaying"
        :is-disabled="!currentTrack"
        class="desktop-player__control-buttons"
        @previous="prevTrack"
        @play="play"
        @pause="pause"
        @next="nextTrack"
      />
    </div>

    <div class="desktop-player__column">
      <DesktopPlayerVolumeControls v-model="volume" class="desktop-player__volume-controls" />
    </div>

    <DesktopPlayerTimer
      v-if="currentTrack?.duration"
      :mode="timeModeFromLS"
      :value="currentTime"
      :duration="currentTrack.duration"
      class="desktop-player__track-timer"
      data-testid="track-timer"
      @mode-change="onPlayerTimerModeChange"
    />
  </div>
</template>

<script lang="ts" setup>
import { useAudio } from '~/modules/player/composables/useAudio';
import type { PlayerAPI } from '~/modules/player/types';
import {
  type DesktopPlayerTimerMode,
  DesktopPlayerTimerModes,
} from '~/modules/player/components/DesktopPlayer/DesktopPlayerTimer/types';

const timeModeFromLS = useLocalStorage<DesktopPlayerTimerMode>('player-timer-mode', DesktopPlayerTimerModes.full)

const {
  items: playlist,
  currentItem: currentTrack,
  currentTime,
  isPlaying,
  volume,
  play,
  pause,
  addTrack,
  addTracks,
  addNextTrack,
  setCurrentTime,
  prevTrack,
  nextTrack
} = useAudio();

defineExpose<PlayerAPI>({
  playlist,
  currentTrack,
  isPlaying,
  play,
  pause,
  addTrack,
  addTracks,
  addNextTrack,
});

function onPlayerProgressBarChange(value: number) {
  setCurrentTime(value);
}

function onPlayerTimerModeChange(mode: DesktopPlayerTimerMode) {
  console.log(mode);
  timeModeFromLS.value = mode;
}
</script>

<style lang="scss" scoped>
.desktop-player {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 160px 1fr;
  padding-inline: 16px;
  height: 100%;

  &:hover &__progress-bar-wrapper {
    opacity: 1;
  }

  &__column {
    display: flex;
    overflow: hidden;
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

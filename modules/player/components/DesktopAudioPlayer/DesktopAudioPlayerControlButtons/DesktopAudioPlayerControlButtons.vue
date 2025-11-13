<template>
  <div class="desktop-audio-player-control-buttons">
    <UIIconButton
      icon="i-mynaui-rewind-solid"
      icon-size="32"
      :is-disabled="isDisabled"
      aria-label="Play previous track"
      @click="emit('previous')"
    />

    <UIIconButton
      :icon="isPlaying ? 'i-mynaui-pause-circle-solid' : 'i-mynaui-play-circle-solid'"
      :is-disabled="isDisabled"
      icon-size="44"
      :aria-label="isPlaying ? 'Pause track' : 'Play track'"
      @click="isPlaying ? emit('pause') : emit('play')"
    />

    <UIIconButton
      icon="i-mynaui-forward-solid"
      icon-size="32"
      :is-disabled="isDisabled"
      aria-label="Play next track"
      @click="emit('next')"
    />
  </div>
</template>

<script setup lang="ts">
import type {
  DesktopAudioPlayerControlButtonsProps,
  DesktopAudioPlayerControlButtonsEmits,
} from '~/modules/player/components/DesktopAudioPlayer/DesktopAudioPlayerControlButtons/types';

defineProps<DesktopAudioPlayerControlButtonsProps>();
const emit = defineEmits<DesktopAudioPlayerControlButtonsEmits>();
</script>

<style scoped lang="scss">
.desktop-audio-player-control-buttons {
  display: flex;
  align-items: center;
  column-gap: 8px;
}
</style>

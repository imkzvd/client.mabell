<template>
  <div class="desktop-player-control-buttons">
    <UIIconButton
      icon="i-mynaui-rewind-solid"
      icon-size="32"
      :is-disabled="isDisabled || isPreviousButtonDisabled"
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
      :is-disabled="isDisabled || isNextButtonDisabled"
      aria-label="Play next track"
      @click="emit('next')"
    />
  </div>
</template>

<script setup lang="ts">
import type {
  DesktopPlayerControlButtonsProps,
  DesktopPlayerControlButtonsEmits,
} from '~/modules/player/components/DesktopPlayer/DesktopPlayerControlButtons/types';

defineProps<DesktopPlayerControlButtonsProps>();
const emit = defineEmits<DesktopPlayerControlButtonsEmits>();
</script>

<style scoped lang="scss">
.desktop-player-control-buttons {
  display: flex;
  align-items: center;
  column-gap: 8px;
}
</style>

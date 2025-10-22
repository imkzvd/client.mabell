<template>
  <div class="desktop-player-control-buttons">
    <UIIconButton
      icon="i-ph-skip-back-fill"
      :is-disabled="isDisabled || isPreviousButtonDisabled"
      aria-label="Play previous track"
      @click="emit('previous')"
    />

    <UIIconButton
      :icon="
        isPlaying
          ? 'i-material-symbols-pause-circle-rounded'
          : 'i-material-symbols-play-circle-rounded'
      "
      :is-disabled="isDisabled"
      icon-size="40"
      :aria-label="isPlaying ? 'Pause track' : 'Play track'"
      @click="isPlaying ? emit('pause') : emit('play')"
    />

    <UIIconButton
      icon="i-ph-skip-forward-fill"
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
  gap: 12px;
}
</style>

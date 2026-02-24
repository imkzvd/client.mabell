<template>
  <div class="mobile-audio-player-control-buttons">
    <UIIconButton
      :icon="isPlaying ? 'i-mynaui-pause-solid' : 'i-mynaui-play-solid'"
      icon-size="32"
      :is-disabled="isDisabled"
      :aria-label="isPlaying ? 'Pause track' : 'Play track'"
      class="mobile-audio-player-control-buttons__icon-button"
      @click="isPlaying ? emit('pause') : emit('play')"
    />
  </div>
</template>

<script setup lang="ts">
import type {
  MobileAudioPlayerControlButtonsEmits,
  MobileAudioPlayerControlButtonsProps,
} from '~/modules/player/components/MobileAudioPlayer/MobileAudioPlayerControlButtons/types';

defineProps<MobileAudioPlayerControlButtonsProps>();
const emit = defineEmits<MobileAudioPlayerControlButtonsEmits>();
</script>

<style scoped lang="scss">
.mobile-audio-player-control-buttons {
  &__icon-button {
    @include respond-to(xs) {
      --size: 40px;
    }
  }
}
</style>

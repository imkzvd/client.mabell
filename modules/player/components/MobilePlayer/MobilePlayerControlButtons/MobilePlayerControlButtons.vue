<template>
  <div class="mobile-player-control-buttons">
    <UIIconButton
      :icon="
        isPlaying ? 'i-material-symbols-pause-rounded' : 'i-material-symbols-play-arrow-rounded'
      "
      :is-disabled="isDisabled"
      icon-size="28px"
      :aria-label="isPlaying ? 'Pause track' : 'Play track'"
      class="mobile-player-control-buttons__icon-button"
      @click="isPlaying ? emit('pause') : emit('play')"
    />
  </div>
</template>

<script setup lang="ts">
import type {
  MobilePlayerControlButtonsEmits,
  MobilePlayerControlButtonsProps,
} from '~/modules/player/components/MobilePlayer/MobilePlayerControlButtons/types';

defineProps<MobilePlayerControlButtonsProps>();
const emit = defineEmits<MobilePlayerControlButtonsEmits>();
</script>

<style scoped lang="scss">
.mobile-player-control-buttons {
  &__icon-button {
    @include respond-to(xs) {
      --size: 32px;
    }
  }
}
</style>

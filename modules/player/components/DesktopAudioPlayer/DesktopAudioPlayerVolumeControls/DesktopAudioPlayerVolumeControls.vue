<template>
  <div class="desktop-audio-player-volume-controls">
    <UIIconButton
      appearance="secondary"
      :icon="isMuting ? 'i-mynaui-volume-x-solid' : 'i-mynaui-volume-high-solid'"
      icon-size="20"
      :aria-label="isMuting ? 'Unmute' : 'Mute'"
      @click="isMuting ? onUnmuteButtonClick() : onMuteButtonClick()"
    />

    <div class="desktop-audio-player-volume-controls__slider-wrapper">
      <UISlider v-model="model" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DesktopAudioPlayerVolumeControlsEmits } from '~/modules/player/components/DesktopAudioPlayer/DesktopAudioPlayerVolumeControls/types';

const emit = defineEmits<DesktopAudioPlayerVolumeControlsEmits>();
const model = defineModel<number>({ default: 100 });

const isMuting = ref<boolean>(model.value === 0);
const valueBeforeMuting = ref<number>(model.value || 50);

function onMuteButtonClick() {
  valueBeforeMuting.value = model.value;
  isMuting.value = true;
  model.value = 0;
  emit('mute');
}

function onUnmuteButtonClick() {
  model.value = valueBeforeMuting.value;
  isMuting.value = false;
  emit('unmute');
}
</script>

<style scoped lang="scss">
.desktop-audio-player-volume-controls {
  display: flex;
  align-items: center;
  column-gap: 4px;

  &__slider-wrapper {
    width: 120px;
  }
}
</style>

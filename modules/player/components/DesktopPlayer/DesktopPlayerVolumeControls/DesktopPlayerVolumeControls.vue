<template>
  <div class="desktop-player-volume-controls">
    <UIIconButton
      type="secondary"
      :icon="isMuting ? 'ion:volume-mute' : 'ion:volume-high'"
      icon-size="20"
      class="mr-1"
      :aria-label="isMuting ? 'Unmute' : 'Mute'"
      @click="isMuting ? onUnmuteButtonClick() : onMuteButtonClick()"
    />

    <div class="desktop-player-volume-controls__slider-wrapper">
      <UISlider v-model="model" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type {
  DesktopPlayerVolumeControlsEmits,
} from '~/modules/player/components/DesktopPlayer/DesktopPlayerVolumeControls/types';
import UISlider from '#shared/components/UI/UISlider/UISlider.vue';

const emit = defineEmits<DesktopPlayerVolumeControlsEmits>();
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
.desktop-player-volume-controls {
  display: flex;
  align-items: center;

  &__slider-wrapper {
    width: 120px;
  }
}
</style>

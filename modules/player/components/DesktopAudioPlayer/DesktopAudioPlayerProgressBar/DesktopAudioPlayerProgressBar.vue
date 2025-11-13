<template>
  <UISlider
    v-model="model"
    :max="max"
    class="desktop-player-progress-bar"
    @mouseup="emit('mouseup')"
    @mousedown="emit('mousedown')"
    @change="emit('change', $event)"
  />
</template>

<script lang="ts" setup>
import type {
  DesktopAudioPlayerProgressBarEmits,
  DesktopAudioPlayerProgressBarProps,
} from '~/modules/player/components/DesktopAudioPlayer/DesktopAudioPlayerProgressBar/types';

defineProps<DesktopAudioPlayerProgressBarProps>();
const emit = defineEmits<DesktopAudioPlayerProgressBarEmits>();
const model = defineModel<number>({ default: 0 });
</script>

<style lang="scss" scoped></style>

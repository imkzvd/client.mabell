<template>
  <UISlider
    :model-value="modelValue"
    :max="max"
    class="desktop-player-progress-bar"
    @change="emit('change', $event)"
  />
</template>

<script lang="ts" setup>
import type {
  DesktopPlayerProgressBarEmits,
  DesktopPlayerProgressBarProps,
} from '~/modules/player/components/DesktopPlayer/DesktopPlayerProgressBar/types';

defineProps<DesktopPlayerProgressBarProps>();
const emit = defineEmits<DesktopPlayerProgressBarEmits>();
</script>

<style lang="scss" scoped></style>

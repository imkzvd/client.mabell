<template>
  <div class="desktop-audio-player-timer" @click="onClick">
    <span
      v-if="
        currentMode === DesktopAudioPlayerTimerModes.elapsed ||
        currentMode === DesktopAudioPlayerTimerModes.full
      "
      class="desktop-audio-player-timer__elapsed-time"
    >
      {{ elapsedTime }}
    </span>

    <span v-if="currentMode === 'remaining'" class="desktop-audio-player-timer__remaining-time">
      -{{ remainingTime }}
    </span>

    <template v-if="currentMode === 'full'">
      /
      <span class="desktop-audio-player-timer__duration">
        {{ duration }}
      </span>
    </template>
  </div>
</template>

<script setup lang="ts">
import {
  defaultDesktopAudioPlayerTimerFormat,
  PlayerTrackTimerModes,
} from '~/modules/player/components/DesktopAudioPlayer/DesktopAudioPlayerTimer/constants';
import {
  DesktopAudioPlayerTimerModes,
  type DesktopAudioPlayerTimerEmits,
  type DesktopAudioPlayerTimerMode,
  type DesktopAudioPlayerTimerProps,
} from '~/modules/player/components/DesktopAudioPlayer/DesktopAudioPlayerTimer/types';

const props = withDefaults(defineProps<DesktopAudioPlayerTimerProps>(), {
  mode: DesktopAudioPlayerTimerModes.full,
});
const emit = defineEmits<DesktopAudioPlayerTimerEmits>();

const currentModeIndex = ref<number>(0);
const currentMode = computed<DesktopAudioPlayerTimerMode>(
  () => PlayerTrackTimerModes[currentModeIndex.value],
);
const { unix } = useDayjs();
const elapsedTime = computed(() => unix(props.value).format(defaultDesktopAudioPlayerTimerFormat));
const remainingTime = computed(() =>
  unix(props.duration - props.value).format(defaultDesktopAudioPlayerTimerFormat),
);
const duration = computed(() => unix(props.duration).format(defaultDesktopAudioPlayerTimerFormat));

onMounted(() => {
  currentModeIndex.value = PlayerTrackTimerModes.indexOf(DesktopAudioPlayerTimerModes[props.mode]);
});

function onClick() {
  if (!PlayerTrackTimerModes[currentModeIndex.value + 1]) {
    currentModeIndex.value = 0;
    emit('mode-change', currentMode.value);

    return;
  }

  currentModeIndex.value += 1;
  emit('mode-change', currentMode.value);
}
</script>

<style scoped lang="scss">
.desktop-audio-player-timer {
  display: flex;
  font-size: 12px;
  color: var(--main-text, white);
  cursor: pointer;
  gap: 4px;
}
</style>

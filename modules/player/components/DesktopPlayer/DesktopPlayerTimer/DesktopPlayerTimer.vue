<template>
  <div class="desktop-player-timer" @click="onClick">
    <span
      v-if="
        currentMode === DesktopPlayerTimerModes.elapsed ||
        currentMode === DesktopPlayerTimerModes.full
      "
      class="desktop-player-timer__elapsed-time"
    >
      {{ elapsedTime }}
    </span>

    <span v-if="currentMode === 'remaining'" class="desktop-player-timer__remaining-time">
      -{{ remainingTime }}
    </span>

    <template v-if="currentMode === 'full'">
      /
      <span class="desktop-player-timer__duration">
        {{ duration }}
      </span>
    </template>
  </div>
</template>

<script setup lang="ts">
import {
  defaultDesktopPlayerTimerFormat,
  PlayerTrackTimerModes,
} from '~/modules/player/components/DesktopPlayer/DesktopPlayerTimer/constants';
import {
  type DesktopPlayerTimerEmits,
  type DesktopPlayerTimerMode,
  DesktopPlayerTimerModes,
  type DesktopPlayerTimerProps,
} from '~/modules/player/components/DesktopPlayer/DesktopPlayerTimer/types';

const props = withDefaults(defineProps<DesktopPlayerTimerProps>(), {
  mode: DesktopPlayerTimerModes.full,
});
const emit = defineEmits<DesktopPlayerTimerEmits>();

const currentModeIndex = ref<number>(0);
const currentMode = computed<DesktopPlayerTimerMode>(
  () => PlayerTrackTimerModes[currentModeIndex.value],
);
const { unix } = useDayjs();
const elapsedTime = computed(() => unix(props.value).format(defaultDesktopPlayerTimerFormat));
const remainingTime = computed(() =>
  unix(props.duration - props.value).format(defaultDesktopPlayerTimerFormat),
);
const duration = computed(() => unix(props.duration).format(defaultDesktopPlayerTimerFormat));

onMounted(() => {
  currentModeIndex.value = PlayerTrackTimerModes.indexOf(DesktopPlayerTimerModes[props.mode]);
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
.desktop-player-timer {
  display: flex;
  font-size: 12px;
  color: var(--main-text, white);
  cursor: pointer;
  gap: 4px;
}
</style>

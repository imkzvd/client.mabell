<template>
  <div ref="slider" class="ui-slider" :style="rootCssStyles" @mousedown="onMouseDown">
    <div class="ui-slider__runway">
      <div class="ui-slider__bar">
        <button type="button" class="ui-slider__thumb" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { UISliderEmits, UISliderProps } from '#shared/components/UI/UISlider/types';

const props = withDefaults(defineProps<UISliderProps>(), {
  max: 100,
});
const emit = defineEmits<UISliderEmits>();

const slider = useTemplateRef<HTMLDivElement>('slider');

let sliderLeftOffset: number = 0;
const runwayWidth = ref<number>(0);
const localState = ref<number>(props.modelValue);

const runwayPixelsPerUnit = computed<number>(() => runwayWidth.value / props.max);
const barWidth = computed<number>(() => localState.value * runwayPixelsPerUnit.value)
const rootCssStyles = computed(() => ({
  "--dynamic-bar-width": `${barWidth.value}px`,
}));

onMounted(() => {
  runwayWidth.value = slider.value?.clientWidth || 0;
  sliderLeftOffset = slider.value?.getBoundingClientRect().left || 0;
})

const watcher = watch(() => props.modelValue, (value: number) => {
  localState.value = value;
})

function onMouseDown() {
  document.addEventListener("mouseup", onMouseUp, { once: true });
  document.addEventListener("mousemove", onMouseMove);

  watcher.pause();
}

function calcSliderValue(e: MouseEvent) {
  const barWidth = e.pageX - sliderLeftOffset;

  return Math.max(0, Math.min(barWidth / runwayPixelsPerUnit.value, props.max));
}

function onMouseUp(e: MouseEvent) {
  document.removeEventListener("mousemove", onMouseMove);

  const sliderValue = calcSliderValue(e);

  emit('update:modelValue', sliderValue);
  emit('change', sliderValue);
  watcher.resume();
}

function onMouseMove(e: MouseEvent) {
  const sliderValue = calcSliderValue(e);

  localState.value = sliderValue;
  emit('update:modelValue', sliderValue);
}
</script>

<style lang="scss" scoped>
.ui-slider {
  padding-block: 8px;
  cursor: pointer;
  user-select: none;

  &__thumb {
    position: absolute;
    top: 50%;
    right: 0;
    height: 12px;
    width: 12px;
    border-radius: 100%;
    transform: translate(50%, -50%);
    background-color: var(--ui-slider-thumb-color, white);
    opacity: 0;
    cursor: pointer;
  }

  &:hover &__thumb {
    opacity: 1;
  }

  &__runway {
    width: 100%;
    height: var(--ui-slider-runway-height, 4px);
    background-color: var(--ui-slider-runway-bg, gray);
    border-radius: 8px;
  }

  &__bar {
    position: relative;
    height: 100%;
    width: var(--dynamic-bar-width);
    background-color: var(--ui-slider-bar-bg, white);
  }
}
</style>

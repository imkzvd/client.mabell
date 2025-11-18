<template>
  <div ref="slider" class="ui-slider" :style="rootCSSVars" @mousedown="onMouseDown">
    <div class="ui-slider__runway">
      <div class="ui-slider__bar">
        <button type="button" class="ui-slider__thumb" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { UISliderEmits, UISliderProps } from '~/modules/shared/components/UI/UISlider/types';

const props = withDefaults(defineProps<UISliderProps>(), {
  max: 100,
  width: '100%',
});
const emit = defineEmits<UISliderEmits>();

const sliderEl = useTemplateRef<HTMLDivElement>('slider');
const sliderLeftOffset = ref<number>(0);
const runwayWidth = ref<number>(0);

const model = defineModel<number>({
  default: 0,
});

const runwayPixelsPerUnit = computed<number>(() => runwayWidth.value / props.max);
const barWidth = computed<number>(() => model.value * runwayPixelsPerUnit.value);
const rootCSSVars = computed<Record<string, string>>(() => ({
  '--dynamic-bar-width': `${barWidth.value}px`,
}));

onMounted(() => {
  runwayWidth.value = sliderEl.value?.clientWidth || 0;
  sliderLeftOffset.value = sliderEl.value?.getBoundingClientRect().left || 0;
});

function onMouseDown(e: MouseEvent) {
  emit('mousedown', e);
  document.addEventListener('mouseup', onMouseUp, { once: true });
  document.addEventListener('mousemove', onMouseMove);
}

function onMouseUp(e: MouseEvent) {
  document.removeEventListener('mousemove', onMouseMove);

  emit('mouseup', e);
  model.value = calcModelValue(e);
  emit('change', model.value);
}

function onMouseMove(e: MouseEvent) {
  model.value = calcModelValue(e);
}

function calcModelValue(e: MouseEvent) {
  const barWidth = e.pageX - sliderLeftOffset.value;
  const prepValue = barWidth / runwayPixelsPerUnit.value;

  return Math.max(0, Math.min(prepValue, props.max));
}
</script>

<style lang="scss" scoped>
.ui-slider {
  width: v-bind(width);
  padding-block: 8px;
  user-select: none;
  cursor: pointer;

  &:hover & {
    &__thumb {
      opacity: 1;
    }
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
    border-radius: 8px;
  }

  &__thumb {
    position: absolute;
    top: 50%;
    right: 0;
    height: 12px;
    width: 12px;
    border-radius: 100%;
    transform: translate(50%, -50%);
    background-color: var(--ui-slider-thumb-color, white);
    outline: 1px solid var(--ui-slider-runway-bg, gray);
    opacity: 0;
    cursor: pointer;
  }
}
</style>

<template>
  <div class="ui-img" :class="rootCSSClasses">
    <NuxtIcon v-if="!isCompleted" mode="svg" :name="fallbackIcon" class="ui-img__icon" />

    <NuxtImg
      v-if="path"
      v-show="isCompleted"
      ref="nuxtImgInstance"
      :src="path"
      :alt="alt"
      @load="onLoad"
      @error="onError"
    />
  </div>
</template>

<script setup lang="ts">
import type { UIImgProps } from '~/modules/shared/components/UI/UIImg/types';
import type { NuxtImg } from '#components';

const props = withDefaults(defineProps<UIImgProps>(), {
  alt: '',
  fallbackIcon: 'i-mynaui-music-solid',
});

const nuxtImgInstance = ref<InstanceType<typeof NuxtImg>>();
const [isLoading, toggleLoading] = useToggle(true);
const [isCompleted, toggleCompleted] = useToggle();

const rootCSSClass = 'ui-img';
const rootCSSClasses = computed<Record<string, boolean>>(() => ({
  [`${rootCSSClass}_is-loading`]: isLoading.value,
  [`${rootCSSClass}_is-rounded`]: props.isRounded,
}));

onMounted(() => {
  if (!props.path) {
    toggleLoading(false);
  }

  if (nuxtImgInstance.value?.$el.complete) {
    toggleCompleted(true);
    toggleLoading(false);
  }
});

watch(
  () => props.path,
  (val: UIImgProps['path'], oldVal: UIImgProps['path']) => {
    if (val !== oldVal) {
      toggleCompleted(false);
    }

    if (val) toggleLoading(true);
  },
);

function onLoad() {
  toggleLoading(false);
  toggleCompleted(true);
}

function onError() {
  toggleLoading(false);
  toggleCompleted(false);
}
</script>

<style scoped lang="scss">
.ui-img {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--width, initial);
  height: var(--height, initial);
  overflow: hidden;
  background-color: #323232;
  border-radius: var(--border-rounded, 4px);
  box-shadow: inset 0 0 0 1px hsla(0, 0%, 50%, 0.1);

  &_is-loading {
    animation: pulse-bg 1s infinite;
  }

  &_is-rounded {
    border-radius: 100%;
  }

  &__icon {
    width: calc(var(--width, 100%) / 2.5);
    height: calc(var(--height, 100%) / 2.5);
    color: rgba(235, 235, 245, 0.16);
  }
}
</style>

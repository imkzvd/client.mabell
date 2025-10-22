<template>
  <div class="ui-img" :class="rootCSSClasses">
    <NuxtIcon
      v-if="!isLoaded"
      mode="svg"
      name="i-ph-music-notes-simple-bold"
      class="ui-img__icon"
    />

    <NuxtImg
      v-if="url"
      v-show="isLoaded"
      ref="nuxtImgInstance"
      :src="url"
      :alt="alt"
      @load="onLoad"
      @error="onError"
    />
  </div>
</template>

<script setup lang="ts">
import type { UIImgProps } from '~/modules/shared/components/UI/UIImg/types';
import type { NuxtImg } from '#components';

const props = defineProps<UIImgProps>();

const nuxtImgInstance = ref<InstanceType<typeof NuxtImg>>();
const [isLoading, toggleLoading] = useToggle();
const [isLoaded, toggleLoaded] = useToggle();

const rootCSSClass = 'ui-img';
const rootCSSClasses = computed<Record<string, boolean>>(() => ({
  [`${rootCSSClass}_is-loading`]: isLoading.value,
  [`${rootCSSClass}_is-rounded`]: props.isRounded,
  [`${rootCSSClass}_no-image`]: !isLoaded.value,
}));

onMounted(() => {
  if (nuxtImgInstance.value?.$el.complete) {
    toggleLoaded(true);
  }
});

watch(
  () => props.url,
  (val: UIImgProps['url'], oldVal: UIImgProps['url']) => {
    if (val !== oldVal) {
      toggleLoaded(false);
    }

    if (val) toggleLoading(true);
  },
);

function onLoad() {
  toggleLoading(false);
  toggleLoaded(true);
}

function onError() {
  toggleLoading(false);
  toggleLoaded(false);
}
</script>

<style scoped lang="scss">
.ui-img {
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--size, 100px);
  width: var(--size, 100px);
  overflow: hidden;
  border-radius: var(--border-rounded, 4px);

  &_no-image {
    border: 1px solid var(--gray-dark, gray);
  }

  &_is-loading {
    animation: pulse-bg 1s infinite;
    border-color: var(--gray-darkest, gray);
  }

  &_is-rounded {
    border-radius: 100%;
  }

  &__icon {
    height: calc(var(--size, 80px) / 2);
    width: calc(var(--size, 80px) / 2);
    color: var(--main-text, white);
  }
}
</style>

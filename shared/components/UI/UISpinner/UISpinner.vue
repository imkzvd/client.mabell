<template>
  <div
    :style="cssVars"
    :class="cssClasses"
    :data-testid="TEST_TOKENS.UI_SPINNER"
    class="ui-spinner"
  >
    <div class="ui-spinner__item" />
  </div>
</template>

<script setup lang="ts">
import { defaultSizeProp, defaultWidthProp } from "~/shared/components/UI/UISpinner/constants";
import TEST_TOKENS from "~/__tests__/TEST_TOKENS";
import type { UISpinnerProps } from "~/shared/components/UI/UISpinner/types";

const props = withDefaults(defineProps<UISpinnerProps>(), {
  size: defaultSizeProp,
  width: defaultWidthProp,
});

const baseClass: string = "ui-spinner";

const cssVars = computed(() => ({
  "--width": `${props.size}px`,
  "--height": `${props.size}px`,
  "--border-width": `${props.width}px`,
}));
const cssClasses = computed(() => ({
  [`${baseClass}_is-contrasted`]: props.isContrasted,
  [`${baseClass}_is-centered`]: props.isCentered,
}));
</script>

<style lang="scss" scoped>
@keyframes double-rotate {
  to {
    transform: rotate(720deg);
  }
}

.ui-spinner {
  &_is-contrasted & {
    &__item {
      border-color: var(--ui-spinner-contrast-color, #ffffff);
      border-bottom-color: transparent;
    }
  }

  &_is-centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__item {
    width: var(--width, 14px);
    height: var(--height, 14px);
    border-width: var(--border-width, 2px);
    border-color: var(--ui-spinner-color, #000000);
    border-style: solid;
    border-radius: 100%;
    border-bottom-color: transparent;
    animation: double-rotate 1s ease infinite;
  }
}
</style>

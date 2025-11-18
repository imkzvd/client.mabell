<template>
  <div :class="rootCSSClasses" :data-testid="TEST_TOKENS.UI_SPINNER" class="ui-spinner">
    <div class="ui-spinner__item" />
  </div>
</template>

<script setup lang="ts">
import {
  defaultSizeProp,
  defaultBorderWidthProp,
} from '~/modules/shared/components/UI/UISpinner/constants';
import { TEST_TOKENS } from '~/__tests__/TEST_TOKENS';
import type { UISpinnerProps } from '~/modules/shared/components/UI/UISpinner/types';

const props = withDefaults(defineProps<UISpinnerProps>(), {
  size: defaultSizeProp,
  borderWidth: defaultBorderWidthProp,
});

const rootCSSClass: string = 'ui-spinner';
const rootCSSClasses = computed<Record<string, boolean>>(() => ({
  [`${rootCSSClass}_is-contrasted`]: props.isContrasted,
  [`${rootCSSClass}_is-centered`]: props.isCentered,
}));
</script>

<style lang="scss" scoped>
@use '@/assets/scss/keyframes';

.ui-spinner {
  &_is-contrasted & {
    &__item {
      border-color: var(--ui-spinner-contrast-color, black);
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
    width: var(--width, v-bind('props.size'));
    height: var(--height, v-bind('props.size'));
    border-width: var(--border-width, v-bind('props.borderWidth'));
    border-color: var(--ui-spinner-color, currentColor);
    border-style: solid;
    border-radius: 100%;
    border-bottom-color: transparent;
    animation: double-rotate 1s ease infinite;
  }
}
</style>

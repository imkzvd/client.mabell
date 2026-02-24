<template>
  <button
    :type="type"
    :disabled="isDisabled || isLoading"
    class="ui-button"
    :class="rootCSSClasses"
  >
    <span v-if="isLoading" class="ui-button__spinner-wrapper">
      <UISpinner :is-contrasted="color === 'primary'" />
    </span>

    <span class="ui-button__text">
      <slot name="default">Button</slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import UISpinner from '../UISpinner/UISpinner.vue';
import type { UIButtonProps } from './types';

const props = withDefaults(defineProps<UIButtonProps>(), {
  type: 'button',
  color: 'primary',
  size: 'md',
  isFull: false,
  isDisabled: false,
  isLoading: false,
});

const rootCSSClass = 'ui-button';
const rootCSSClasses = computed(() => ({
  [`${rootCSSClass}_color_${props.color}`]: props.color,
  [`${rootCSSClass}_size_${props.size}`]: props.size,
  [`${rootCSSClass}_is-full`]: props.isFull,
  [`${rootCSSClass}_is-disabled`]: props.isDisabled,
  [`${rootCSSClass}_is-loading`]: props.isLoading,
}));
</script>

<style lang="scss" scoped>
.ui-button {
  position: relative;
  border: none;
  border-radius: var(--ui-button-rounded, 4px);
  cursor: pointer;
  transition: all 0.25s ease;

  &:deep(svg) {
    fill: currentColor;
  }

  &_color {
    &_primary {
      background-color: var(--ui-button-primary-bg-color, white);
      color: var(--ui-button-primary-text-color, black);

      @include respond-to(xl) {
        &:not(.ui-button_loading, :disabled) {
          &:hover {
            background-color: var(--ui-button-primary-hover-bg-color, gray);
          }
        }
      }
    }

    &_secondary {
      background-color: var(--ui-button-secondary-bg-color, gray);
      color: var(--ui-button-secondary-text-color, white);

      @include respond-to(xl) {
        &:not(.ui-button_loading, :disabled) {
          &:hover {
            background-color: var(--ui-button-secondary-hover-bg-color, gray);
          }
        }
      }
    }
  }

  &_size {
    &_sm {
      height: 28px;
      padding-inline: 12px;
      font-size: 12px;
    }

    &_md {
      height: 36px;
      padding-inline: 16px;
      font-size: 14px;
    }

    &_lg {
      height: 44px;
      padding-inline: 20px;
      font-size: 16px;
    }
  }

  &_is-full {
    width: 100%;
  }

  &_is-loading & {
    &__text {
      opacity: 0;
    }
  }

  &_is-disabled {
    cursor: not-allowed;
    background-color: var(--ui-button-disabled-bg-color, gray);
    color: var(--ui-button-disabled-text-color, darkgray);
  }

  &__spinner-wrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    display: flex;
    transform: translate(-50%, -50%);
  }
}
</style>

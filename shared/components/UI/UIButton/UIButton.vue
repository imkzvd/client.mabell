<template>
  <button :type="type" :disabled="isDisabled || isLoading" :class="cssClasses">
    <span v-if="isLoading" :class="`${baseClass}__spinner-wrapper`">
      <UISpinner :is-contrasted="appearance === 'secondary'" />
    </span>

    <span :class="`${baseClass}__content`">
      <slot name="default" />
    </span>
  </button>
</template>

<script setup lang="ts">
import {
  UIButtonAppearances,
  type UIButtonProps,
  UIButtonSizes,
  UIButtonTypes,
} from '~/shared/components/UI/UIButton/types';

const props = withDefaults(defineProps<UIButtonProps>(), {
  type: UIButtonTypes.button,
  appearance: UIButtonAppearances.primary,
  size: UIButtonSizes.md,
  isFull: false,
  isDisabled: false,
  isLoading: false,
});

const baseClass = 'ui-button';
const cssClasses = computed(() => ({
  [baseClass]: true,
  [`${baseClass}_appearance_${props.appearance}`]: props.appearance,
  [`${baseClass}_size_${props.size}`]: props.size,
  [`${baseClass}_is-full`]: props.isFull,
  [`${baseClass}_is-disabled`]: props.isDisabled,
  [`${baseClass}_is-loading`]: props.isLoading,
}));
</script>

<style lang="scss" scoped>
$base-class: ui-button;

.#{$base-class} {
  font-family: CircularSpTitleBold, sans-serif;
  position: relative;
  border: none;
  border-radius: var(--ui-button-rounded, 4px);

  &:deep(svg) {
    fill: currentColor;
  }

  &_appearance {
    &_primary {
      background-color: var(--ui-button-bg-color, #ffffff);
      color: var(--ui-button-text-color, #000000);

      @include respond-to(xl) {
        &:not(.#{$base-class}_loading, :disabled) {
          &:hover {
            background-color: var(--ui-button-hover-bg-color, #F4F4F4FF);
          }
        }
      }
    }

    &_secondary {
      background-color: var(--ui-button-secondary-bg-color, #ffffff);
      color: var(--ui-button-secondary-text-color, #000000);

      @include respond-to(xl) {
        &:not(.#{$base-class}_loading, :disabled) {
          &:hover {
            background-color: var(--ui-button-secondary-hover-bg-color, #F4F4F4FF);
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

  &_is-loading {
    .#{$base-class}__content {
      opacity: 0;
    }
  }

  &_is-disabled {
    cursor: not-allowed;
    background-color: var(--ui-button-disabled-bg-color, #c6c6c6);
    color: var(--ui-button-disabled-text-color, #222222);
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

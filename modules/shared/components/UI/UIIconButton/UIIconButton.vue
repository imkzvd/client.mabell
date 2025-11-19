<template>
  <button
    type="button"
    :aria-label="ariaLabel"
    :disabled="isDisabled"
    class="ui-icon-button"
    :class="rootCSSClasses"
  >
    <NuxtIcon
      mode="svg"
      role="img"
      :name="icon"
      :size="iconSize"
      aria-hidden="true"
      :data-testid="icon"
      class="ui-icon-button__icon"
    />
  </button>
</template>

<script setup lang="ts">
import {
  UIIconButtonAppearances,
  type UIIconButtonProps,
} from '~/modules/shared/components/UI/UIIconButton/types';
import { defaultIconSizeProp } from '~/modules/shared/components/UI/UIIconButton/constants';

const props = withDefaults(defineProps<UIIconButtonProps>(), {
  appearance: UIIconButtonAppearances.primary,
  iconSize: defaultIconSizeProp,
});

const rootCSSClass = 'ui-icon-button';
const rootCSSClasses = computed(() => ({
  [`${rootCSSClass}_appearance_${props.appearance}`]: props.appearance,
  [`${rootCSSClass}_is-disabled`]: props.isDisabled,
}));
</script>

<style lang="scss" scoped>
.ui-icon-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  transition: color 0.25s;
  cursor: pointer;

  @include respond-to(xl) {
    cursor: pointer;
  }

  &_appearance {
    &_primary {
      color: var(--ui-icon-button-color, white);

      @include respond-to(xl) {
        &:hover {
          color: var(--ui-icon-button-hover-color, gray);
        }
      }
    }

    &_secondary {
      color: var(--ui-icon-button-secondary-color, gray);

      @include respond-to(xl) {
        &:hover {
          color: var(--ui-icon-button-secondary-hover-color, white);
        }
      }
    }
  }

  &_is-disabled {
    color: var(--ui-icon-button-disabled-color, gray);
    pointer-events: none;
  }

  &__icon {
    width: var(--width, v-bind(iconSize));
    height: var(--width, v-bind(iconSize));
  }
}
</style>

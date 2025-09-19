<template>
  <button type="button" :aria-label="ariaLabel" :disabled="isDisabled" :class="rootCssClasses">
    <NuxtIcon
      mode="svg"
      role="img"
      :name="icon"
      :size="iconSize"
      class="ui-icon-button__icon"
    />
  </button>
</template>

<script setup lang="ts">
import { UIIconButtonAppearances, type UIIconButtonProps } from '~/shared/components/UI/UIIconButton/types';
import { defaultIconSizeProp } from '#shared/components/UI/UIIconButton/constants';

const props = withDefaults(defineProps<UIIconButtonProps>(), {
  appearance: UIIconButtonAppearances.primary,
  iconSize: defaultIconSizeProp,
});

const baseClass = "ui-icon-button"
const rootCssClasses = computed(() => ({
  [baseClass]: true,
  [`${baseClass}_appearance_${props.appearance}`]: props.appearance,
  [`${baseClass}_is-disabled`]: props.isDisabled,
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
      color: var(--ui-icon-button-color, #ffffff);

      @include respond-to(xl) {
        &:hover {
          color: var(--ui-icon-button-hover-color, #cccccc);
        }
      }
    }

    &_secondary {
      color: var(--ui-icon-button-secondary-color, #757575);

      @include respond-to(xl) {
        &:hover {
          color: var(--ui-icon-button-secondary-hover-color, #bcbcbc);
        }
      }
    }
  }

  &_is-disabled {
    color: var(--ui-icon-button-disabled-color, #cccccc);
    pointer-events: none;
  }

  &__icon {
    width: var(--size, v-bind(iconSize));
    height: var(--size, v-bind(iconSize));
  }
}
</style>

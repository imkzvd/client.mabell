<template>
  <div :class="cssClasses">
    <div class="ui-checkbox__checkbox-container">
      <div class="ui-checkbox__input-container">
        <input
          :id="id"
          :name="name"
          :disabled="isDisabled"
          type="checkbox"
          class="ui-checkbox__input"
          v-model="model"
        />

        <div class="ui-checkbox__overlay">
          <NuxtIcon mode="svg" name="i-mdi-check-bold" size="16" class="ui-checkbox__overlay-icon" />
        </div>
      </div>
    </div>

    <label :for="id" class="ui-checkbox__label-container">
      <span class="ui-checkbox__label-text">
        {{ label }}
      </span>

      <span v-if="sublabel" class="ui-checkbox__sublabel-text">
        {{ sublabel }}
      </span>
    </label>
  </div>
</template>

<script setup lang="ts">
import type { UICheckboxProps } from "~/modules/shared/components/UI/UICheckbox/types";

const props = withDefaults(defineProps<UICheckboxProps>(), {
  id: crypto.randomUUID(),
});

const baseClass = 'ui-checkbox';
const model = defineModel<UICheckboxProps["modelValue"]>();

const cssClasses = computed(() => ({
  [baseClass]: true,
  [`${baseClass}_is-checked`]: model.value,
  [`${baseClass}_is-disabled`]: props.isDisabled,
}));
</script>

<style scoped lang="scss">
.ui-checkbox {
  display: flex;

  &__checkbox-container {
    display: flex;
    height: var(--ui-checkbox-label-line-height, 20px);
    align-items: center;
    margin-right: 8px;
  }

  &__input-container {
    position: relative;
    line-height: 0;
  }

  &__input {
    height: var(--ui-checkbox-height, 16px);
    width: var(--ui-checkbox-width, 16px);
    line-height: 0;
    opacity: 0;
    cursor: pointer;
  }

  &__overlay {
    position: absolute;
    inset: 0;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: var(--ui-checkbox-border-radius, 4px);
    border-width: var(--ui-checkbox-border-width, 2px);
    border-color: var(--ui-checkbox-border-color, #fff);
    background-color: var(--ui-checkbox-bg, transparent);
    border-style: solid;
    transition: ease-in-out, 0.15s;
    pointer-events: none;

    @include respond-to(xl) {
      &:hover {
        border-color: var(--ui-checkbox-border-hover-color, #dfdfdf);
      }
    };
  }

  &__overlay-icon {
    display: none;
    flex-shrink: 0;
    color: var(--ui-checkbox-checked-icon-color, #000);
  }

  &__label-container {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    font-family: var(--label-text, sans-serif);
    font-weight: var(--ui-checkbox-label-font-weight, 400);
  }

  &__label-text {
    color: var(--ui-checkbox-label-color, #fff);
    font-size: var(--ui-checkbox-label-font-size, 14px);
    line-height: var(--ui-checkbox-label-line-height, 20px);
  }

  &__sublabel-text {
    color: var(--ui-checkbox-sublabel-color, #ccc);
    font-size: var(--ui-checkbox-sublabel-font-size, 12px);
    line-height: var(--ui-checkbox-sublabel-line-height, 16px);
  }

  &_is-checked & {
    &__overlay {
      border-color: var(--ui-checkbox-checked-border-color, #fff);
      background-color: var(--ui-checkbox-checked-bg, #fff);

      @include respond-to(xl) {
        &:hover {
          background-color: var(--ui-checkbox-checked-hover-bg, #dfdfdf);
        }
      }
    }

    &__overlay-icon {
      display: inline-flex;
      color: var(--ui-checkbox-checked-icon-color, #000);
    }
  }

  &_is-disabled & {
    &__overlay {
      border-color: var(--ui-checkbox-disabled-border-color, #b5b5b5);
      background-color: var(--ui-checkbox-disabled-bg, #b5b5b5);
    }

    &__overlay-icon {
      color: var(--ui-checkbox-disabled-checked-icon-color, #e4e4e4);
    }

    &__input {
      cursor: not-allowed;
    }

    &__label-container {
      cursor: not-allowed;
    }
  }
}
</style>

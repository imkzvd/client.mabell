<template>
  <div class="ui-input">
    <transition v-if="label" name="slide-fade">
      <label
        v-show="showLabel"
        :for="id"
        :class="cssLabelClasses"
        aria-hidden="true"
      >
        {{ label }}
      </label>
    </transition>

    <input
      :id="id"
      :value="modelValue"
      :type="isPasswordVisible ? 'text' : type"
      :name="name"
      :placeholder="placeholder"
      :disabled="isDisabled"
      :minlength="minLength"
      :maxlength="maxLength"
      :readonly="isReadonly"
      autocomplete="off"
      :required="isRequired"
      :aria-label="label || name"
      :class="cssInputClasses"
      @input="onInput"
      @change="onChange"
      @blur="emit('blur')"
    />

    <UIIconButton
      v-if="type === UIInputTypes.password"
      :icon="isPasswordVisible ? 'uil:eye' : 'uil:eye-slash'"
      icon-size="20"
      :is-disabled="isDisabled"
      :aria-label="!isPasswordVisible ? 'Show password' : 'Hide password'"
      :title="!isPasswordVisible ? 'Show password' : 'Hide password'"
      class="ui-input__visible-password-button"
      @click="onVisiblePasswordButtonClick"
    />

    <UIIconButton
      v-if="type !== UIInputTypes.password && isClearable"
      v-show="modelValue"
      icon="uil:times-circle"
      class="ui-input__clearable-button"
      icon-size="20"
      aria-label="Clear field"
      @click="onClearableButtonClick"
    />
  </div>
</template>

<script setup lang="ts">
import { UIFormContextKey, UIFormItemContextKey } from '~/shared/components/UI/UIForm/constants';
import { type UIInputProps, type UIInputEmits, UIInputTypes, UIInputSizes } from '~/shared/components/UI/UIInput/types';

const UIFormContext = inject(UIFormContextKey);
const UIFormItemContext = inject(UIFormItemContextKey);

const props = withDefaults(defineProps<UIInputProps>(), {
  id: crypto.randomUUID(),
  type: UIInputTypes.text,
  size: UIInputSizes.md,
});
const emit = defineEmits<UIInputEmits>();

const baseClass: string = 'ui-input';
const showLabel = computed<boolean>(() => !!props.label && !!props.modelValue);
const isPasswordVisible = ref<boolean>(false);
const cssInputClasses = computed(() => {
  const inputClass = `${baseClass}__input`;

  return {
    [inputClass]: true,
    [`${inputClass}_size_${props.size}`]: props.size,
    [`${inputClass}_type_${props.type}`]: props.type,
    [`${inputClass}_is-disabled`]: props.isDisabled,
    [`${inputClass}_is-clearable`]: props.isClearable,
    [`${inputClass}_is-not-valid`]: UIFormItemContext?.isInvalid,
  };
});
const cssLabelClasses = computed(() => {
  const inputClass = `${baseClass}__label`;

  return {
    [inputClass]: true,
    [`${inputClass}_size_${props.size}`]: props.size,
  };
});

function onInput(e: Event) {
  if (UIFormItemContext?.isInvalid) {
    UIFormItemContext?.clearValidate();
  }

  const { value } = e.currentTarget as HTMLInputElement;

  emit('update:modelValue', value);
  emit('input', value);
}

function onChange(e: Event) {
  UIFormItemContext?.validate();

  const { value } = e.currentTarget as HTMLInputElement;

  emit('change', value);
}

function onVisiblePasswordButtonClick() {
  isPasswordVisible.value = !isPasswordVisible.value;
}

function onClearableButtonClick() {
  emit('update:modelValue', '');
  emit('input', '');
  emit('change', '');
}
</script>

<style lang="scss" scoped>
.ui-input {
  --ui-icon-button-color: var(--ui-input-icon-color, gray);
  --ui-icon-button-hover-color: var(--ui-input-icon-color, black);
  position: relative;
  font-size: var(--ui-input-text, 14px);
  font-family: var(--ui-input-ff, Arial);

  &__input {
    width: 100%;
    background-color: var(--ui-input-bg, white);
    color: var(--ui-input-text, black);
    border-radius: var(--ui-input-rounded, 4px);
    border-width: 2px;
    border-style: solid;
    border-color: var(--ui-input-bg, white);
    padding-inline: 12px;
    font-weight: 400;
    line-height: 24px;
    outline: none;

    &:focus {
      border-color: var(--ui-input-bg, white);
    }

    &::placeholder {
      color: var(--ui-input-placeholder-color, gray);
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      background-color: var(--ui-input-bg, white) !important;
      background-clip: content-box !important;
      border-color: var(--ui-input-bg, white) !important;
      box-shadow: 0 0 0 60px var(--ui-input-bg, white) inset !important;
    }

    &_size {
      &_sm {
        height: 32px;
        font-size: 14px;
      }

      &_md {
        height: 40px;
        font-size: 14px;
      }

      &_lg {
        height: 48px;
        font-size: 16px;
      }
    }

    &_type {
      &_password {
        padding-right: 48px;
      }
    }

    &_is-disabled {
      background-color: var(--ui-input-disabled-bg, gray);
      color: var(--ui-input-disabled-text, darkgray);
      border-color: var(--ui-input-disabled-bg, gray);
      cursor: not-allowed;

      &::placeholder {
        color: var(--ui-input-disabled-text, darkgray);
      }
    }

    &_is-not-valid {
      border-color: var(--error-color, red);
    }

    &_is-clearable {
      padding-right: 48px;
    }
  }

  &__label {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transform: translateY(-100%);
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color: var(--ui-input-label-color, white);

    &_size {
      &_lg {
        font-size: 14px;
        top: -2px;
      }
    }
  }

  &__visible-password-button {
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
  }

  &__clearable-button {
    position: absolute;
    top: 50%;
    right: 14px;
    transform: translateY(-50%);
  }
}
</style>

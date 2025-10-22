<template>
  <div :class="`${baseClass}-item`">
    <div :class="`${baseClass}-item__content`">
      <slot name="default" />
    </div>

    <transition v-if="validRules" name="slide-fade">
      <div v-show="isInvalid" :class="`${baseClass}-item__error-message`">
        {{ errorMessage }}
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import AsyncValidator from 'async-validator';
import type { ValidateError, Rule } from 'async-validator';
import {
  baseClass,
  UIFormContextKey,
  UIFormItemContextKey,
} from '~/modules/shared/components/UI/UIForm/constants';
import type {
  UIFormItemContext,
  UIFormItemProps,
} from '~/modules/shared/components/UI/UIForm/types';

const UIFormContext = inject(UIFormContextKey);

const props = defineProps<UIFormItemProps>();

const isInvalid = ref<boolean>(false);
const context: UIFormItemContext = reactive({
  isInvalid,
  validate,
  clearValidate,
});

provide<UIFormItemContext>(UIFormItemContextKey, context);

const validRules = computed<Rule | null>(() => UIFormContext?.rules?.[props.name] || null);
const validator: AsyncValidator | null = validRules.value
  ? new AsyncValidator({
      [props.name]: validRules.value,
    })
  : null;
const errorMessage = ref<string>('');

UIFormContext?.addFormItem(context);

if (validRules.value) {
  UIFormContext?.addValidFormItem(context);
}

async function validate(): Promise<boolean> {
  if (!validator || !UIFormContext?.state) return true;

  try {
    await validator.validate({
      [props.name]: UIFormContext?.state[props.name],
    });

    return true;
  } catch (e) {
    const { errors } = e as { errors: ValidateError[] };
    const [{ message }] = errors;

    isInvalid.value = true;
    errorMessage.value = message || 'Error';

    return false;
  }
}

function clearValidate(): void {
  isInvalid.value = false;
  errorMessage.value = '';
}
</script>

<style scoped lang="scss">
.ui-form-item {
  position: relative;
  margin-bottom: 32px;

  &:not(:last-child) {
    margin-bottom: 32px;
  }

  &__content {
    position: relative;
    z-index: 1;
  }

  &__error-message {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;
    transform: translateY(-100%);
    color: var(--error-color, red);
    font-size: 12px;

    @include respond-to(xl) {
      top: -2px;
    }
  }
}
</style>

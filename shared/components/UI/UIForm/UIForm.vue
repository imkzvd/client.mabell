<template>
  <form role="form" :class="`${baseClass}`" @submit.prevent="onSubmit">
    <slot name="default" />
  </form>
</template>

<script setup lang="ts">
import { baseClass, UIFormContextKey } from '~/shared/components/UI/UIForm/constants';
import type {
  UIFormProps,
  UIFormEmits,
  UIFormContext,
  UIFormItemContext,
} from '~/shared/components/UI/UIForm/types';

const props = defineProps<UIFormProps>();
const emit = defineEmits<UIFormEmits>();

const formItems = ref<UIFormItemContext[]>([]);
const validFormItems = ref<UIFormItemContext[]>([]);
const isInvalid = computed(() => {
  return validFormItems.value.some(({ isInvalid }) => isInvalid);
});

watch(isInvalid, (v: boolean) => {
  v ? emit('fail-valid') : emit('success-valid');
});

provide<UIFormContext>(
  UIFormContextKey,
  reactive({
    state: props.state,
    rules: props.rules,
    isInvalid,
    addFormItem,
    addValidFormItem,
  }),
);

async function onSubmit(e: Event): Promise<void> {
  if (isInvalid.value) return;

  await validate();

  if (isInvalid.value) return;

  emit('submit', e);
}

function addFormItem(item: UIFormItemContext): void {
  formItems.value.push(item);
}

function addValidFormItem(item: UIFormItemContext): void {
  validFormItems.value.push(item);
}

async function validate(): Promise<boolean> {
  const validatedItems = await Promise.all(
    validFormItems.value.map(({ validate }) => validate()),
  );

  return validatedItems.some((isInvalid) => isInvalid);
}
</script>

<style scoped lang="scss">
</style>

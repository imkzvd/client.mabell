<template>
  <component :is="tag" class="ui-text" :class="computedRootCssClasses">
    <slot name="default" />
  </component>
</template>

<script setup lang="ts">
import { UIAlignments } from '~/modules/shared/components/UI/types';
import type { UITextProps } from '~/modules/shared/components/UI/UIText/types';

const props = withDefaults(defineProps<UITextProps>(), {
  lineClamp: null,
  tag: 'p',
  appearance: 'primary',
  size: 'inherit',
  align: UIAlignments.left,
});

const computedRootCssClasses = computed<Record<string, boolean>>(() => ({
  [`ui-text_appearance_${props.appearance}`]: !!props.appearance,
  [`ui-text_align_${props.align}`]: !!props.align,
  [`ui-text_is-truncated`]: !!props.maxRows,
  [`ui-text_is-bold`]: props.isBold,
}));
</script>

<style scoped lang="scss">
.ui-text {
  font-size: var(--font-size, v-bind(size));

  &_appearance {
    @include text-appearance();
  }

  &_align {
    @include text-align();
  }

  &_is-truncated {
    @include text-ellipsis(var(--max-rows, v-bind(maxRows)));
  }

  &_is-bold {
    font-family: var(--bold-font, sans-serif);
  }
}
</style>

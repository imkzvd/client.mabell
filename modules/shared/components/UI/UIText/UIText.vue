<template>
  <component :is="tag" class="ui-text" :class="computedRootCssClasses">
    <slot name="default" />
  </component>
</template>

<script setup lang="ts">
import type { UITextProps } from "~/modules/shared/components/UI/UIText/types";

const props = withDefaults(defineProps<UITextProps>(), {
  lineClamp: null,
  tag: "p",
  appearance: "primary",
});

const computedRootCssClasses = computed<Record<string, boolean>>(() => ({
  [`ui-text_appearance_${props.appearance}`]: true,
  [`ui-text_ellipsis`]: !!props.lineClamp,
  [`ui-text_is-bold`]: props.isBold,
}));
</script>

<style scoped lang="scss">
.ui-text {
  font-size: var(--font-size, 14px);

  &_appearance {
    &_default {
      color: var(--color, var(--ui-text-default-text));
    }

    &_secondary {
      color: var(--color, var(--ui-text-secondary-text));
    }
  }

  &_ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: var(--line-clamp, v-bind(lineClamp));
  }

  &_is-bold {
    font-family: var(--bold-font, sans-serif);
  }
}
</style>

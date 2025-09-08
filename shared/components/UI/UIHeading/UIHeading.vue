<template>
  <component :is="'h' + level" :class="cssClasses">
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { UIHeadingProps } from '~/shared/components/UI/UIHeading/types.ts';

const props = withDefaults(defineProps<UIHeadingProps>(), {
  level: 1,
});

const baseClass = 'ui-heading';
const cssClasses = computed<Record<string, boolean>>(() => ({
  [baseClass]: true,
  [`${baseClass}_level_${props.level}`]: true,
  [`${baseClass}_leading_none`]: props.leadingNone,
}));
</script>

<style scoped lang="scss">
.ui-heading {
  color: var(--ui-heading-color, white);

  &_level {
    &_1 {
      font-size: var(--size, 32px);
      font-family: var(--title-font, sans-serif);
    }

    &_2 {
      font-size: var(--size, 20px);
      font-family: var(--bold-font, sans-serif);
    }
  }

  &_leading_none {
    line-height: 1;
  }
}
</style>

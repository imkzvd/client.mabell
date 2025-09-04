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
  font-family: var(--title-font, sans-serif);

  &_level {
    &_1 {
      font-size: 32px;
    }

    &_2 {
      font-size: 20px;
    }

    &_3 {
      font-size: 16px;
    }
  }

  &_leading_none {
    line-height: 1;
  }
}
</style>

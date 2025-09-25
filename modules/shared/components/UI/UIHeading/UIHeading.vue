<template>
  <component :is="'h' + level" :class="cssClasses">
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { UIHeadingProps } from '~/modules/shared/components/UI/UIHeading/types.ts';

const props = withDefaults(defineProps<UIHeadingProps>(), {
  level: 1,
});

const baseClass = 'ui-heading';
const cssClasses = computed<Record<string, boolean>>(() => ({
  [baseClass]: true,
  [`${baseClass}_level_${props.level}`]: true,
  [`${baseClass}_leading_none`]: props.leadingNone,
  [`${baseClass}_ellipsis`]: props.lineClamp,
}));
</script>

<style scoped lang="scss">
.ui-heading {
  color: var(--ui-heading-color, white);

  &_level {
    &_1 {
      font-size: 28px;
      font-family: var(--title-font, sans-serif);

      @include respond-to(xs) {
        font-size: 32px;
      }

      @include respond-to(md) {
        font-size: 48px;
      }

      @include respond-to(xl) {
        font-size: 52px;
      }

      @include respond-to('2xl') {
        font-size: 64px;
      }
    }

    &_2 {
      font-size: 16px;
      font-family: var(--bold-font, sans-serif);

      @include respond-to(xs) {
        font-size: 18px;
      }

      @include respond-to(md) {
        font-size: 20px;
      }

      @include respond-to(xl) {
        font-size: 22px;
      }

      @include respond-to('2xl') {
        font-size: 24px;
      }
    }
  }

  &_leading_none {
    line-height: 1;
  }

  &_ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: var(--line-clamp, v-bind(lineClamp));
  }
}
</style>

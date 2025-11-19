<template>
  <component :is="'h' + level" class="ui-heading" :class="rootCSSClasses">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { UIAlignments } from '~/modules/shared/components/UI/types';
import type { UIHeadingProps } from '~/modules/shared/components/UI/UIHeading/types.ts';

const props = withDefaults(defineProps<UIHeadingProps>(), {
  level: 1,
  align: UIAlignments.left,
});

const rootCSSClass = 'ui-heading';
const rootCSSClasses = computed<Record<string, boolean>>(() => ({
  [`${rootCSSClass}_level_${props.level}`]: true,
  [`${rootCSSClass}_leading_none`]: props.leadingNone,
  [`${rootCSSClass}_is-truncated`]: !!props.maxRows,
  [`${rootCSSClass}_align_${props.align}`]: !!props.align,
}));
</script>

<style scoped lang="scss">
.ui-heading {
  color: var(--ui-heading-color, white);
  font-family: var(--bold-font, sans-serif);

  &_level {
    &_1 {
      font-size: 24px;

      @include respond-to(xs) {
        font-size: 28px;
      }

      @include respond-to(md) {
        font-size: 32px;
      }
    }

    &_2 {
      font-size: 18px;

      @include respond-to(xs) {
        font-size: 20px;
      }

      @include respond-to(md) {
        font-size: 22px;
      }
    }
  }

  &_leading_none {
    line-height: 1.2;
  }

  &_is-truncated {
    @include text-ellipsis(var(--max-rows, v-bind(maxRows)));
  }

  &_align {
    @include text-align();
  }
}
</style>

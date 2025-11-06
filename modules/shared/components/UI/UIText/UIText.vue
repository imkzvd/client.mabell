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
  [`ui-text_appearance_${props.appearance}`]: true,
  [`ui-text_ellipsis`]: !!props.lineClamp,
  [`ui-text_is-bold`]: props.isBold,
  [`ui-text_align_${props.align}`]: props.align,
}));
</script>

<style scoped lang="scss">
.ui-text {
  font-size: var(--font-size, v-bind(size));

  &_appearance {
    &_primary {
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
    word-break: break-word;
  }

  &_is-bold {
    font-family: var(--bold-font, sans-serif);
  }

  &_align {
    &_left {
      text-align: left;
    }

    &_center {
      text-align: center;
    }

    &_right {
      text-align: right;
    }
  }
}
</style>

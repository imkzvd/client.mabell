<template>
  <component :is="tag" :class="computedRootCSSClasses">
    <slot name="default" />
  </component>
</template>

<script setup lang="ts">
import type { UITextProps } from './types';

const props = withDefaults(defineProps<UITextProps>(), {
  lineClamp: null,
  tag: 'p',
});

// Нужен ли UIText?
// +: ограничения тегов (зачем?)
// +: сайзы внутри компонента (зачем?)
// +: вес шрифта внутри компонента (зачем?)
// +: алайн внутри компонента (зачем?)
// +: транк внутри компонента для обрезания максимального кол-ва строк
// +: сокращение общего кол-ва css кода (критично ли, при наличии gzip?)
// +:
// +:

// -: динамическое изменение размера с помощью useViewport
// -: перенос логики изменения стилей на js, вместо классического css
// -: "раздутие" html верстки
// -:
// -:
// -:

const rootCSSClass: string = 'ui-text';
const computedRootCSSClasses = computed(() => ({
  [rootCSSClass]: true,
  [`${rootCSSClass}_align_${props.align}`]: props.align,
  [`${rootCSSClass}_is-truncated`]: !!props.maxRows,
}));
</script>

<style scoped lang="scss">
.ui-text {
  font-weight: v-bind(weight);

  &_size {
    &_xs {
      font-size: 0.75rem;
      line-height: 1rem;
    }

    &_sm {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }

    &_base {
      font-size: 1rem;
      line-height: 1.5rem;
    }

    &_lg {
      font-size: 1.125rem;
      line-height: 1.75rem;
    }

    &_xl {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }

    &_2xl {
      font-size: 1.5rem;
      line-height: 2rem;
    }

    &_3xl {
      font-size: 1.875rem;
      line-height: 2.25rem;
    }

    &_4xl {
      font-size: 2.25rem;
      line-height: 2.5rem;
    }

    &_5xl {
      font-size: 3rem;
      line-height: 3rem;
    }

    &_6xl {
      font-size: 3.75rem;
      line-height: 3.75rem;
    }

    &_7xl {
      font-size: 4.5rem;
      line-height: 4.5rem;
    }

    &_8xl {
      font-size: 6rem;
      line-height: 6rem;
    }

    &_9xl {
      font-size: 8rem;
      line-height: 8rem;
    }
  }

  &_align {
    @include text-align();
  }

  &_is-truncated {
    @include text-ellipsis(var(--max-rows, v-bind(maxRows)));
  }
}
</style>

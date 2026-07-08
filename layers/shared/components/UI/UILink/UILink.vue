<template>
  <NuxtLink :to="to" class="ui-link" :class="rootCSSClasses">
    <slot name="default" />
  </NuxtLink>
</template>

<script setup lang="ts">
import type { UILinkProps } from './types';

const props = withDefaults(defineProps<UILinkProps>(), {
  isHoverUnderlined: true,
});

const rootCSSClass: string = 'ui-link';
const rootCSSClasses = computed(() => ({
  [rootCSSClass]: true,
  [`${rootCSSClass}_is-underlined`]: props.isUnderlined,
  [`${rootCSSClass}_is-hover-underlined`]: props.isHoverUnderlined,
  [`${rootCSSClass}_is-truncated`]: props.maxRows,
}));
</script>

<style scoped lang="scss">
.ui-link {
  color: var(--color, var(--ui-link-color));

  @include hover {
    color: var(--hover-color, var(--ui-link-hover-color));
    transition: color 0.25s;
  }

  &_is-hover-underlined {
    @include hover {
      text-decoration: underline;
    }
  }

  &_is-underlined {
    text-decoration: underline;
  }

  &_is-truncated {
    @include line-clamp(var(--max-rows, v-bind(maxRows)));
  }
}
</style>

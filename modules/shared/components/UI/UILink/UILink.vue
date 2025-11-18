<template>
  <NuxtLink :to="to" class="ui-link" :class="rootCSSClasses">
    <slot name="default" />
  </NuxtLink>
</template>

<script setup lang="ts">
import { type UILinkProps } from '~/modules/shared/components/UI/UILink/types';

const props = withDefaults(defineProps<UILinkProps>(), {
  isHoverUnderlined: true,
});

const rootCSSClass: string = 'ui-link';
const rootCSSClasses = computed<Record<string, boolean>>(() => ({
  [`${rootCSSClass}_is-underlined`]: props.isUnderlined,
  [`${rootCSSClass}_is-hover-underlined`]: props.isHoverUnderlined,
  [`${rootCSSClass}_is-truncated`]: !!props.maxRows,
}));
</script>

<style scoped lang="scss">
.ui-link {
  color: var(--color, var(--ui-link-color));

  @include respond-to(xl) {
    transition: color 0.25s;

    &:hover {
      color: var(--hover-color, var(--ui-link-hover-color));
    }

    &_is-hover-underlined {
      &:hover {
        text-decoration: underline;
      }
    }
  }

  &_is-underlined {
    text-decoration: underline;
  }

  &_is-truncated {
    @include text-ellipsis(var(--max-rows, v-bind(maxRows)));
  }
}
</style>

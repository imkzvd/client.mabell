<template>
  <NuxtLink :to="to" :class="cssClasses">
    <slot name="default" />
  </NuxtLink>
</template>

<script setup lang="ts">
import { type UILinkProps } from '~/modules/shared/components/UI/UILink/types';

const props = withDefaults(defineProps<UILinkProps>(), {
  hoverUnderline: true,
  lineClamp: null,
});

const baseClass: string = "ui-link";
const cssClasses = computed(() => ({
  [baseClass]: true,
  [`${baseClass}_underline`]: props.underline,
  [`${baseClass}_hover-underline`]: props.hoverUnderline,
  [`${baseClass}_ellipsis`]: !!props.lineClamp,
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

    &_hover-underline {
      &:hover {
        text-decoration: underline;
      }
    }
  }

  &_underline {
    text-decoration: underline;
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

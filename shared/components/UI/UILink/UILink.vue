<template>
  <NuxtLink :to="to" :class="cssClasses">
    <slot name="default" />
  </NuxtLink>
</template>

<script setup lang="ts">
import type { UILinkProps } from "~/shared/components/UI/UILink/types";

const props = defineProps<UILinkProps>();

const baseClass: string = "ui-link";
const cssClasses = computed(() => ({
  [baseClass]: true,
  [`${baseClass}_underline`]: props.underline,
}));
</script>

<style scoped lang="scss">
.ui-link {
  color: var(--ui-link-color, white);
  font-size: var(--ui-link-font-size, 16px);

  @include respond-to(xl) {
    &:hover {
      text-decoration: underline;
    }
  }

  &_underline {
    text-decoration: underline;
  }
}
</style>

<template>
  <section class="ui-section">
    <div v-if="$slots.heading || heading" class="container">
      <UIHeading level="2" class="ui-section__heading">
        <slot name="heading">
          {{ heading }}
        </slot>
      </UIHeading>
    </div>

    <div v-if="withContainer" class="container">
      <slot name="default" />
    </div>
    <template v-else>
      <slot name="default" />
    </template>
  </section>
</template>

<script setup lang="ts">
import type { UISectionProps } from '~/modules/shared/components/UI/UISection/types';

withDefaults(defineProps<UISectionProps>(), {
  withContainer: false,
});
</script>

<style scoped lang="scss">
.ui-section {
  &:not(:last-child) {
    margin-bottom: 16px;
  }

  @include respond-to(md) {
    &:not(:last-child) {
      margin-bottom: 32px;
    }
  }

  @include respond-to(lg) {
    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }

  &__heading {
    margin-bottom: 16px;
  }
}
</style>

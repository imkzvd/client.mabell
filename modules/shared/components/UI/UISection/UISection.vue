<template>
  <section class="ui-section">
    <div v-if="$slots.heading || heading" class="container">
      <UIHeading level="2" class="ui-section__heading">
        <slot name="heading">
          {{ heading }}
        </slot>
      </UIHeading>
    </div>

    <div v-if="contentContainer" class="container">
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
  contentContainer: true,
})
</script>

<style scoped lang="scss">
.ui-section {
  &__heading {
    margin-bottom: 16px;
  }
}
</style>
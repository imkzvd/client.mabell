<template>
  <section class="ui-section">
    <template v-if="$slots.heading || heading">
      <div :class="headingContainer ? 'container' : 'container-fluid'">
        <slot name="heading">
          <UIHeading level="2" class="ui-section__heading">
            {{ heading }}
          </UIHeading>
        </slot>
      </div>
    </template>

    <div :class="contentContainer ? 'container' : 'container-fluid'">
      <slot name="default" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { UISectionProps } from '~/modules/shared/components/UI/UISection/types';

withDefaults(defineProps<UISectionProps>(), {
  headingContainer: false,
  contentContainer: false,
});
</script>

<style scoped lang="scss">
.ui-section {
  padding-block: var(--section-y-padding, 12px);

  &__heading {
    margin-bottom: var(--section-heading-bottom-margin, 16px);
  }
}
</style>

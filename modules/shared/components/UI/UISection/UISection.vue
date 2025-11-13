<template>
  <section class="ui-section" :class="rootCSSClasses">
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

const props = withDefaults(defineProps<UISectionProps>(), {
  headingContainer: false,
  contentContainer: false,
});

const rootCSSClass = 'ui-section';
const rootCSSClasses = computed<Record<string, boolean>>(() => ({
  [`${rootCSSClass}_no-padding`]: props.noPadding,
}));
</script>

<style scoped lang="scss">
.ui-section {
  padding-block: var(--section-y-padding, 12px);

  &_no-padding {
    padding-block: 0;
  }

  &__heading {
    margin-bottom: var(--section-heading-bottom-margin, 16px);
  }
}
</style>

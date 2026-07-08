<template>
  <UILink :to="to" :is-hover-underlined="false" class="card-link">
    <UIImg :path="imgPath" :alt="imgAlt" :is-rounded="imgRounded" class="card-link__img" />

    <div class="card-link__details">
      <p class="card-link__title">
        <slot name="title" />
      </p>

      <UIText
        v-if="$slots.subtitle"
        appearance="secondary"
        max-rows="1"
        :align="textAlign"
        class="card-link__subtitle"
      >
        <slot name="subtitle" />
      </UIText>
    </div>
  </UILink>
</template>

<script setup lang="ts">
import type { CardLinkProps } from './types';

defineProps<CardLinkProps>();
</script>

<style scoped lang="scss">
.card-link {
  &__img {
    --width: var(--card-link-image-width, 80px);
    aspect-ratio: 1;

    @include mb(2);

    @include respond-to(lg) {
      @include mb(3);
    }
  }

  &__title {
    @include text-sm;

    @include respond-to(md) {
      @include text-base;
    }
  }

  &__subtitle {
    @include text-xs;

    @include respond-to(md) {
      @include text-sm;
    }

    & > *:not(:last-child)::after {
      content: '•';

      @include mx(1);
    }
  }
}
</style>

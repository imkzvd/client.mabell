<template>
  <UILink :to="to" :hover-underline="false" class="card-link">
    <UIImg :path="imgPath" :alt="imgAlt" :is-rounded="imgRounded" class="card-link__img" />

    <div class="card-link__details">
      <UIText :line-clamp="1" :align="textAlign" class="card-link__title">
        <slot name="title" />
      </UIText>

      <UIText
        v-if="$slots.subtitle"
        appearance="secondary"
        :line-clamp="1"
        :align="textAlign"
        class="card-link__subtitle"
      >
        <slot name="subtitle" />
      </UIText>
    </div>
  </UILink>
</template>

<script setup lang="ts">
import type { CardLinkProps } from '~/modules/shared/components/CardLink/types';

defineProps<CardLinkProps>();
</script>

<style scoped lang="scss">
.card-link {
  &__img {
    --width: var(--card-link-image-width, 80px);
    aspect-ratio: 1;
    margin-bottom: 8px;

    @include respond-to(lg) {
      margin-bottom: 12px;
    }
  }

  &__title {
    font-size: 14px;

    @include respond-to(md) {
      font-size: 16px;
    }
  }

  &__subtitle {
    font-size: 12px;

    @include respond-to(md) {
      font-size: 14px;
    }

    & > *:not(:last-child)::after {
      content: '•';
      margin-inline: 4px;
    }
  }
}
</style>

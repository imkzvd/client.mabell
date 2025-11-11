<template>
  <NuxtLink :to="to" class="top-results-item">
    <UIImg :path="imgPath" :alt="imgAlt" :is-rounded="imgRounded" class="top-results-item__img" />

    <div class="top-results-item__details">
      <div class="top-results-item__top-line">
        <slot name="top-line" />
      </div>

      <div class="top-results-item__middle-line">
        <slot name="middle-line" />
      </div>

      <div class="top-results-item__bottom-line">
        <slot name="bottom-line" />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { TopResultsItemProps } from '~/modules/search/components/TopResults/TopResultsItem/types';

defineProps<TopResultsItemProps>();
</script>

<style scoped lang="scss">
.top-results-item {
  display: flex;
  align-items: center;
  column-gap: 16px;
  font-size: 12px;

  &__img {
    --width: 60px;
    --height: 60px;
    flex-shrink: 0;
  }

  &__top-line {
    line-height: 1;
  }

  &__middle-line {
    font-size: 14px;
  }
}
</style>

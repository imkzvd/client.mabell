<template>
  <div class="artist-links">
    <div v-for="(item, index) of items" :key="item.id" class="artist-links__item">
      <UILink
        appearance="secondary"
        :hover-underline="hoverUnderline"
        :to="{ name: 'artist', params: { id: item.id } }"
        class="artist-links__link"
        @click.stop
      >
        {{ item.name }}
      </UILink>
      <span v-if="index !== items.length - 1" :class="separatorCssClass">
        <NuxtIcon v-if="dotSeparator" name="i-ph-dot-outline-fill" />
        <template v-else>,</template>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ArtistLinksProps } from '~/modules/artist/components/ArtistLinks/types';

const props = defineProps<ArtistLinksProps>();

const baseClass = 'artist-links';
const separatorCssClass = computed(() => ({
  [`${baseClass}__separator`]: true,
  [`${baseClass}__separator_dot`]: props.dotSeparator,
}));
</script>

<style scoped lang="scss">
.artist-links {
  font-size: var(--size, inherit);

  &__item {
    display: inline-flex;
    align-items: center;

    &:not(:last-child) {
      margin-right: 2px;
    }
  }

  &__separator {
    color: var(--color, var(--ui-link-color));

    &_dot {
      display: inline-flex;
    }
  }
}
</style>

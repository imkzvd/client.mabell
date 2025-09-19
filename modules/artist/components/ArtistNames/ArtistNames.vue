<template>
  <UIText class="artist-names" appearance="secondary" :line-clamp="lineClamp">
    <span v-for="(item, index) of allArtistNames" :key="index" class="artist-names__item" :class="itemCssClass">
      {{ item }}
    </span>
  </UIText>
</template>

<script setup lang="ts">
import { type ArtistNamesProps, ArtistNamesSeparators } from '~/modules/artist/components/ArtistNames/types';

const props = withDefaults(defineProps<ArtistNamesProps>(), {
  separator: ArtistNamesSeparators.comma,
});

const baseClass = 'artist-names';
const itemCssClass = computed(() => ({
  [`${baseClass}__item_separator_${props.separator}`]: true,
}));
const allArtistNames = computed(() => props.items.map(({ name }) => name));
</script>

<style scoped lang="scss">
.artist-names {
  &__item {
    &_separator {
      &_comma {
        &:not(:last-child)::after {
          content: ',';
          margin-right: 2px;
        }
      }

      &_dot {
        &:not(:last-child)::after {
          content: '•';
          margin-inline: 2px;
        }
      }
    }
  }
}
</style>

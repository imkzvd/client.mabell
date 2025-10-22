<template>
  <div class="artist-links">
    <UILink
      v-for="(item, index) of items"
      :key="item.id"
      :to="{ name: 'artist-id', params: { id: item.id } }"
      appearance="secondary"
      :hover-underline="hoverUnderline"
      class="artist-links__link"
      :class="linkCssClasses"
      @click.stop
    >
      {{ item.name }}
    </UILink>
  </div>
</template>

<script setup lang="ts">
import {
  type ArtistLinksProps,
  ArtistLinksSeparators,
} from '~/modules/artist/components/ArtistLinks/types';

const props = withDefaults(defineProps<ArtistLinksProps>(), {
  separator: ArtistLinksSeparators.comma,
});

const baseClass = 'artist-links';
const linkCssClasses = computed(() => ({
  [`${baseClass}__link_separator_${props.separator}`]: true,
}));
</script>

<style scoped lang="scss">
.artist-links {
  font-size: var(--size, inherit);

  &__link {
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
          margin-inline: 4px;
        }
      }
    }
  }
}
</style>

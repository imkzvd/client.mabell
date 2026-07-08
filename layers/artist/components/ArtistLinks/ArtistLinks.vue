<template>
  <div :class="rootCSSClasses">
    <UILink
      v-for="item of items"
      :key="item.id"
      :to="{ name: 'artist-id', params: { id: item.id } }"
      :is-hover-underlined="hoverUnderline"
      class="artist-links__link"
      :class="linkCSSClasses"
      @click.stop
    >
      {{ item.name }}
    </UILink>
  </div>
</template>

<script setup lang="ts">
import UILink from '../../../shared/components/UI/UILink/UILink.vue';
import type { ArtistLinksProps } from './types';

const props = withDefaults(defineProps<ArtistLinksProps>(), {
  separator: 'comma',
});

const rootCSSClass = 'artist-links';
const rootCSSClasses = computed(() => ({
  [rootCSSClass]: true,
  [`${rootCSSClass}_is-truncated`]: props.isTruncated,
}));
const linkCSSClasses = computed<Record<string, boolean>>(() => ({
  [`${rootCSSClass}__link_separator_${props.separator}`]: !!props.separator,
}));
</script>

<style scoped lang="scss">
.artist-links {
  display: flex;
  flex-wrap: wrap;
  font-size: var(--size, inherit);

  &_is-truncated {
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    word-break: break-all;
  }

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

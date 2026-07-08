<template>
  <div :class="rootCSSClasses">
    <NuxtImg v-if="url" :src="url" :alt="alt" />
    <NuxtIcon
      v-else
      role="presentation"
      aria-hidden="true"
      name="i-ph-music-note-fill"
      class="artist-avatar__icon"
    />
  </div>
</template>

<script setup lang="ts">
import type { ArtistAvatarProps } from './types';

const props = defineProps<ArtistAvatarProps>();

const rootCSSClass = 'artist-avatar';
const rootCSSClasses = computed(() => ({
  [rootCSSClass]: true,
  [`${rootCSSClass}_no-cover`]: !props.url,
}));
</script>

<style scoped lang="scss">
.artist-avatar {
  height: var(--size, 80px);
  width: var(--size, 80px);
  overflow: hidden;
  border-radius: 100%;

  &_no-cover {
    border: 2px solid var(--border-color, gray);

    @include flex(center, center);
  }

  &__icon {
    height: calc(var(--size, 80px) / 4);
    width: calc(var(--size, 80px) / 4);
    color: var(--main-text, white);
  }
}
</style>

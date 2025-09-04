<template>
  <div class="artist-avatar" :class="rootCssClasses">
    <img v-if="url" :src="url" :alt="alt" />
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
import type { ArtistAvatarProps } from "~/modules/artist/components/ArtistAvatar/types";

const props = withDefaults(defineProps<ArtistAvatarProps>(), {
  size: '140px',
});

const baseClass = 'artist-avatar';
const rootCssClasses = computed<Record<string, boolean>>(() => ({
  [`${baseClass}_no-cover`]: !props.url,
}))
</script>

<style scoped lang="scss">
.artist-avatar {
  --size: v-bind(props.size);

  height: var(--size);
  width: var(--size);
  overflow: hidden;
  border-radius: 100%;

  &_no-cover {
    display: flex;
    align-items: center;
    justify-content: center;
    border-width: 0.5px;
    border-style: solid;
    border-color: var(--border-color, gray);
  }

  &__icon {
    height: calc(var(--size) / 4);
    width: calc(var(--size) / 4);
    color: var(--main-text, white);
  }
}
</style>

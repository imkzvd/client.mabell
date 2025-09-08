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

const props = defineProps<ArtistAvatarProps>();

const baseClass = 'artist-avatar';
const rootCssClasses = computed<Record<string, boolean>>(() => ({
  [`${baseClass}_no-cover`]: !props.url,
}))
</script>

<style scoped lang="scss">
.artist-avatar {
  height: var(--size, 80px);
  width: var(--size, 80px);
  overflow: hidden;
  border-radius: 100%;

  &_no-cover {
    display: flex;
    align-items: center;
    justify-content: center;
    border-width: 2px;
    border-style: solid;
    border-color: var(--border-color, gray);
  }

  &__icon {
    height: calc(var(--size, 80px) / 4);
    width: calc(var(--size, 80px) / 4);
    color: var(--main-text, white);
  }
}
</style>

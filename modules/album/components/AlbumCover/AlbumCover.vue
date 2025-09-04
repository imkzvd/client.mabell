<template>
  <div class="album-cover" :class="rootCssClasses">
    <img v-if="url" :src="url" :alt="alt" />
    <NuxtIcon
      v-else
      role="presentation"
      aria-hidden="true"
      name="i-ph-music-note-fill"
      class="album-cover__icon"
    />
  </div>
</template>

<script setup lang="ts">
import type { AlbumCoverProps } from "~/modules/album/components/AlbumCover/types";

const props = withDefaults(defineProps<AlbumCoverProps>(), {
  size: '80px',
});

const baseClass = 'album-cover';
const rootCssClasses = computed<Record<string, boolean>>(() => ({
  [`${baseClass}_no-cover`]: !props.url,
}));
</script>

<style scoped lang="scss">
.album-cover {
  --size: v-bind(props.size);

  height: var(--size);
  width: var(--size);
  overflow: hidden;
  border-radius: var(--border-rounded, 4px);

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

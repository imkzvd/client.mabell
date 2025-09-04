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
import type { TrackCoverProps } from "~/modules/artist/components/TrackCover/types";

const props = defineProps<TrackCoverProps>();

const baseClass = 'album-cover';
const rootCssClasses = computed<Record<string, boolean>>(() => ({
  [`${baseClass}_no-cover`]: !props.url,
}));
</script>

<style scoped lang="scss">
.album-cover {
  --album-cover-size: 80px;

  height: var(--album-cover-size);
  width: var(--album-cover-size);
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
    height: calc(var(--album-cover-size) / 4);
    width: calc(var(--album-cover-size) / 4);
    color: var(--main-text, white);
  }
}
</style>

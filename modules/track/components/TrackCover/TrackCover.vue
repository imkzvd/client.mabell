<template>
  <div :class="computedRootCssClasses">
    <NuxtImg
      v-if="url"
      :src="url"
      :alt="alt"
      format="webp"
      preload
      loading="eager"
      fetchpriority="high"
    />
    <NuxtIcon
      v-else
      role="presentation"
      aria-hidden="true"
      name="ph:music-note-fill"
      class="track-cover__icon"
    />
  </div>
</template>

<script setup lang="ts">
import type { TrackCoverProps } from '~/modules/track/components/TrackCover/types';

const props = withDefaults(defineProps<TrackCoverProps>(), {
  size: '40px',
});

const test = computed(() => props.size);
const baseCssClass = 'track-cover';
const computedRootCssClasses = computed<Record<string, boolean>>(() => ({
  [baseCssClass]: true,
  [`${baseCssClass}_no-cover`]: !props.url,
}));
</script>

<style scoped lang="scss">
.track-cover {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--size, v-bind('props.size'));
  width: var(--size, v-bind('props.size'));
  flex-shrink: 0;
  overflow: hidden;
  border-radius: var(--border-rounded);
  filter: brightness(var(--overlay, 1));

  &_no-cover {
    background-color: var(--border-color);
  }

  &__icon {
    height: calc(var(--size, v-bind('props.size')) / 3);
    width: calc(var(--size, v-bind('props.size')) / 3);
    color: var(--main-text, #ffffff);
  }
}
</style>

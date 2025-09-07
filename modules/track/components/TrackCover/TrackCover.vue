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

const props = defineProps<TrackCoverProps>();

const baseCssClass = 'track-cover';
const computedRootCssClasses = computed<Record<string, boolean>>(() => ({
  [baseCssClass]: true,
  [`${baseCssClass}_no-cover`]: !props.url,
}));
</script>

<style scoped lang="scss">
.track-cover {
  --size: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--size, 40px);
  width: var(--size, 40px);
  flex-shrink: 0;
  overflow: hidden;
  border-radius: var(--border-rounded);
  filter: brightness(var(--overlay, 1));

  &_no-cover {
    background-color: var(--border-color);
  }

  &__icon {
    height: calc(var(--size, 40px) / 3);
    width: calc(var(--size, 40px) / 3);
    color: var(--main-text, #ffffff);
  }
}
</style>

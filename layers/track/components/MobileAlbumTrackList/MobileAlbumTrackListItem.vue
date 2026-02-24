<template>
  <div
    :aria-label="item.name"
    tabindex="0"
    class="mobile-album-track-list-item"
    :class="rootCSSClasses"
  >
    <div class="mobile-album-track-list-item__column">
      <div class="mobile-album-track-list-item__index-container">
        <div class="mobile-album-track-list-item__index">
          {{ index + 1 }}
        </div>

        <IconEqualizer
          role="presentation"
          aria-hidden="true"
          :is-playing="isPlaying"
          class="mobile-album-track-list-item__equalizer-icon"
        />
      </div>
    </div>

    <div class="mobile-album-track-list-item__column">
      <div class="mobile-album-track-list-item__details">
        <div class="mobile-album-track-list-item__details-top-line">
          <UIText max-rows="1" class="mobile-album-track-list-item__name">
            {{ item.name }}
          </UIText>

          <NuxtIcon
            v-if="item.isExplicit"
            name="i-mynaui-letter-e-square-solid"
            size="16"
            class="mobile-album-track-list-item__explicit-icon"
          />
        </div>

        <div class="mobile-album-track-list-item__details-bottom-line">
          <ArtistNames :items="[...item.artists, ...item.featArtists]" />
        </div>
      </div>
    </div>

    <div class="mobile-album-track-list-item__column">
      <UIIconButton
        icon="i-ph-dots-three-outline-fill"
        icon-size="20"
        aria-label="Open track menu"
        appearance="secondary"
        @click.stop="emit('open-item-menu', $event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type {
  MobileAlbumTrackListItemProps,
  MobileAlbumTrackListItemEmits,
} from '~/modules/track/components/MobileAlbumTrackList/types';

const props = defineProps<MobileAlbumTrackListItemProps>();
const emit = defineEmits<MobileAlbumTrackListItemEmits>();

const rootCSSClass = 'mobile-album-track-list-item';

const isCurrent = computed<boolean>(() => props.item.id === props.currentItemId);
const isPlaying = computed<boolean>(() => props.item.id === props.currentItemId && props.isPlaying);
const rootCSSClasses = computed(() => ({
  [`${rootCSSClass}_is-playing`]: isPlaying.value,
  [`${rootCSSClass}_is-current`]: isCurrent.value,
}));
</script>

<style scoped lang="scss">
.mobile-album-track-list-item {
  position: relative;
  display: grid;
  grid-template-columns: 28px 1fr auto;
  align-items: center;
  gap: 8px;
  padding-block: 2px;

  @include respond-to(xs) {
    padding-block: 8px;
  }

  &_is-current & {
    &__index {
      opacity: 0;
    }

    &__equalizer-icon {
      opacity: 1;
    }
  }

  &__index-container {
    position: relative;
  }

  &__index {
    text-align: center;
    color: var(--secondary-text);
  }

  &__details-top-line {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  &__explicit-icon {
    flex-shrink: 0;
  }

  &__equalizer-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    fill: currentColor;
    opacity: 0;
  }
}
</style>

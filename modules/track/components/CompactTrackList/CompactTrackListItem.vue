<template>
  <li :aria-label="item.name" class="compact-track-list-item" :class="rootCSSClasses">
    <div class="compact-track-list-item__column">
      <div class="compact-track-list-item__cover-container">
        <UIImg :path="item.album.cover" :alt="item.name" class="compact-track-list-item__cover" />

        <IconEqualizer :is-playing="isPlaying" class="compact-track-list-item__equalizer-icon" />

        <UIIconButton
          :icon="isPlaying ? 'i-mynaui-pause-solid' : 'i-mynaui-play-solid'"
          icon-size="28"
          :is-disabled="!item.isActive"
          :aria-label="isPlaying ? 'Pause track' : 'Play track'"
          class="compact-track-list-item__action-button"
          @click.stop="isPlaying ? emit('pause-item') : emit('play-item')"
        />
      </div>
    </div>

    <div class="compact-track-list-item__column">
      <div class="compact-track-list-item__details">
        <div class="compact-track-list-item__details-top-line">
          <UILink
            :to="{ name: 'album-id', params: { id: item.album.id } }"
            :line-clamp="1"
            class="compact-track-list-item__name"
          >
            {{ item.name }}
          </UILink>

          <NuxtIcon
            v-if="item.isExplicit"
            mode="svg"
            name="i-mynaui-letter-e-square-solid"
            size="16"
          />
        </div>

        <div class="compact-track-list-item__details-bottom-line">
          <ArtistLinks
            :items="allTrackArtists"
            hover-underline
            is-truncated
            class="compact-track-list-item__artist-links"
          />
        </div>
      </div>
    </div>

    <div class="compact-track-list-item__column">
      <div class="compact-track-list-item__add-track-button">
        <UIIconButton
          aria-label="Add track"
          icon="i-mynaui-plus"
          icon-size="20"
          @click.stop="emit('add-item')"
        />
      </div>
    </div>

    <div class="compact-track-list-item__column">
      <UIText align="center" appearance="secondary" class="compact-track-list-item__duration">
        {{ convertedDuration }}
      </UIText>
    </div>

    <div class="compact-track-list-item__column">
      <UIIconButton
        icon="i-ph-dots-three-outline-fill"
        icon-size="20"
        aria-label="Track menu"
        appearance="secondary"
        @click.stop="emit('open-item-menu', $event)"
      />
    </div>
  </li>
</template>

<script setup lang="ts">
import { convertSecondsToMinute } from './utils';
import type { SimplifiedArtistRO } from '~/api/api.module';
import type {
  CompactTrackListItemProps,
  CompactTrackListItemEmits,
} from '~/modules/track/components/CompactTrackList/types';

const props = defineProps<CompactTrackListItemProps>();
const emit = defineEmits<CompactTrackListItemEmits>();

const rootCSSClass = 'compact-track-list-item';

const allTrackArtists = computed<SimplifiedArtistRO[]>(() => [
  ...props.item.artists,
  ...props.item.featArtists,
]);
const convertedDuration = computed<string | null>(() => {
  const { duration } = props.item;

  return duration ? convertSecondsToMinute(duration) : null;
});
const isCurrent = computed<boolean>(() => props.item.id === props.currentItemId);
const isPlaying = computed<boolean>(() => props.item.id === props.currentItemId && props.isPlaying);
const rootCSSClasses = computed<Record<string, boolean>>(() => ({
  [`${rootCSSClass}_is-playing`]: isPlaying.value,
  [`${rootCSSClass}_is-current`]: isCurrent.value,
}));
</script>

<style scoped lang="scss">
.compact-track-list-item {
  display: grid;
  grid-template-columns: auto 1fr auto 60px auto;
  align-items: center;
  gap: 12px;
  border-radius: var(--border-rounded, 4px);
  margin-inline: -16px;
  padding: 8px 16px;
  transition: 0.25s all;
  cursor: pointer;

  &:hover {
    background-color: var(--track-list-item-hover, gray);
  }

  &:hover & {
    &__action-button {
      opacity: 1;
      pointer-events: initial;
    }

    &__cover {
      filter: brightness(30%);
    }

    &__equalizer-icon {
      opacity: 0;
    }

    &__add-track-button {
      opacity: 1;
    }
  }

  &_is-current & {
    &__action-button {
      opacity: 1;
      pointer-events: initial;
    }

    &__cover {
      filter: brightness(30%);
    }
  }

  &_is-playing & {
    &__equalizer-icon {
      opacity: 1;
    }

    &__action-button {
      opacity: 0;
    }
  }

  &__cover-container {
    position: relative;
  }

  &__cover {
    --width: var(--track-image-width, 40px);
    --height: var(--track-image-width, 40px);
  }

  &__action-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    opacity: 0;
    pointer-events: none;
  }

  &__details-top-line {
    display: flex;
    align-items: center;
    gap: 4px;
    line-height: 1;
  }

  &__name {
    --ui-link-color: var(--main-text);
    --ui-link-hover-color: var(--main-text);
  }

  &__details-bottom-line {
    color: var(--secondary-text, gray);
    font-size: 14px;
  }

  &__equalizer-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    fill: var(--main-text);
    opacity: 0;
  }

  &__add-track-button {
    opacity: 0;
  }

  &__duration {
    font-size: 14px;
  }
}
</style>

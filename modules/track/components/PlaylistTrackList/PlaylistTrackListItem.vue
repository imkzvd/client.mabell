<template>
  <div
    class="playlist-track-list-item"
    :class="rootCssClasses"
    @mouseenter="toggleHoveredItem(true)"
    @mouseleave="toggleHoveredItem(false)"
  >
    <div class="playlist-track-list-item__column playlist-track-list-item__column_center">
      <div v-show="!isHoveredItem && !isSelectedItem && !isCurrentItem && !isPlayingItem">
        {{ index + 1 }}
      </div>

      <IconEqualizer
        v-show="!isHoveredItem && !isSelectedItem && (isCurrentItem || isPlayingItem)"
        class="playlist-track-list-item__equalizer-icon"
        :is-playing="isPlayingItem"
      />

      <UIIconButton
        v-show="isHoveredItem || isSelectedItem"
        :aria-label="isPlayingItem ? 'Pause track' : 'Play track'"
        :icon="isPlayingItem ? 'ph:pause-fill' : 'ph:play-fill'"
        :is-disabled="!item.track.isActive"
        icon-size="18"
        class="playlist-track-list-item__action-button"
        @click.stop="isPlayingItem ? emit('pause-item') : emit('play-item')"
      />
    </div>

    <div class="playlist-track-list-item__column">
      <div class="playlist-track-list-item__cover-container">
        <TrackCover :url="item.track.album.cover" :alt="item.track.name" />
      </div>

      <div class="playlist-track-list-item__details">
        <div class="playlist-track-list-item__details-top-line">
          <UIText max-rows="1" class="playlist-track-list-item__name">
            {{ item.track.name }}
          </UIText>

          <NuxtIcon
            v-if="item.track.isExplicit"
            mode="svg"
            name="material-symbols:explicit"
            size="16"
            class="playlist-track-list-item__explicit-icon"
          />
        </div>

        <div class="playlist-track-list-item__details-bottom-line">
          <ArtistLinks hover-underline line-clamp="1" :items="allTrackArtists" />
        </div>
      </div>
    </div>

    <div class="playlist-track-list-item__column">
      <UILink
        :to="{ name: 'album-id', params: { id: item.track.album.id } }"
        :line-clamp="1"
        @click.stop
      >
        <span v-if="item.track.album.type.value === 'ALBUM'">
          {{ item.track.album.name }}
        </span>
        <span v-else>Single</span>
      </UILink>
    </div>

    <div class="playlist-track-list-item__column">
      <UIText appearance="secondary" class="playlist-track-list-item__added-date">
        {{ addedDate }}
      </UIText>
    </div>

    <div class="playlist-track-list-item__column playlist-track-list-item__column_center">
      <UIIconButton
        appearance="secondary"
        aria-label="Add track"
        icon="ph:plus-bold"
        icon-size="16"
        :is-disabled="!item.track.isActive"
        class="playlist-track-list-item__add-button"
        @click.stop="emit('add-item')"
      />

      <UIText appearance="secondary" class="playlist-track-list-item__duration">
        {{ convertSecondsToMinute(item.track.duration) }}
      </UIText>

      <UIIconButton
        icon="i-ph-dots-three-outline-fill"
        aria-label="Track menu"
        appearance="secondary"
        icon-size="18"
        @click.stop="emit('open-item-menu', $event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { convertSecondsToMinute } from '~/modules/shared/utils/convert-seconds-to-minute.util';
import type {
  PlaylistTrackListListItemEmits,
  PlaylistTrackListListItemProps,
} from '~/modules/track/components/PlaylistTrackList/types';
import type { ArtistRO, SimplifiedArtistRO } from '~/api/api.module';

const props = defineProps<PlaylistTrackListListItemProps>();
const emit = defineEmits<PlaylistTrackListListItemEmits>();

const [isHoveredItem, toggleHoveredItem] = useToggle();

const baseClass = 'playlist-track-list-item';
const rootCssClasses = computed(() => ({
  [`${baseClass}_disabled`]: !props.item.track.isActive,
}));
const allTrackArtists = computed<(ArtistRO | SimplifiedArtistRO)[]>(() => [
  ...props.item.track?.artists,
  ...props.item.track?.featArtists,
]);
const addedDate = computed<string>(() => new Date(props.item.addedAt).toLocaleDateString());
const isCurrentItem = computed<boolean>(() => props.item.track.id === props.currentItemId);
const isPlayingItem = computed<boolean>(
  () => props.item.track.id === props.currentItemId && props.isPlaying,
);
const isSelectedItem = computed<boolean>(() => props.selectedItemId === props.item.track.id);
</script>

<style scoped lang="scss">
.playlist-track-list-item {
  position: relative;
  display: grid;
  cursor: pointer;
  grid-template-columns: var(--playlist-track-list-grid-template-columns);
  align-items: center;
  gap: 12px;
  border-radius: var(--border-rounded, 4px);
  font-size: 14px;
  color: var(--secondary-text, gray);
  margin-inline: -8px;
  padding: 8px;
  transition: 0.25s all;

  &:nth-child(even) {
    background-color: rgba(35, 35, 35, 0.2);
  }

  &:hover {
    background-color: var(--track-list-item-hover, gray);
  }

  &:hover & {
    &__add-button {
      opacity: 1;
    }
  }

  &_disabled {
    opacity: 0.5;
  }

  &__column {
    position: relative;
    display: flex;
    align-items: center;

    &_center {
      display: flex;
      justify-content: center;
    }
  }

  &__cover-container {
    margin-right: 12px;
  }

  &__action-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.25s all;
  }

  &__details-top-line {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  &__name {
    color: var(--main-text, white);
    line-height: 1;
  }

  &__explicit-icon {
    display: flex;
    flex-shrink: 0;
  }

  &__equalizer-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    fill: var(--main-text, white);
  }

  &__add-button {
    transition: opacity 0.25s;
    opacity: 0;
  }

  &__duration {
    margin-inline: 8px;
  }
}
</style>

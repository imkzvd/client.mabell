<template>
  <div
    ref="item"
    tabindex="0"
    :aria-label="item.name"
    class="album-track-list-item"
    :class="rootCssClasses"
    @mouseenter="toggleHoveredItem()"
    @mouseleave="toggleHoveredItem()"
  >
    <div class="album-track-list-item__column album-track-list-item__column_center">
      <div class="album-track-list-item__index-container">
        <div
          v-if="!isPlayingItem"
          v-show="!isHoveredItem && !isSelectedItem"
          class="album-track-list-item__index"
        >
          {{ index + 1 }}
        </div>

        <IconEqualizer
          v-show="!isHoveredItem && !isSelectedItem && (isCurrentItem || isPlayingItem)"
          class="album-track-list-item__equalizer-icon"
          :is-playing="isPlayingItem"
        />

        <UIIconButton
          v-show="isHoveredItem || isSelectedItem"
          :aria-label="isPlayingItem ? 'Pause track' : 'Play track'"
          :icon="isPlayingItem ? 'ph:pause-fill' : 'ph:play-fill'"
          :is-disabled="!item.isActive"
          icon-size="18"
          class="album-track-list-item__action-button"
          @click.stop="isPlayingItem ? emit('pause-item') : emit('play-item')"
        />
      </div>
    </div>

    <div class="album-track-list-item__column">
      <div class="album-track-list-item__details">
        <UIText class="album-track-list-item__name">
          {{ item.name }}
        </UIText>

        <div
          v-if="item.featArtists.length"
          class="album-track-list-item__featured-artist-links"
        >
          <span>(feat. </span>
          <ArtistLinks :items="item.featArtists" hover-underline />
          <span>)</span>
        </div>

        <NuxtIcon
          v-if="item.isExplicit"
          name="material-symbols:explicit"
          mode="svg"
          size="16"
          class="album-track-list-item__explicit-icon"
        />
      </div>
    </div>

    <div class="album-track-list-item__column album-track-list-item__column_center">
      <div class="album-track-list-item__add-button">
        <UIIconButton
          appearance="secondary"
          aria-label="Add track"
          icon="ph:plus-bold"
          icon-size="16"
          :is-disabled="!item.isActive"
          @click.stop="emit('add-item')"
        />
      </div>

      <div class="album-track-list-item__duration">
        {{ convertSecondsToMinute(item.duration) }}
      </div>

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
import { convertSecondsToMinute } from '~/modules/shared/utils/convert-seconds-to-minute.util';
import type {
  AlbumTrackListItemProps,
  AlbumTrackListItemEmits,
} from '~/modules/track/components/AlbumTrackList/types';

const props = defineProps<AlbumTrackListItemProps>();
const emit = defineEmits<AlbumTrackListItemEmits>();

const itemEl = useTemplateRef<HTMLLIElement>('item');
const [isHoveredItem, toggleHoveredItem] = useToggle();

const baseClass = 'album-track-list-item';
const rootCssClasses = computed(() => ({
  [`${baseClass}_is-disabled`]: !props.item.isActive,
}))
const isSelectedItem = computed<boolean>(() => props.item.id === props.selectedItemId);
const isCurrentItem = computed<boolean>(() => props.item.id === props.currentItemId);
const isPlayingItem = computed<boolean>(
  () => props.item.id === props.currentItemId && props.isPlaying,
);

onMounted(() => {
  if (isSelectedItem.value) {
    itemEl.value?.focus();
  }
});
</script>

<style scoped lang="scss">
.album-track-list-item {
  position: relative;
  display: grid;
  cursor: pointer;
  grid-template-columns: var(--album-track-list-grid-template-columns);
  align-items: center;
  gap: 12px;
  border-radius: var(--border-rounded, 4px);
  font-size: 14px;
  color: var(--main-text, gray);
  --color: var(--main-text, gray);
  margin-inline: -8px;
  padding: 12px 8px;
  transition: 0.25s all;

  &:nth-child(even) {
    background-color: rgba(35, 35, 35, 0.2);
  }

  &:focus {
    background-color: var(--track-list-item-focus, lightgray);
    outline: none;
  }

  &:hover {
    background-color: var(--track-list-item-hover, gray);
  }

  &:hover & {
    &__add-button {
      opacity: 1;
    }
  }

  &_is-disabled {
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

  &__index {
    text-align: center;
  }

  &__action-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
  }

  &__details {
    display: flex;
    align-items: center;
    line-height: 24px;
  }

  &__name {
    margin-right: 4px;
    //font-size: inherit;
  }

  &__featured-artist-links {
    --ui-link-color: var(--main-text, white);
    margin-right: 4px;
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

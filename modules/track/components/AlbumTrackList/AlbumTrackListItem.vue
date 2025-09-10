<template>
  <li
    ref="item"
    tabindex="0"
    :aria-label="item.name"
    class="album-track-list-item"
    @mouseenter="toggleHoveredItem()"
    @mouseleave="toggleHoveredItem()"
  >
    <div class="album-track-list-item__column">
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
          icon-size="20"
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

    <div class="album-track-list-item__column">
      <div class="album-track-list-item__add-track-button">
        <UIIconButton
          v-show="isHoveredItem"
          appearance="secondary"
          aria-label="Add track"
          icon="ph:plus-bold"
          icon-size="16"
          :is-disabled="!item.isActive"
          @click.stop="emit('add-item')"
        />
      </div>
    </div>

    <div class="album-track-list-item__column hidden md:block">
      <div class="album-track-list-item__duration">
        {{ computedConvertedDuration }}
      </div>
    </div>

    <div class="album-track-list-item__column">
      <UIIconButton
        icon="i-ph-dots-three-outline-fill"
        aria-label="Track menu"
        appearance="secondary"
        @click.stop="emit('open-item-menu', $event)"
      />
    </div>
  </li>
</template>

<script setup lang="ts">
import { convertSecondsToMinute } from './utils';
import type {
  AlbumTrackListItemProps,
  AlbumTrackListItemEmits,
} from '~/modules/track/components/AlbumTrackList/types';

const props = defineProps<AlbumTrackListItemProps>();
const emit = defineEmits<AlbumTrackListItemEmits>();

const itemEl = useTemplateRef<HTMLLIElement>('item');
const [isHoveredItem, toggleHoveredItem] = useToggle();

const isSelectedItem = computed<boolean>(() => props.item.id === props.selectedItemId);
const isCurrentItem = computed<boolean>(() => props.item.id === props.currentItemId);
const isPlayingItem = computed<boolean>(
  () => props.item.id === props.currentItemId && props.isPlaying,
);
const computedConvertedDuration = computed<string | null>(() => {
  if (!props.item.duration) return null;

  return convertSecondsToMinute(props.item.duration);
});

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
  grid-template-columns: 40px 1fr 40px 50px auto;
  align-items: center;
  gap: 32px;
  border-radius: var(--border-rounded);
  font-size: 16px;
  color: var(--main-text, white);
  margin-inline: -16px;
  padding: 12px 16px;
  transition: 0.25s all;

  &:focus {
    background-color: var(--track-list-item-focus, lightgray);
    outline: none;
  }

  &:hover {
    background-color: var(--track-list-item-hover, gray);
  }

  &__column {
    position: relative;
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
    font-size: inherit;
  }

  &__featured-artist-links {
    --ui-link-color: var(--main-text, white);
    display: flex;
    align-items: center;
    margin-right: 4px;
    font-size: inherit;
  }

  &__equalizer-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    fill: var(--main-text, white);
  }

  &__duration {
    font-size: 14px;
    color: var(--secondary-text, gray);
  }
}
</style>

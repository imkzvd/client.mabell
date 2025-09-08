<template>
  <li
    ref="item"
    :aria-label="item.name"
    class="compact-track-list-item"
    tabindex="0"
    @mouseenter="toggleHoveredItem()"
    @mouseleave="toggleHoveredItem()"
  >
    <div class="compact-track-list-item__column">
      <div class="compact-track-list-item__cover-container">
        <TrackCover
          :url="item.album.cover"
          :alt="item.name"
          class="compact-track-list-item__cover"
          :class="{ 'compact-track-list-item__cover_has-overlay': isSelectedItem || isHoveredItem || isCurrentItem || isPlayingItem }"
        />

        <IconEqualizer
          v-show="!isHoveredItem && !isSelectedItem && (isCurrentItem || isPlayingItem)"
          class="compact-track-list-item__equalizer-icon"
          :is-playing="isPlayingItem"
        />

        <UIIconButton
          v-show="isHoveredItem || isSelectedItem"
          :aria-label="isPlayingItem ? 'Pause track' : 'Play track'"
          :icon="isPlayingItem ? 'ph:pause-fill' : 'ph:play-fill'"
          icon-size="20"
          class="compact-track-list-item__action-button"
          @click.stop="isPlayingItem ? emit('pause-item') : emit('play-item')"
        />
      </div>
    </div>

    <div class="compact-track-list-item__column">
      <div class="compact-track-list-item__details">
        <div class="compact-track-list-item__details-top-line">
          <UILink
            :to="{ name: 'album', params: { id: item.album.id }}"
            class="compact-track-list-item__name"
          >
            {{ item.name }}
          </UILink>

          <NuxtIcon
            v-if="item.isExplicit"
            name="material-symbols:explicit"
            size="16"
            class="compact-track-list-item__explicit-icon"
          />
        </div>

        <div class="compact-track-list-item__details-bottom-line">
          <ArtistLinks :items="allTrackArtists" class="compact-track-list-item__artist-links" />
        </div>
      </div>
    </div>

    <div class="compact-track-list-item__column">
      <div class="compact-track-list-item__add-track-button">
        <UIIconButton
          v-show="isHoveredItem"
          appearance="secondary"
          aria-label="Add track"
          icon="ph:plus-bold"
          icon-size="16"
          @click.stop="emit('add-item')"
        />
      </div>
    </div>

    <div class="compact-track-list-item__column">
      <UIText appearance="secondary" size="14px">
        {{ convertedDuration }}
      </UIText>
    </div>

    <div class="compact-track-list-item__column">
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
import { convertSecondsToMinute } from "./utils";
import type { SimplifiedArtistRO } from "~/api/api.module";
import type {
  CompactTrackListItemProps,
  CompactTrackListItemEmits,
} from "~/modules/track/components/CompactTrackList/types";

const props = defineProps<CompactTrackListItemProps>();
const emit = defineEmits<CompactTrackListItemEmits>();

const itemEl = useTemplateRef<HTMLLIElement>('item');
const [isHoveredItem, toggleHoveredItem] = useToggle();

const allTrackArtists = computed<SimplifiedArtistRO[]>(() => [
  ...props.item.album.artists,
  ...props.item.featArtists,
]);
const convertedDuration = computed<string | null>(() => {
  const { duration } = props.item;

  return duration ? convertSecondsToMinute(duration) : null;
});
const isSelectedItem = computed<boolean>(() => props.item.id === props.selectedItemId);
const isCurrentItem = computed<boolean>(() => props.item.id === props.currentItemId);
const isPlayingItem = computed<boolean>(
  () => props.item.id === props.currentItemId && props.isPlaying,
);

onMounted(() => {
  if (isSelectedItem.value) {
    itemEl.value?.focus();
  }
})

</script>

<style scoped lang="scss">
.compact-track-list-item {
  display: grid;
  cursor: pointer;
  grid-template-columns: auto 1fr auto 50px auto;
  align-items: center;
  gap: 16px;
  border-radius: var(--border-rounded, 6px);
  color: var(--main-text, white);
  margin-inline: -16px;
  padding: 8px 16px;
  transition: 0.25s all;

  &:focus {
    background-color: var(--track-list-item-focus, lightgray);
    outline: none;
  }

  &:hover {
    background-color: var(--track-list-item-hover, gray);
  }

  &__cover-container {
    position: relative;
  }

  &__cover {
    --size: 52px;

    &_has-overlay {
      --overlay: 0.4;
    }
  }

  &__action-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__details-top-line {
    display: flex;
    align-items: center;
    gap: 4px;
    line-height: 1.2;
  }

  &__details-bottom-line {
    font-size: 14px;
  }

  &__equalizer-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    fill: var(--main-text);
  }
}
</style>

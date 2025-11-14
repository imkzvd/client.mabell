<template>
  <div
    ref="item"
    tabindex="0"
    :aria-label="item.name"
    class="album-track-list-item"
    :class="rootCSSClasses"
  >
    <div class="album-track-list-item__column album-track-list-item__column_center">
      <div class="album-track-list-item__index-container">
        <UIText appearance="secondary" class="album-track-list-item__index">
          {{ index + 1 }}
        </UIText>

        <IconEqualizer class="album-track-list-item__equalizer-icon" :is-playing="isPlaying" />

        <UIIconButton
          :aria-label="isPlaying ? 'Pause track' : 'Play track'"
          :icon="isPlaying ? 'ph:pause-fill' : 'ph:play-fill'"
          :is-disabled="!item.isActive"
          icon-size="18"
          class="album-track-list-item__action-button"
          @click.stop="isPlaying ? emit('pause-item') : emit('play-item')"
        />
      </div>
    </div>

    <div class="album-track-list-item__column">
      <div class="album-track-list-item__details">
        <div class="album-track-list-item__details-top-line">
          <UIText class="album-track-list-item__name">
            {{ item.name }}
          </UIText>

          <NuxtIcon
            v-if="item.isExplicit"
            name="material-symbols:explicit"
            mode="svg"
            size="16"
            class="album-track-list-item__explicit-icon"
          />
        </div>

        <div class="album-track-list-item__details-bottom-line">
          <ArtistLinks :items="[...item.artists, ...item.featArtists]" hover-underline />
        </div>
      </div>
    </div>

    <div class="album-track-list-item__column album-track-list-item__column_center">
      <div class="album-track-list-item__add-button">
        <UIIconButton
          appearance="secondary"
          aria-label="Add track"
          icon="i-mynaui-plus"
          icon-size="24"
          :is-disabled="!item.isActive"
          @click.stop="emit('add-item')"
        />
      </div>

      <UIText align="center" appearance="secondary" class="album-track-list-item__duration">
        {{ convertSecondsToMinute(item.duration) }}
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
import { convertSecondsToMinute } from '~/modules/shared/utils/convert-seconds-to-minute.util';
import type {
  AlbumTrackListItemProps,
  AlbumTrackListItemEmits,
} from '~/modules/track/components/AlbumTrackList/types';

const props = defineProps<AlbumTrackListItemProps>();
const emit = defineEmits<AlbumTrackListItemEmits>();

const itemEl = useTemplateRef<HTMLLIElement>('item');
const rootClass = 'album-track-list-item';

const isSelected = computed<boolean>(() => props.item.id === props.selectedItemId);
const isCurrent = computed<boolean>(() => props.item.id === props.currentItemId);
const isPlaying = computed<boolean>(() => props.item.id === props.currentItemId && props.isPlaying);
const rootCSSClasses = computed(() => ({
  [`${rootClass}_is-playing`]: isPlaying.value,
  [`${rootClass}_is-current`]: isCurrent.value,
  [`${rootClass}_is-disabled`]: !props.item.isActive,
}));

onMounted(() => {
  if (isSelected.value) {
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
  gap: var(--album-track-list-grid-column-gap);
  border-radius: var(--border-rounded, 4px);
  font-size: 14px;
  margin-inline: -16px;
  padding: 8px 16px;
  transition: 0.25s all;

  &:nth-child(even) {
    background-color: var(--gray-darkest);
  }

  &:focus {
    background-color: var(--track-list-item-focus, lightgray);
    outline: none;
  }

  &:hover {
    background-color: var(--track-list-item-hover, gray);
  }

  &:hover & {
    &__index {
      opacity: 0;
    }

    &__equalizer-icon {
      opacity: 0;
    }

    &__action-button {
      opacity: 1;
      pointer-events: initial;
    }

    &__add-button {
      opacity: 1;
    }
  }

  &_is-current & {
    &__index {
      opacity: 0;
    }

    &__action-button {
      opacity: 1;
      pointer-events: initial;
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
    opacity: 0;
    pointer-events: none;
  }

  &__details-top-line {
    display: flex;
    align-items: center;
    line-height: 24px;
  }

  &__name {
    margin-right: 4px;
    font-size: 16px;
  }

  &__featured-artist-links {
    display: flex;
    align-items: center;
    --ui-link-color: var(--main-text, white);
    margin-right: 4px;
  }

  &__equalizer-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    fill: var(--main-text, white);
    opacity: 0;
  }

  &__add-button {
    transition: opacity 0.25s;
    opacity: 0;
  }

  &__duration {
    min-width: 60px;
    margin-inline: 12px;
  }
}
</style>

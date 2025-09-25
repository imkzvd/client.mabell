<template>
  <div class="playlist-track-list">
    <div class="playlist-track-list__header">
      <div class="playlist-track-list__header-column playlist-track-list__header-column_center">
        #
      </div>
      <div class="playlist-track-list__header-column">Track</div>
      <div class="playlist-track-list__header-column">Album</div>
      <div class="playlist-track-list__header-column">Date added</div>
      <div class="playlist-track-list__header-column playlist-track-list__header-column_center">
        Time
      </div>
    </div>

    <PlaylistTrackListItem
      v-for="(item, index) of items"
      :key="item.track.id"
      :index="index"
      :item="item"
      :is-playing="isPlaying"
      :current-item-id="currentItemId"
      :selected-item-id="selectedItem?.track.id"
      class="playlist-track-list__item"
      @click="onClick(item, index)"
      @dblclick="onDblClick(item, index)"
      @contextmenu="onItemMenuOpen($event, item, index)"
      @play-item="emit('play-item', item, index)"
      @pause-item="emit('pause-item', item, index)"
      @add-item="emit('add-item', item, index)"
      @open-item-menu="onItemMenuOpen($event, item, index)"
    />
  </div>
</template>

<script setup lang="ts">
import type {
  PlaylistTrackListListProps,
  PlaylistTrackListListEmits,
} from '~/modules/track/components/PlaylistTrackList/types';
import type { PlaylistTrackRO } from '~/api/api.module';

const props = defineProps<PlaylistTrackListListProps>();
const emit = defineEmits<PlaylistTrackListListEmits>();

const selectedItem = ref<PlaylistTrackRO | null>(null);
const selectedItemIndex = ref<number | null>(null);

function onClick(item: PlaylistTrackRO, index: number) {
  selectedItem.value = item;
  selectedItemIndex.value = index;
}

function onDblClick(item: PlaylistTrackRO, index: number) {
  props.isPlaying ? emit('pause-item', item, index) : emit('play-item', item, index);
}

function onItemMenuOpen(e: Event, item: PlaylistTrackRO, index: number) {
  alert(`Open menu for ${item.track.name} track`);
}
</script>

<style scoped lang="scss">
.playlist-track-list {
  --playlist-track-list-grid-template-columns: 40px minmax(320px, 1fr) minmax(200px, 400px) minmax(100px, 300px) 120px;

  &__header {
    display: grid;
    grid-template-columns: var(--playlist-track-list-grid-template-columns);
    gap: 12px;
    margin-inline: -8px;
    padding: 8px;
    color: var(--gray, gray);
    font-size: 14px;
  }

  &__header-column {
    &_center {
      text-align: center;
    }
  }
}
</style>

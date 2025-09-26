<template>
  <div class="album-track-list">
    <div class="album-track-list__header">
      <div class="album-track-list__header-column album-track-list__header-column_center">
        #
      </div>
      <div class="album-track-list__header-column">Track</div>
      <div class="album-track-list__header-column album-track-list__header-column_center">
        Time
      </div>
    </div>
    
    <AlbumTrackListItem
      v-for="(item, index) of items"
      :key="item.id"
      :item="item"
      :index="index"
      :selected-item-id="selectedItem?.id"
      :current-item-id="currentItemId"
      :is-playing="isPlaying"
      @click="onClick(item, index)"
      @dblclick="onDblClick(item, index)"
      @open-item-menu="onItemMenuOpen($event, item, index)"
      @play-item="emit('play-item', item, index)"
      @pause-item="emit('pause-item', item, index)"
      @add-item="emit('add-item', item, index)"
    />
  </div>
</template>

<script setup lang="ts">
import type {
  AlbumTrackListProps,
  AlbumTrackListEmits,
} from "~/modules/track/components/AlbumTrackList/types";
import AlbumTrackListItem from '~/modules/track/components/AlbumTrackList/AlbumTrackListItem.vue';
import type { TrackRO } from '~/api/api.module';

const props = defineProps<AlbumTrackListProps>();
const emit = defineEmits<AlbumTrackListEmits>();

const selectedItem = ref<TrackRO | null>(null);
const selectedItemIndex = ref<number | null>(null);

function onClick(item: TrackRO, index: number) {
  selectedItem.value = item;
  selectedItemIndex.value = index;
}

function onDblClick(item: TrackRO, index: number) {
  props.isPlaying ? emit('pause-item', item, index) : emit('play-item', item, index);
}

function onItemMenuOpen(e: Event, item: TrackRO, index: number) {
  alert(`Open menu for ${item.name} track`)
}
</script>

<style scoped lang="scss">
.album-track-list {
  --album-track-list-grid-template-columns: 40px 1fr 120px;

  &__header {
    display: grid;
    grid-template-columns: var(--album-track-list-grid-template-columns);
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

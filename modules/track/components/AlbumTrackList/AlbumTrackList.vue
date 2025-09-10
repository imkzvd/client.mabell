<template>
  <ul class="album-track-list">
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
  </ul>
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

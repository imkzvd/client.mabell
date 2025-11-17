<template>
  <div :aria-label="ariaLabel" class="mobile-album-track-list">
    <MobileAlbumTrackListItem
      v-for="(item, index) of items"
      :key="item.id"
      :item="item"
      :index="index"
      :current-item-id="currentItemId"
      :is-playing="isPlaying"
      @click="onClick(item, index)"
      @open-item-menu="onItemMenuOpen($event, item, index)"
    />
  </div>
</template>

<script setup lang="ts">
import type {
  MobileAlbumTrackListProps,
  MobileAlbumTrackListEmits,
} from '~/modules/track/components/MobileAlbumTrackList/types';
import type { TrackRO } from '~/api/api.module';

defineProps<MobileAlbumTrackListProps>();
const emit = defineEmits<MobileAlbumTrackListEmits>();

function onClick(item: TrackRO, index: number) {
  emit('play-item', item, index);
}

function onItemMenuOpen(e: Event, item: TrackRO, index: number) {
  console.log('track menu opened');
}
</script>

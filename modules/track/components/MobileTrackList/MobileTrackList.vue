<template>
  <ul :aria-label="ariaLabel" class="mobile-track-list">
    <MobileTrackListItem
      v-for="(item, index) of items"
      :key="item.id"
      :item="item"
      :index="index"
      :current-item-id="currentItemId"
      :is-playing="isPlaying"
      :show-cover="showCover"
      @click="onClick(item, index)"
      @open-item-menu="onTrackMenuOpen($event, item, index)"
    />
  </ul>
</template>

<script setup lang="ts">
import type {
  MobileTrackListEmits,
  MobileTrackListProps,
} from '~/modules/track/components/MobileTrackList/types';
import type { TrackRO } from '~/api/api.module';

defineProps<MobileTrackListProps>();
const emit = defineEmits<MobileTrackListEmits>();

function onClick(item: TrackRO, index: number) {
  if (item.isActive) {
    emit('play-item', item, index);
  }
}

function onTrackMenuOpen(e: Event, item: TrackRO, index: number) {
  console.log('item menu opened');
}
</script>

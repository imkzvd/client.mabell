<template>
  <li :aria-label="item.name" tabindex="0" class="mobile-album-track-list-item">
    <div class="mobile-album-track-list-item__column">
      <div class="mobile-album-track-list-item__index-container">
        <div v-if="!isPlayingItem" class="mobile-album-track-list-item__index">
          {{ index + 1 }}
        </div>

        <IconEqualizer
          v-show="isCurrentItem || isPlayingItem"
          role="presentation"
          aria-hidden="true"
          :is-playing="isPlayingItem"
          class="mobile-album-track-list-item__equalizer-icon"
        />
      </div>
    </div>

    <div class="mobile-album-track-list-item__column">
      <div class="mobile-album-track-list-item__details">
        <UIText :line-clamp="1" class="mobile-album-track-list-item__name">
          {{ item.name }}
        </UIText>

        <NuxtIcon
          v-if="item.isExplicit"
          name="material-symbols:explicit"
          size="16"
          class="mobile-album-track-list-item__explicit-icon"
        />
      </div>
    </div>

    <div class="mobile-album-track-list-item__column">
      <UIIconButton
        icon="i-ph-dots-three-outline-fill"
        icon-size="20"
        aria-label="Open track menu"
        appearance="secondary"
        @click.stop="emit('open-item-menu', $event)"
      />
    </div>
  </li>
</template>

<script setup lang="ts">
import type {
  MobileAlbumTrackListItemProps,
  MobileAlbumTrackListItemEmits,
} from '~/modules/track/components/MobileAlbumTrackList/types';

const props = defineProps<MobileAlbumTrackListItemProps>();
const emit = defineEmits<MobileAlbumTrackListItemEmits>();

const isCurrentItem = computed<boolean>(() => props.item.id === props.currentItemId);
const isPlayingItem = computed<boolean>(
  () => props.item.id === props.currentItemId && props.isPlaying,
);
</script>

<style scoped lang="scss">
.mobile-album-track-list-item {
  position: relative;
  display: grid;
  grid-template-columns: 28px 1fr auto;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--main-text, white);
  padding-block: 4px;

  @include respond-to(xs) {
    padding-block: 8px;
    font-size: 16px;
  }

  &__index {
    text-align: center;
  }

  &__details {
    display: flex;
    align-items: center;
  }

  &__name {
    margin-right: 4px;
    font-size: inherit;
  }

  &__explicit-icon {
    flex-shrink: 0;
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

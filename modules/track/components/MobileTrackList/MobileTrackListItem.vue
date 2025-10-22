<template>
  <li :aria-label="item.name" class="mobile-track-list-item">
    <div class="mobile-track-list-item__column">
      <div class="mobile-track-list-item__cover-container">
        <UIImg
          :url="item.album.cover"
          :alt="item.name"
          class="mobile-track-list-item__cover"
          :class="{ 'mobile-track-list-item__cover_has-overlay': isCurrentItem || isPlayingItem }"
        />

        <IconEqualizer
          v-show="isCurrentItem || isPlayingItem"
          role="presentation"
          aria-hidden="true"
          :is-playing="isPlayingItem"
          class="mobile-track-list-item__equalizer-icon"
        />
      </div>
    </div>

    <div class="mobile-track-list-item__column">
      <div class="mobile-track-list-item__details">
        <div class="mobile-track-list-item__details-top-line">
          <UIText :line-clamp="1" class="mobile-track-list-item__name">
            {{ item.name }}
          </UIText>
        </div>

        <div class="mobile-track-list-item__details-bottom-line">
          <UIText :line-clamp="1" class="mobile-track-list-item__artist-names">
            <ArtistNames :items="allTrackArtists" />
          </UIText>
        </div>
      </div>
    </div>

    <div class="mobile-track-list-item__column">
      <UIIconButton
        icon="i-ph-dots-three-outline-fill"
        icon-size="20"
        appearance="secondary"
        aria-label="Open track menu"
        @click.stop="emit('open-item-menu', $event)"
      />
    </div>
  </li>
</template>

<script setup lang="ts">
import type { SimplifiedArtistRO } from '~/api/api.module';
import type {
  MobileTrackListItemEmits,
  MobileTrackListItemProps,
} from '~/modules/track/components/MobileTrackList/types';

const props = defineProps<MobileTrackListItemProps>();
const emit = defineEmits<MobileTrackListItemEmits>();

const allTrackArtists = computed<SimplifiedArtistRO[]>(() => [
  ...props.item.album.artists,
  ...props.item.featArtists,
]);
const isCurrentItem = computed<boolean>(() => props.item.id === props.currentItemId);
const isPlayingItem = computed<boolean>(
  () => props.item.id === props.currentItemId && props.isPlaying,
);
</script>

<style scoped lang="scss">
.mobile-track-list-item {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 8px;
  line-height: 1.2;
  color: var(--main-text, white);
  padding-block: 2px;

  @include respond-to(xs) {
    padding-block: 4px;
  }

  &__cover-container {
    position: relative;
  }

  &__cover {
    --size: 40px;

    @include respond-to(xs) {
      --size: 48px;
    }

    &_has-overlay {
      --overlay: 0.4;
    }
  }

  &__equalizer-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    fill: var(--main-text, white);
  }

  &__artist-names {
    font-size: 12px;
    color: var(--secondary-text, gray);

    @include respond-to(xs) {
      font-size: 14px;
    }
  }
}
</style>

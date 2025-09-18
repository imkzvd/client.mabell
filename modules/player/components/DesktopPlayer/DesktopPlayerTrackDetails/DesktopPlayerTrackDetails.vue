<template>
  <div class="desktop-player-track-details">
    <TrackCover
      :url="track.album.cover"
      :alt="track.name"
      class="desktop-player-track-details__cover"
    />

    <div class="desktop-player-track-details__lines">
      <div class="desktop-player-track-details__top-line">
        <UIText size="14px">{{ track.name }}</UIText>

        <NuxtIcon
          v-if="track.isExplicit"
          name="material-symbols:explicit"
          size="16"
          class="desktop-player-track-details__explicit-icon"
        />
      </div>

      <div class="desktop-player-track-details__bottom-line">
        <ArtistLinks :items="allTrackArtists" />

        <span>-</span>

        <UILink :to="{ name: 'album', params: { id: track.album.id } }">
          {{
            track.album.type.value === "ALBUM"
              ? track.album.name
              : track.album.type.label
          }}
        </UILink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {
  DesktopPlayerTrackDetailsProps,
} from '~/modules/player/components/DesktopPlayer/DesktopPlayerTrackDetails/types';
import type { SimplifiedArtistRO } from '~/api/api.module';

const props = defineProps<DesktopPlayerTrackDetailsProps>();

const allTrackArtists = computed<SimplifiedArtistRO[]>(() => [
  ...props.track.album.artists,
  ...props.track.featArtists,
]);
</script>

<style scoped lang="scss">
.desktop-player-track-details {
  display: flex;
  align-items: center;
  gap: 12px;

  &__cover {
    --size: 52px;
  }

  &__top-line {
    display: flex;
    align-items: center;
    gap: 4px;
    line-height: 1;
  }

  &__bottom-line {
    display: flex;
    gap: 2px;
    font-size: 14px;
    color: var(--ui-link-color);
  }

  &__explicit-icon {
    flex-shrink: 0;
  }
}
</style>

<template>
  <div class="desktop-player-track-details">
    <UIImg :url="track.album.cover" :alt="track.name" class="desktop-player-track-details__cover" />

    <div class="desktop-player-track-details__lines">
      <div class="desktop-player-track-details__top-line">
        <UIText size="14px" class="desktop-player-track-details__name">{{ track.name }}</UIText>

        <NuxtIcon
          v-if="track.isExplicit"
          mode="svg"
          name="material-symbols:explicit"
          size="16"
          class="desktop-player-track-details__explicit-icon"
        />
      </div>

      <div class="desktop-player-track-details__bottom-line">
        <ArtistLinks hover-underline :items="allTrackArtists" />

        <span>-</span>

        <UILink :to="{ name: 'album-id', params: { id: track.album.id } }">
          {{ track.album.type.value === 'ALBUM' ? track.album.name : track.album.type.label }}
        </UILink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DesktopPlayerTrackDetailsProps } from '~/modules/player/components/DesktopPlayer/DesktopPlayerTrackDetails/types';
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
  max-width: 100%;

  &__cover {
    --size: 52px;
  }

  &__lines {
    max-width: 100%;
    overflow: hidden;
  }

  &__top-line {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  &__name {
    @include text-ellipsis();
  }

  &__bottom-line {
    display: flex;
    column-gap: 4px;
    font-size: 12px;
    color: var(--ui-link-color);

    @include text-ellipsis();
  }

  &__explicit-icon {
    flex-shrink: 0;
  }
}
</style>

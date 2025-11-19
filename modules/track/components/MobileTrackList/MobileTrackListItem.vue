<template>
  <li :aria-label="item.name" class="mobile-track-list-item" :class="rootCSSClasses">
    <div class="mobile-track-list-item__column">
      <div class="mobile-track-list-item__cover-container">
        <UIImg
          v-if="showCover"
          :path="item.album.cover"
          :alt="item.name"
          class="mobile-track-list-item__cover"
        />
        <div v-else class="mobile-track-list-item__index">
          {{ index + 1 }}
        </div>

        <IconEqualizer
          role="presentation"
          aria-hidden="true"
          :is-playing="isPlaying"
          class="mobile-track-list-item__equalizer-icon"
        />
      </div>
    </div>

    <div class="mobile-track-list-item__column">
      <div class="mobile-track-list-item__details">
        <div class="mobile-track-list-item__details-top-line">
          <UIText max-rows="1" class="mobile-track-list-item__name">
            {{ item.name }}
          </UIText>

          <NuxtIcon
            v-if="item.isExplicit"
            mode="svg"
            name="i-mynaui-letter-e-square-solid"
            size="16"
          />
        </div>

        <div class="mobile-track-list-item__details-bottom-line">
          <ArtistNames
            :items="allTrackArtists"
            :line-clamp="1"
            class="mobile-track-list-item__artist-names"
          />
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

const rootCSSClass = 'mobile-track-list-item';

const allTrackArtists = computed<SimplifiedArtistRO[]>(() => [
  ...props.item.artists,
  ...props.item.featArtists,
]);
const isCurrent = computed<boolean>(() => props.item.id === props.currentItemId);
const isPlaying = computed<boolean>(() => props.item.id === props.currentItemId && props.isPlaying);
const rootCSSClasses = computed(() => ({
  [`${rootCSSClass}_is-playing`]: isPlaying.value,
  [`${rootCSSClass}_is-current`]: isCurrent.value,
  [`${rootCSSClass}_is-disabled`]: !props.item.isActive,
}));
</script>

<style scoped lang="scss">
.mobile-track-list-item {
  position: relative;
  display: grid;
  grid-template-columns: minmax(28px, auto) 1fr auto;
  align-items: center;
  column-gap: 8px;
  padding-block: 4px;
  line-height: 1.2;

  @include respond-to(md) {
    padding-block: 8px;
  }

  &_is-current & {
    &__cover {
      filter: brightness(30%);
    }

    &__index {
      opacity: 0;
    }

    &__equalizer-icon {
      opacity: 1;
    }
  }

  &_is-disabled {
    opacity: 0.5;
  }

  &__cover-container {
    position: relative;
  }

  &__cover {
    --width: var(--track-image-width, 40px);
    --height: var(--track-image-width, 40px);
  }

  &__index {
    text-align: center;
    color: var(--secondary-text);
  }

  &__equalizer-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    fill: var(--main-text, white);
    opacity: 0;
  }

  &__details-top-line {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  &__artist-names {
    font-size: 12px;

    @include respond-to(xs) {
      font-size: 14px;
    }
  }
}
</style>

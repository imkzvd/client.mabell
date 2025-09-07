<template>
  <header class="artist-header">
    <div class="artist-header__line">
      <div class="container">
        <div class="artist-header__details">
          <div class="artist-header__heading-container">
            <UIHeading class="artist-header__heading">
              {{ artist.name }}
            </UIHeading>

            <UIIconButton
              appearance="secondary"
              icon="i-ph-dots-three-outline-fill"
              aria-label="Artist options"
              @click="onOptionsButtonClick"
            />
          </div>

          <UIText appearance="secondary" class="artist-header__biography">
            {{ artist.biography }}
          </UIText>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { ArtistHeaderProps } from '~/modules/artist/components/ArtistHeader/types';

const props = defineProps<ArtistHeaderProps>();

const ccsArtistCoverUrl = ref<string | null>(
  props.artist.cover ? `url(${props.artist.cover})` : null,
);

function onOptionsButtonClick() {
  alert('Open menu.');
}
</script>

<style scoped lang="scss">
.artist-header {
  position: relative;
  display: flex;
  align-items: flex-end;
  height: 50vh;
  background-image: v-bind(ccsArtistCoverUrl);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: saturate(150%);
  padding-bottom: 16px;

  @include respond-to(lg) {
    height: 70vh;
  }

  &::before {
    position: absolute;
    inset: 0;
    z-index: -10;
    content: "";
    background: linear-gradient(0deg, var(--base-bg) 0%, transparent 80%);
  }

  &__line {
    flex-basis: 100%;
  }

  &__heading-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 32px;
  }

  &__heading {
    --size: 48px;

    @include respond-to('2xl') {
      --size: 64px;
      line-height: 1.2;
    }
  }

  &__biography {
    @include respond-to('2xl') {
      max-width: 800px;
    }
  }
}
</style>

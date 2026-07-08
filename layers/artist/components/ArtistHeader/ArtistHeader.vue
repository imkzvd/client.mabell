<template>
  <header class="artist-header">
    <div class="container">
      <div class="artist-header__details">
        <div class="artist-header__heading-container">
          <h1 class="artist-header__heading">
            {{ artist.name }}
          </h1>

          <UIIconButton
            appearance="secondary"
            icon="i-ph-dots-three-outline-fill"
            aria-label="Artist options"
            class="artist-header__artist-menu-button"
            @click="onOptionsButtonClick"
          />
        </div>

        <p class="artist-header__biography">
          {{ artist.biography }}
        </p>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import UIIconButton from '../../../shared/components/UI/UIIconButton/UIIconButton.vue';
import type { ArtistHeaderProps } from './types';

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
  @include flex(flex-end);

  position: relative;
  height: 50vh;
  background-image: v-bind(ccsArtistCoverUrl);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: saturate(var(--img-saturate));
  padding-block: var(--section-y-padding);

  @include respond-to(lg) {
    height: 60vh;
  }

  &::before {
    @include abs(0, 0, 0, 0);
    z-index: -10;
    content: '';
    background: linear-gradient(0deg, var(--base-bg) 0%, transparent 100%);
  }

  &__line {
    flex-basis: 100%;
  }

  &__heading-container {
    @include flex(center, space-between);
    column-gap: 16px;
  }

  &__heading {
    @include text-5xl;
  }

  &__artist-menu-button {
    @include respond-to(xl) {
      display: none;
    }
  }

  &__biography {
    @include line-clamp(2);

    @include respond-to(xl) {
      max-width: 800px;
    }
  }
}
</style>

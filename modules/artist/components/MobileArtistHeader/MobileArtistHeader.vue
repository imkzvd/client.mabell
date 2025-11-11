<template>
  <header class="mobile-artist-header">
    <div class="container">
      <div class="mobile-artist-header__details">
        <UIHeading class="mobile-artist-header__heading">
          {{ artist.name }}
        </UIHeading>

        <UIText appearance="secondary" size="14px" :line-clamp="2">{{ artist.biography }}</UIText>

        <UIIconButton
          v-if="false"
          appearance="secondary"
          icon="i-ph-dots-three-outline-fill"
          icon-size="20"
          aria-label="Artist menu"
          @click="onOptionsButtonClick"
        >
        </UIIconButton>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { MobileArtistHeaderProps } from '~/modules/artist/components/MobileArtistHeader/types';

const props = defineProps<MobileArtistHeaderProps>();

const artistAvatarURL = computed<string | null>(() => {
  return props.artist.avatar ? `url(${props.artist.avatar})` : null;
});

function onOptionsButtonClick() {
  alert('Open menu.');
}
</script>

<style scoped lang="scss">
.mobile-artist-header {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100vw;
  aspect-ratio: 1;
  background-image: v-bind(artistAvatarURL);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: saturate(var(--img-saturate));
  padding-block: var(--section-bottom-margin, 24px);

  &::after {
    position: absolute;
    inset: 0;
    box-shadow: inset 0px -120px 120px 0px var(--base-bg, black);
    content: '';
  }

  &__details {
    position: relative;
    z-index: 10;
  }

  &__heading {
    line-height: 1.2;
    margin-bottom: 4px;

    @include text-ellipsis(2);
  }
}
</style>

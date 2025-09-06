<template>
  <header class="mobile-artist-header">
    <div class="container">
      <div class="mobile-artist-header__details">
        <UIHeading class="mobile-artist-header__heading">
          {{ artist.name }}
        </UIHeading>

        <UIIconButton
          appearance="secondary"
          icon="i-ph-dots-three-outline-fill"
          icon-size="20"
          aria-label="Artist options"
          @click="onOptionsButtonClick"
        >
        </UIIconButton>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import type {
  MobileArtistHeaderProps,
} from "~/modules/artist/components/MobileArtistHeader/types";

const props = defineProps<MobileArtistHeaderProps>();

const cssArtistAvatarURL = computed<string | null>(() => {
  return props.artist.avatar ? `url(${props.artist.avatar})` : null;
})

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
  background-image: v-bind(cssArtistAvatarURL);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: saturate(200%);
  z-index: 10;

  &::before {
    position: absolute;
    inset: 0;
    z-index: -10;
    background: linear-gradient(0deg, var(--base-bg) 0%, transparent 100%);
    content: "";
  }

  &__heading {
    line-height: 1.2;

    @include text-ellipsis(2);
  }

  &__details {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>

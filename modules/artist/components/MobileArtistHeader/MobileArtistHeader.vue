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
          aria-label="Artist menu"
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

const artistAvatarURL = computed<string | null>(() => {
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
  background-image: v-bind(artistAvatarURL);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: saturate(var(--img-saturate));
  padding-bottom: 16px;

  &::before {
    position: absolute;
    inset: 0;
    background: linear-gradient(0deg, var(--base-bg) 0%, transparent 80%);
    content: "";
  }

  &__details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 10;
  }

  &__heading {
    line-height: 1.2;

    @include text-ellipsis(2);
  }
}
</style>

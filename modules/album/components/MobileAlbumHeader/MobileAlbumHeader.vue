<template>
  <header class="mobile-album-header">
    <div class="container">
      <UIImg :path="album.cover" :alt="album.name" class="mobile-album-header__cover" />

      <div class="mobile-album-header__details">
        <UIHeading align="center" :line-clamp="2" leading-none class="mobile-album-header__name">
          {{ album.name }}
        </UIHeading>

        <UIText appearance="secondary" align="center" class="mobile-album-header__meta-data">
          <span class="mobile-album-header__meta-data-item">{{ album.type.label }}</span>

          <span v-if="releaseAlbumDate" class="mobile-album-header__meta-data-item">
            {{ releaseAlbumDate }}
          </span>
        </UIText>

        <ArtistLinks
          :items="album.artists"
          separator="dot"
          class="mobile-album-header__artist-links"
        />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { MobileAlbumHeaderProps } from '~/modules/album/components/MobileAlbumHeader/types';

const props = defineProps<MobileAlbumHeaderProps>();
const dayjs = useDayjs();

const releaseAlbumDate = computed<string | null>(() => {
  if (!props.album.releaseAt) return null;

  return dayjs(props.album.releaseAt).format('D MMM YYYY');
});
</script>

<style scoped lang="scss">
.mobile-album-header {
  --album-color: v-bind(props.album.color);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-block: var(--section-y-padding, 16px);
  background: linear-gradient(0deg, var(--base-bg) 0%, var(--album-color, var(--base-bg)) 90%);
  min-height: 50vh;

  &__cover {
    --width: 160px;
    --height: 160px;
    margin-inline: auto;
    margin-bottom: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);

    @include respond-to(xs) {
      --width: 280px;
      --height: 280px;
      margin-bottom: 20px;
    }
  }

  &__meta-data {
    font-size: 12px;
    margin-bottom: 4px;

    @include respond-to(xs) {
      font-size: 14px;
    }
  }

  &__meta-data-item {
    &:not(:last-child)::after {
      content: '•';
      margin-inline: 4px;
    }
  }

  &__artist-links {
    display: flex;
    justify-content: center;
    font-size: 14px;
    --ui-link-color: var(--main-text, white);

    @include respond-to(xs) {
      font-size: 16px;
    }
  }
}
</style>

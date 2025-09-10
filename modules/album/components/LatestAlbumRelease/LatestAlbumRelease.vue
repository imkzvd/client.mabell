<template>
  <div class="latest-album-release">
    <NuxtLink
      :aria-label="`Go to ${album.name} album page`"
      :to="{ name: 'album', params: { id: album.id } }"
      class="latest-album-release__link-container"
    >
      <AlbumCover
        :url="album.cover"
        :alt="album.name"
        class="latest-album-release__album-cover"
      />

      <div class="latest-album-release__details">
        <UIText is-bold class="latest-album-release__name">{{ album.name }}</UIText>

        <UIText appearance="secondary" size="14px" class="latest-album-release__meta">
          <span>{{ album.type.label }}</span> -
          <span v-if="releaseDate">{{ releaseDate }}</span>
        </UIText>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { LatestAlbumReleaseProps } from "~/modules/album/components/LatestAlbumRelease/types";

const props = defineProps<LatestAlbumReleaseProps>();

const releaseDate = computed<string | null>(() => {
  const { releaseAt } = props.album;

  return releaseAt ? new Date(releaseAt).toLocaleDateString() : null;
})
</script>

<style scoped lang="scss">
.latest-album-release {
  @include respond-to(xl) {
    &:hover & {
      &__name {
        text-decoration: underline;
      }
    }
  }

  &__link-container {
    display: flex;
    align-items: center;
    gap: 12px;

    @include respond-to(xl) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  &__album-cover {
    @include respond-to(xs) {
      --size: 140px;
    }

    @include respond-to(xl) {
      --size: 200px;
    }
  }
}
</style>

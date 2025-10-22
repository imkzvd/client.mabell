<template>
  <div class="global-search">
    <UISection with-container>
      <UIInput
        v-model="modelValue"
        size="lg"
        placeholder="Enter the name of the artist, album, track, playlist"
        class="global-search__input"
        is-clearable
        @update:model-value="onModelValueUpdate"
        @blur="onBlur"
      />
    </UISection>

    <template v-if="isSearchFetching">
      <div class="container">
        <SkeletonSection>
          <SkeletonTopResults />
        </SkeletonSection>

        <SkeletonSection v-if="isDesktopOrTablet">
          <SkeletonSlider />
        </SkeletonSection>
      </div>
    </template>
    <template v-else-if="searchResult">
      <UISection v-if="searchResult?.topResults.length" heading="Top  Results" with-container>
        <TopResults :items="searchResult.topResults.slice(0, 108)" />
      </UISection>

      <UISection v-if="searchResult?.albums.total" heading="Albums" :content-container="false">
        <AlbumSlider :items="searchResult?.albums.items" class="global-search__slider" />
      </UISection>

      <UISection v-if="searchResult?.artists.total" heading="Artists" :content-container="false">
        <ArtistSlider :items="searchResult?.artists.items" class="global-search__slider" />
      </UISection>

      <UISection v-if="searchResult?.tracks.total" heading="Tracks" with-container>
        <TopResults :items="searchResult.tracks.items" />
      </UISection>

      <UISection
        v-if="searchResult?.playlists.total"
        heading="Playlists"
        :content-container="false"
      >
        <PlaylistSlider :items="searchResult.playlists.items" />
      </UISection>

      <UIText
        v-if="
          !searchResult?.topResults.length &&
          !searchResult?.albums.total &&
          !searchResult?.artists.total &&
          !searchResult?.tracks.total &&
          !searchResult?.playlists.total
        "
        size="16px"
        is-bold
        align="center"
      >
        No Results
      </UIText>
    </template>
    <slot v-else name="default" />
  </div>
</template>

<script setup lang="ts">
import { searchApiService } from '~/modules/search/services/search.api-service';
import type { SearchResultRO } from '~/api/api.module';

const router = useRouter();
const route = useRoute();
const { isDesktopOrTablet } = useDevice();
const queryFromRouter = route.query.q as string | undefined;
const debounceSearch = useDebounceFn(search, 500);
const [isSearchFetching, toggleSearchFetching] = useToggle();

const modelValue = ref<string>(queryFromRouter || '');
const searchResult = ref<SearchResultRO | null>(null);

onMounted(() => {
  if (modelValue.value) {
    search(modelValue.value);
  }
});

async function onModelValueUpdate(q: string | null) {
  if (!q) {
    searchResult.value = null;

    return;
  }

  await debounceSearch(q);
}

function onBlur(value: string) {
  router.push({ query: { q: value } });
}

async function search(q: string) {
  try {
    toggleSearchFetching();
    searchResult.value = await searchApiService.search(q);
  } catch (e) {
    const { message } = e as Error;

    console.error(message);
  } finally {
    toggleSearchFetching();
  }
}
</script>

<style scoped lang="scss">
@use '~/assets/scss/container';

.global-search {
  &__input {
    margin-bottom: 16px;
  }

  &__slider {
    @extend .container;
  }
}
</style>

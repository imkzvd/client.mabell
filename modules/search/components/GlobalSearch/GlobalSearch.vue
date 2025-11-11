<template>
  <div class="global-search">
    <UISection content-container>
      <UIInput
        v-model="modelValue"
        :size="isDesktop ? 'lg' : 'md'"
        placeholder="What do you want to listen to?"
        is-clearable
        @blur="onBlur"
        @update:model-value="onModelValueUpdate"
      />
    </UISection>

    <template v-if="isSearchFetching">
      <SkeletonSectionLoader heading-container content-container>
        <SkeletonTopResultsLoader />
      </SkeletonSectionLoader>

      <SkeletonSectionLoader v-if="isDesktopOrTablet" heading-container content-container>
        <SkeletonCardLinkListLoader image-rounded text-align="center" />
      </SkeletonSectionLoader>

      <SkeletonSectionLoader v-if="isDesktopOrTablet" heading-container content-container>
        <SkeletonCardLinkListLoader is-rounded-image text-rows="2" />
      </SkeletonSectionLoader>
    </template>
    <template v-else-if="searchResult">
      <template
        v-if="
          searchResult.topResults.length || // TODO: add 'searchResult.total' in api resp for all items
          searchResult.albums.total || //
          searchResult.artists.total || //
          searchResult.tracks.total || //
          searchResult.playlists.total //
        "
      >
        <UISection
          v-if="searchResult.topResults.length"
          heading="Top Results"
          heading-container
          content-container
        >
          <!--TODO: delete slice.-->
          <TopResults :items="searchResult.topResults.slice(0, 8)" />
        </UISection>

        <UISection
          v-if="searchResult.albums.items.length"
          heading="Albums"
          heading-container
          :content-container="!isMobileOrTablet"
        >
          <AlbumCardLinksSlider
            v-if="isMobileOrTablet"
            :items="searchResult.albums.items"
            show-artists
            class="global-search__slider"
          />
          <AlbumCardLinksList v-else :items="searchResult.albums.items" max-rows="1" show-artists />
        </UISection>

        <UISection
          v-if="searchResult.artists.items.length"
          heading="Artists"
          heading-container
          :content-container="!isMobileOrTablet"
        >
          <ArtistCardLinksSlider
            v-if="isMobileOrTablet"
            :items="searchResult.artists.items"
            class="global-search__slider"
          />
          <ArtistCardLinksList v-else :items="searchResult.artists.items" />
        </UISection>

        <UISection
          v-if="searchResult.tracks.total"
          heading="Tracks"
          heading-container
          content-container
        >
          <TopResults :items="searchResult.tracks.items" />
        </UISection>

        <UISection
          v-if="searchResult.playlists.items.length"
          heading="Playlists"
          heading-container
          :content-container="!isMobileOrTablet"
        >
          <PlaylistCardLinksSlider
            v-if="isMobileOrTablet"
            :items="searchResult.playlists.items"
            class="global-search__slider"
          />
          <PlaylistCardLinksList v-else :items="searchResult.playlists.items" max-rows="2" />
        </UISection>
      </template>
      <UISection v-else class="global-search__no-results-section">
        <UIText size="16px" is-bold align="center">No Results.</UIText>
      </UISection>
    </template>
  </div>
</template>

<script setup lang="ts">
import { searchApiService } from '~/modules/search/services/search.api-service';
import type { SearchResultRO } from '~/api/api.module';
import type { GlobalSearchEmit } from '~/modules/search/components/GlobalSearch/types';

const emit = defineEmits<GlobalSearchEmit>();

const router = useRouter();
const route = useRoute();
const { isMobileOrTablet, isDesktopOrTablet, isDesktop } = useDevice();
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
    emit('search-start');
    toggleSearchFetching();

    searchResult.value = await searchApiService.search(q);
  } catch (e) {
    const { message } = e as Error;

    console.error(message);
  } finally {
    emit('search-end');
    toggleSearchFetching();
  }
}
</script>

<style scoped lang="scss">
@use '~/assets/scss/container';

.global-search {
  &__slider {
    @extend .container;
  }

  &__no-results-section {
    padding-block: 24px;
  }
}
</style>

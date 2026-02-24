<template>
  <UIText class="artist-names" appearance="secondary" :max-rows="maxRows">
    {{ preparedString }}
  </UIText>
</template>

<script setup lang="ts">
import {
  type ArtistNamesProps,
  ArtistNamesSeparators,
} from '~/modules/artist/components/ArtistNames/types';

const props = withDefaults(defineProps<ArtistNamesProps>(), {
  separator: ArtistNamesSeparators.comma,
});

const allArtistNames = computed<string[]>(() => props.items.map(({ name }) => name));
const preparedString = computed<string>(() => {
  return props.separator === ArtistNamesSeparators.comma
    ? allArtistNames.value.join(', ')
    : allArtistNames.value.join(' • ');
});
</script>

<style scoped lang="scss"></style>

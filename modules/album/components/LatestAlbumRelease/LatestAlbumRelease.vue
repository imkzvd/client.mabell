<template>
  <AlbumCardLink :item="album" show-meta full-date />
</template>

<script setup lang="ts">
import type { LatestAlbumReleaseProps } from '~/modules/album/components/LatestAlbumRelease/types';

defineProps<LatestAlbumReleaseProps>();
</script>

<style scoped lang="scss"></style>

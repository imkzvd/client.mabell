import type { SimplifiedAlbumRO } from '~/api/api.module';

export type AlbumCardLinksSliderProps = {
  items: SimplifiedAlbumRO[];
  showArtists?: boolean;
  showMeta?: boolean;
};

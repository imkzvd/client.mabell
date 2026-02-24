import type { AlbumRO, SimplifiedAlbumRO } from '~/api/api.module';

export type AlbumCardLinksListProps = {
  items: (AlbumRO | SimplifiedAlbumRO)[];
  maxRows?: string | number;
  showArtists?: boolean;
  showMeta?: boolean;
};

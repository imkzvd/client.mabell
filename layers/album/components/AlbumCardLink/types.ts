import type { AlbumRO, SimplifiedAlbumRO } from '~/api/api.module';

export type AlbumCardLinkProps = {
  item: AlbumRO | SimplifiedAlbumRO;
  showArtists?: boolean;
  showMeta?: boolean;
  fullDate?: boolean;
};

import type { SimplifiedAlbumRO } from '~/api/api.module';

export type AlbumCardLinksProps = {
  items: SimplifiedAlbumRO[];
  maxRows?: string | number;
};

export type AlbumCardLinkProps = {
  item: SimplifiedAlbumRO;
};

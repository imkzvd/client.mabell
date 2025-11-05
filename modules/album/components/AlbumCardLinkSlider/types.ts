import type { SimplifiedAlbumRO } from '~/api/api.module';

export type AlbumCardLinkSliderProps = {
  items: SimplifiedAlbumRO[];
  maxRows?: string | number;
};

export type AlbumCardLinkProps = {
  item: SimplifiedAlbumRO;
};

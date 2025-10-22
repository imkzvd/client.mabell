import type { SimplifiedAlbumRO } from '~/api/api.module';

export type AlbumSliderProps = {
  items: SimplifiedAlbumRO[];
};

export type AlbumSliderItemProps = {
  item: SimplifiedAlbumRO;
};

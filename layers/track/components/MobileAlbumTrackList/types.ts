import type { TrackRO } from '~/api/api.module';

export type MobileAlbumTrackListProps = {
  items: TrackRO[];
  currentItemId?: string;
  isPlaying?: boolean;
  ariaLabel?: string;
};

export type MobileAlbumTrackListEmits = {
  (e: 'play-item', item: TrackRO, index: number): void;
  (e: 'pause-item', item: TrackRO, index: number): void;
  (e: 'add-item', item: TrackRO, index: number): void;
};

export type MobileAlbumTrackListItemProps = {
  item: TrackRO;
  index: number;
  selectedItemId?: string;
  currentItemId?: string;
  isPlaying?: boolean;
};

export type MobileAlbumTrackListItemEmits = {
  (e: 'play-item'): void;
  (e: 'pause-item'): void;
  (e: 'add-item'): void;
  (e: 'open-item-menu', evt: Event): void;
};

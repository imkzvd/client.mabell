import type { TrackRO } from '~/api/api.module';

export type MobileTrackListProps = {
  items: TrackRO[];
  currentItemId?: string;
  isPlaying?: boolean;
  ariaLabel?: string;
  showCover?: boolean;
};

export type MobileTrackListEmits = {
  (e: 'play-item', item: TrackRO, index: number): void;
};

export type MobileTrackListItemProps = {
  item: TrackRO;
  index: number;
  currentItemId?: string;
  isPlaying?: boolean;
  showCover?: boolean;
};

export type MobileTrackListItemEmits = {
  (e: 'open-item-menu', evt: Event): void;
};

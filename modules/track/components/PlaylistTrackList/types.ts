import type { PlaylistTrackRO } from '~/api/api.module';

export type PlaylistTrackListListProps = {
  items: PlaylistTrackRO[];
  currentItemId?: string;
  isPlaying?: boolean;
  ariaLabel?: string;
};

export type PlaylistTrackListListEmits = {
  (e: "play-item", item: PlaylistTrackRO, index: number): void;
  (e: "pause-item", item: PlaylistTrackRO, index: number): void;
  (e: "add-item", item: PlaylistTrackRO, index: number): void;
};

export type PlaylistTrackListListItemProps = {
  item: PlaylistTrackRO;
  index: number;
  selectedItemId?: string;
  currentItemId?: string;
  isPlaying?: boolean;
};

export type PlaylistTrackListListItemEmits = {
  (e: "play-item"): void;
  (e: "pause-item"): void;
  (e: "add-item"): void;
  (e: "open-item-menu", evt: Event): void;
};

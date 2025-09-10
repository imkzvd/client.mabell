import type { TrackRO } from "~/api/api.module";

export type AlbumTrackListProps = {
  items: TrackRO[];
  currentItemId?: string;
  isPlaying?: boolean;
  ariaLabel?: string;
};

export type AlbumTrackListEmits = {
  (e: "play-item", item: TrackRO, index: number): void;
  (e: "pause-item", item: TrackRO, index: number): void;
  (e: "add-item", item: TrackRO, index: number): void;
};

export type AlbumTrackListItemProps = {
  item: TrackRO;
  index: number;
  selectedItemId?: string;
  currentItemId?: string;
  isPlaying?: boolean;
};

export type AlbumTrackListItemEmits = {
  (e: "play-item"): void;
  (e: "pause-item"): void;
  (e: "add-item"): void;
  (e: "open-item-menu", evt: Event): void;
};

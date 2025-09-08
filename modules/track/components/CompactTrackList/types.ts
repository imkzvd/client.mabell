import type { TrackRO } from "~/api/api.module";

export type CompactTrackListProps = {
  items: TrackRO[];
  currentItemId?: string;
  isPlaying?: boolean;
  ariaLabel?: string;
};

export type CompactTrackListEmits = {
  (e: "play-item", item: TrackRO, index: number): void;
  (e: "pause-item", item: TrackRO, index: number): void;
  (e: "add-item", item: TrackRO, index: number): void;
};

export type CompactTrackListItemProps = {
  item: TrackRO;
  selectedItemId?: string;
  currentItemId?: string;
  isPlaying?: boolean;
};

export type CompactTrackListItemEmits = {
  (e: "play-item"): void;
  (e: "pause-item"): void;
  (e: "add-item"): void;
  (e: "open-item-menu", evt: Event): void;
};

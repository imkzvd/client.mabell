import type { TrackRO } from "~/api/api.module";

export type MobileTrackListProps = {
  items: TrackRO[];
  currentItemId?: string;
  isPlaying?: boolean;
};

export type MobileTrackListEmits = {
  (e: "play-item", item: TrackRO, index: number): void;
};

export type MobileTrackListItemProps = {
  item: TrackRO;
  currentItemId?: string;
  isPlaying?: boolean;
};

export type MobileTrackListItemEmits = {
  (e: "open-item-menu", evt: Event): void;
};

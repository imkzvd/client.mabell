import type { PlaylistRO } from "~/api/api.module";

export type PlaylistSliderProps = {
  items: PlaylistRO[];
};

export type PlaylistSliderItemProps = {
  item: PlaylistRO;
};

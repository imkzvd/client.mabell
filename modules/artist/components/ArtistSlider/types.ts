import type { ArtistRO } from "~/api/api.module";

export type ArtistSliderProps = {
  items: ArtistRO[];
};

export type ArtistSliderItemProps = {
  item: ArtistRO;
};

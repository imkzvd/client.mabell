import type { ArtistRO, SimplifiedArtistRO } from "~/api/api.module";

export type ArtistNamesProps = {
  items: (ArtistRO | SimplifiedArtistRO)[];
};

import type { ArtistRO } from '~/api/api.module';

export type SimilarArtistSliderProps = {
  items: ArtistRO[];
};

export type ArtistSliderCardProps = {
  item: ArtistRO;
};

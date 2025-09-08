import type { ArtistRO, SimplifiedArtistRO } from '~/api/api.module';

export type ArtistLinksProps = {
  items: (ArtistRO | SimplifiedArtistRO)[];
};

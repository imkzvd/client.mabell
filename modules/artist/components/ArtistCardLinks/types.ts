import type { ArtistRO } from '~/api/api.module';

export type ArtistCardLinksProps = {
  items: ArtistRO[];
  maxRows?: string | number;
};

export type ArtistCardLinkProps = {
  item: ArtistRO;
};

import type { ArtistRO } from '~/api/api.module';

export type ArtistCardLinksListProps = {
  items: ArtistRO[];
  maxRows?: string | number;
};

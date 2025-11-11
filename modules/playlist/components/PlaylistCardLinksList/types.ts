import type { PlaylistRO } from '~/api/api.module';

export type PlaylistCardLinksListProps = {
  items: PlaylistRO[];
  maxRows?: string | number;
};

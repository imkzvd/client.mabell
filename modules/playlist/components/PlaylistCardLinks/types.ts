import type { PlaylistRO } from '~/api/api.module';

export type PlaylistCardLinksProps = {
  items: PlaylistRO[];
  maxRows?: string | number;
};

export type PlaylistCardLinkProps = {
  item: PlaylistRO;
};

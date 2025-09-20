import type { ArtistRO, SimplifiedArtistRO } from '~/api/api.module';
import type { UILinkProps } from '~/modules/shared/components/UI/UILink/types';

export type ArtistLinksProps = {
  items: (ArtistRO | SimplifiedArtistRO)[];
  dotSeparator?: boolean;
  hoverUnderline?: UILinkProps['hoverUnderline'];
};

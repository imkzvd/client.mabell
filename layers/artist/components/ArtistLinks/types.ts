import type { ArtistRO, SimplifiedArtistRO } from '../../../../api/api.module';
import type { UILinkProps } from '../../../shared/components/UI/UILink/types';

export type ArtistLinksSeparator = 'comma' | 'dot';

export type ArtistLinksProps = {
  items: (ArtistRO | SimplifiedArtistRO)[];
  isHoverUnderlined?: UILinkProps['isHoverUnderlined'];
  separator?: ArtistLinksSeparator;
  isTruncated?: boolean;
};

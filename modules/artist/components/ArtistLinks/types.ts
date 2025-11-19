import type { ArtistRO, SimplifiedArtistRO } from '~/api/api.module';
import type { UILinkProps } from '~/modules/shared/components/UI/UILink/types';

export enum ArtistLinksSeparators {
  comma = 'comma',
  dot = 'dot',
}

export type ArtistLinksSeparator = keyof typeof ArtistLinksSeparators;

export type ArtistLinksProps = {
  items: (ArtistRO | SimplifiedArtistRO)[];
  isHoverUnderlined?: UILinkProps['isHoverUnderlined'];
  separator?: ArtistLinksSeparator;
  isTruncated?: boolean;
};

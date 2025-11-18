import type { ArtistRO, SimplifiedArtistRO } from '~/api/api.module';
import type { UITextProps } from '~/modules/shared/components/UI/UIText/types';

export enum ArtistNamesSeparators {
  comma = 'comma',
  dot = 'dot',
}

export type ArtistNamesSeparator = keyof typeof ArtistNamesSeparators;

export type ArtistNamesProps = {
  items: (ArtistRO | SimplifiedArtistRO)[];
  maxRows?: UITextProps['maxRows'];
  separator?: ArtistNamesSeparator;
};

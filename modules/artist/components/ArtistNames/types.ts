import type { ArtistRO, SimplifiedArtistRO } from "~/api/api.module";
import type { UITextProps } from '#shared/components/UI/UIText/types';

export enum ArtistNamesSeparators {
  comma = 'comma',
  dot = 'dot'
}

export type ArtistNamesSeparator = keyof typeof ArtistNamesSeparators;

export type ArtistNamesProps = {
  items: (ArtistRO | SimplifiedArtistRO)[];
  lineClamp?: UITextProps['lineClamp'];
  separator?: ArtistNamesSeparator;
};

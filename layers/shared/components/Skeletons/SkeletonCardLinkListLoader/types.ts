import type { UIAlignment } from '~/layers/shared/components/UI/types';

export type SkeletonCardLinkListLoaderProps = {
  mode?: 'list' | 'slider';
  textRows?: '1' | '2';
  textAlign?: UIAlignment;
  imageRounded?: boolean;
};

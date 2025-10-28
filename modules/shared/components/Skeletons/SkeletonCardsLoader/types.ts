import type { UIAlignment } from '~/modules/shared/components/UI/types';

export type SkeletonCardsLoaderProps = {
  total?: number;
  rows?: '1' | '2';
  roundedImage?: boolean;
  align?: UIAlignment;
};

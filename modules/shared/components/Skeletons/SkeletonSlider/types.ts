import type { UIAlignment } from '~/modules/shared/components/UI/types';

export type SkeletonSliderProps = {
  total?: number;
  align?: UIAlignment;
  isRounded?: boolean;
};

export type SkeletonSliderItemProps = {
  align?: UIAlignment;
  isRounded?: boolean;
};

import type { UIAppearance } from '~/modules/shared/components/UI/types';

export type UITextProps = {
  lineClamp?: number | null;
  tag?: string;
  appearance?: UIAppearance;
  isBold?: boolean;
  size?: string;
};

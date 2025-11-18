import type { UIAlignment, UIAppearance } from '~/modules/shared/components/UI/types';

export type UITextProps = {
  maxRows?: number | string;
  tag?: string;
  appearance?: UIAppearance;
  isBold?: boolean;
  size?: string;
  align?: UIAlignment;
};

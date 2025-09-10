import type { UIAppearance } from '#shared/components/UI/types';

export type UITextProps = {
  lineClamp?: number | null;
  tag?: string;
  appearance?: UIAppearance;
  isBold?: boolean;
};

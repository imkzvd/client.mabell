import type { UIAlignment } from '~/layers/shared/components/UI/types';

export type UIHeadingProps = {
  level?: string | number;
  leadingNone?: boolean;
  maxRows?: number | string;
  align?: UIAlignment;
};

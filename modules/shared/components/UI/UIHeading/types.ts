import type { UIAlignment } from '~/modules/shared/components/UI/types';

export type UIHeadingProps = {
  level?: string | number;
  leadingNone?: boolean;
  lineClamp?: number | null;
  align?: UIAlignment;
};

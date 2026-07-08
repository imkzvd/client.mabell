export type UIAlignment = 'left' | 'center' | 'right';

export type UIHeadingProps = {
  level?: string | number;
  leadingNone?: boolean;
  maxRows?: number | string;
  align?: UIAlignment;
};

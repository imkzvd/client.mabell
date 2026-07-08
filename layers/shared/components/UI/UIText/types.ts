export type UITextTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

export type UITextSize =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';

export type UIAppearance = 'primary' | 'secondary';

export type UIAlignment = 'left' | 'center' | 'right';

export type UITextProps = {
  tag?: UITextTag;
  size?: UITextSize;
  weight?: number | string;
  // color?: UIAppearance;
  align?: UIAlignment;
  maxRows?: number | string;
};

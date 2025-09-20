export enum UIButtonTypes {
  button = 'button',
  submit = 'submit',
}

export type UIButtonType = keyof typeof UIButtonTypes;

export enum UIButtonSizes {
  sm = 'sm',
  md = 'md',
  lg = 'lg'
}

export type UIButtonSize = keyof typeof UIButtonSizes;

export enum UIButtonAppearances {
  primary = 'primary',
  secondary = 'secondary',
}

export type UIButtonAppearance = keyof typeof UIButtonAppearances;

export type UIButtonProps = {
  type?: UIButtonType;
  size?: UIButtonSize;
  appearance?: UIButtonAppearance;
  isFull?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
};

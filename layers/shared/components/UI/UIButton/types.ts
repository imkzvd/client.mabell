export type UIButtonType = 'button' | 'submit';

export type UIButtonSize = 'sm' | 'md' | 'lg';

export type UIButtonColor = 'primary' | 'secondary';

export type UIButtonProps = {
  type?: UIButtonType;
  size?: UIButtonSize;
  color?: UIButtonColor;
  isFull?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
};

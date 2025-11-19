import type { UIAppearance, UISize } from '~/modules/shared/components/UI/types';

export enum UIButtonTypes {
  button = 'button',
  submit = 'submit',
}

export type UIButtonType = keyof typeof UIButtonTypes;

export type UIButtonProps = {
  type?: UIButtonType;
  size?: UISize;
  appearance?: UIAppearance;
  isFull?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
};

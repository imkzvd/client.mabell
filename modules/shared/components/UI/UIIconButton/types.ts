export enum UIIconButtonAppearances {
  primary = 'primary',
  secondary = 'secondary',
}

export type UIIconButtonAppearance = keyof typeof UIIconButtonAppearances;

export type UIIconButtonProps = {
  icon: string;
  appearance?: UIIconButtonAppearance;
  iconSize?: string;
  isDisabled?: boolean;
  ariaLabel?: string;
};

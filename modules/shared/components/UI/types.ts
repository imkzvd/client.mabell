export enum UIAppearances {
  primary = 'primary',
  secondary = 'secondary',
}

export type UIAppearance = keyof typeof UIAppearances;

export enum UISizes {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

export type UISize = keyof typeof UISizes;

export enum UIAlignments {
  left = 'left',
  center = 'center',
  right = 'right',
}

export type UIAlignment = keyof typeof UIAlignments;

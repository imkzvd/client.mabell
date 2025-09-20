export enum UIAppearances {
  primary = 'primary',
  secondary = 'secondary',
}

export type UIAppearance = keyof typeof UIAppearances;

export enum UISizes {
  sm = 'sm',
  md = 'md',
  lg = 'lg'
}

export type UISize = keyof typeof UISizes;
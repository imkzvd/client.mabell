export enum DesktopPlayerTimerModes {
  full = 'full',
  elapsed = 'elapsed',
  remaining = 'remaining',
}

export type DesktopPlayerTimerMode = keyof typeof DesktopPlayerTimerModes;

export type DesktopPlayerTimerProps = {
  value: number;
  duration: number;
  mode?: DesktopPlayerTimerMode;
};

export type DesktopPlayerTimerEmits = {
  (e: 'mode-change', mode: DesktopPlayerTimerMode): void;
};

export enum DesktopAudioPlayerTimerModes {
  full = 'full',
  elapsed = 'elapsed',
  remaining = 'remaining',
}

export type DesktopAudioPlayerTimerMode = keyof typeof DesktopAudioPlayerTimerModes;

export type DesktopAudioPlayerTimerProps = {
  value: number;
  duration: number;
  mode?: DesktopAudioPlayerTimerMode;
};

export type DesktopAudioPlayerTimerEmits = {
  (e: 'mode-change', mode: DesktopAudioPlayerTimerMode): void;
};

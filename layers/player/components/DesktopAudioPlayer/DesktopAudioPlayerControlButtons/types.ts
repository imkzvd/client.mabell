export type DesktopAudioPlayerControlButtonsProps = {
  isPlaying: boolean;
  isDisabled?: boolean;
};

export type DesktopAudioPlayerControlButtonsEmits = {
  (e: 'previous'): void;
  (e: 'play'): void;
  (e: 'pause'): void;
  (e: 'next'): void;
};

export type MobileAudioPlayerControlButtonsProps = {
  isPlaying: boolean;
  isDisabled?: boolean;
};

export type MobileAudioPlayerControlButtonsEmits = {
  (e: 'play'): void;
  (e: 'pause'): void;
};

export type MobilePlayerControlButtonsProps = {
  isPlaying: boolean;
  isDisabled?: boolean;
};

export type MobilePlayerControlButtonsEmits = {
  (e: "play"): void;
  (e: "pause"): void;
};

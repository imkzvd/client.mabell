export type DesktopPlayerControlButtonsProps = {
  isPlaying: boolean;
  isDisabled?: boolean;
  isPreviousButtonDisabled?: boolean;
  isNextButtonDisabled?: boolean;
};

export type DesktopPlayerControlButtonsEmits = {
  (e: "previous"): void;
  (e: "play"): void;
  (e: "pause"): void;
  (e: "next"): void;
};

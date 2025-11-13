export type DesktopAudioPlayerProgressBarProps = {
  modelValue: number;
  max?: number;
};

export type DesktopAudioPlayerProgressBarEmits = {
  (e: 'update:modelValue', value: number): void;
  (e: 'change', value: number): void;
  (e: 'mouseup'): void;
  (e: 'mousedown'): void;
};

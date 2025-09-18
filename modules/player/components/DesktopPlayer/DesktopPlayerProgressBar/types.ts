export type DesktopPlayerProgressBarProps = {
  modelValue: number;
  max?: number;
};

export type DesktopPlayerProgressBarEmits = {
  (e: "update:modelValue", value: number): void;
  (e: "change", value: number): void;
};

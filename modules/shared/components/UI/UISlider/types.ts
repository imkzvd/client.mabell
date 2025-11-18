export type UISliderProps = {
  modelValue: number;
  max?: number;
  width?: string;
};

export type UISliderEmits = {
  (e: 'update:modelValue', value: number): void;
  (e: 'change', value: number): void;
  (e: 'mouseup', evt: MouseEvent): void;
  (e: 'mousedown', evt: MouseEvent): void;
};

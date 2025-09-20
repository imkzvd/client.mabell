export type UISliderProps = {
  modelValue: number;
  max?: number;
};

export type UISliderEmits = {
  (e: "update:modelValue", value: number): void;
  (e: "change", value: number): void;
};

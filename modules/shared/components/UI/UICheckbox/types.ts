export type UICheckboxProps = {
  modelValue: boolean;
  id?: string;
  name?: string;
  label?: string;
  sublabel?: string;
  isDisabled?: boolean;
};

export type UICheckboxEmits = {
  (e: 'update:modelValue', value: boolean): void;
};

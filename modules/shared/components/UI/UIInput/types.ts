export enum UIInputTypes {
  email = 'email',
  number = 'number',
  password = 'password',
  tel = 'tel',
  text = 'text',
}

export type UIInputType = keyof typeof UIInputTypes;

export enum UIInputSizes {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

export type UIInputSize = keyof typeof UIInputSizes;

export type UIInputProps = {
  modelValue: string | number;
  id?: string;
  name?: string;
  type?: UIInputType;
  size?: UIInputSize;
  placeholder?: string;
  label?: string;
  minLength?: number;
  maxLength?: number;
  isDisabled?: boolean;
  isReadonly?: boolean;
  isRequired?: boolean;
  isClearable?: boolean;
};

export type UIInputEmits = {
  (e: 'update:modelValue', value: string): void;
  (e: 'input', value: string): void;
  (e: 'change', value: string): void;
  (e: 'focus'): void;
  (e: 'blur'): void;
};

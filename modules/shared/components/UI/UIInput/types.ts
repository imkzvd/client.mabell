import type { UISize } from '~/modules/shared/components/UI/types';

export enum UIInputTypes {
  email = 'email',
  number = 'number',
  password = 'password',
  tel = 'tel',
  text = 'text',
}

export type UIInputType = keyof typeof UIInputTypes;

export type UIInputProps = {
  modelValue?: string;
  id?: string;
  name?: string;
  type?: UIInputType;
  size?: UISize;
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
  (e: 'update:modelValue', value: UIInputProps['modelValue']): void;
  (e: 'input', value: UIInputProps['modelValue']): void;
  (e: 'change', value: UIInputProps['modelValue']): void;
  (e: 'focus', value: UIInputProps['modelValue']): void;
  (e: 'blur', value: UIInputProps['modelValue']): void;
};

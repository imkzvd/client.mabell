import type { Rules } from 'async-validator';

export type UIFormProps = {
  state: Record<string, any>;
  rules?: Rules;
};

export type UIFormItemProps = {
  name: string;
};

export type UIFormEmits = {
  (e: 'submit', evt: Event): void;
  (e: 'success-valid'): void;
  (e: 'fail-valid'): void;
};

export type UIFormItemContext = {
  isInvalid: boolean;
  validate(): Promise<boolean>;
  clearValidate(): void;
};

export type UIFormContext = {
  addFormItem(item: UIFormItemContext): void;
  addValidFormItem(item: UIFormItemContext): void;
  isInvalid?: boolean;
  rules?: Rules;
  state?: Record<string, any>;
};

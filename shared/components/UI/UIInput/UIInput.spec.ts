import { fireEvent, render, screen } from '@testing-library/vue';
import { describe, expect, test } from 'vitest';
import { userEvent } from '@testing-library/user-event';
import UIInput from '~/shared/components/UI/UIInput/UIInput.vue';
import { type UIInputProps, UIInputTypes } from '~/shared/components/UI/UIInput/types';

const fakeProps: UIInputProps = {
  modelValue: '',
};

function renderComponent(props?: Partial<UIInputProps>) {
  const component = render(UIInput, {
    // global: {
    //   stubs: {
    //     Icon: IconStub,
    //   },
    // },
    props: <UIInputProps>{
      ...fakeProps,
      ...props,
      'onUpdate:modelValue'(value: string) {
        component.rerender({
          modelValue: value,
        });
      },
    },
  });

  return component;
}

describe('UIInput', () => {
  describe('Default:', () => {
    test('it will render the input', () => {
      const { getByRole } = renderComponent();

      getByRole<HTMLInputElement>('textbox');
    });

    test('it will render the input with text type', () => {
      const { getByRole } = renderComponent();

      const inputEl = getByRole<HTMLInputElement>('textbox');

      expect(inputEl.type).toBe('text');
    });

    test('it will render not disabled input', () => {
      const { getByRole } = renderComponent();

      const inputEl = getByRole<HTMLInputElement>('textbox');

      expect(inputEl.disabled).toBeFalsy();
    });
  });

  describe('Reactive:', () => {
    test('it will render the input with custom type', () => {
      const fakeName = 'some-name';
      const { getByLabelText } = renderComponent({
        name: fakeName,
        type: UIInputTypes.password,
      });

      const inputEl = getByLabelText<HTMLInputElement>(fakeName);

      expect(inputEl.type).toBe(UIInputTypes.password);
    });

    test('it will render the input with id', () => {
      const fakeId = 'some-id';
      const { getByRole } = renderComponent({ id: fakeId });

      const inputEl = getByRole<HTMLInputElement>('textbox');

      expect(inputEl.id).toBe(fakeId);
    });

    test('it will render the input with name', () => {
      const fakeName = 'some-name';
      const { getByRole } = renderComponent({ name: fakeName });

      getByRole<HTMLInputElement>('textbox', { name: fakeName });
    });

    test('it will render the input with label', () => {
      const fakeLabel = 'Some Label';
      const { getByLabelText } = renderComponent({ label: fakeLabel });

      getByLabelText<HTMLInputElement>(fakeLabel);
    });

    test('it will render the input with placeholder', () => {
      const fakePlaceholder = 'Some placeholder';
      const { getByPlaceholderText } = renderComponent({ placeholder: fakePlaceholder });

      getByPlaceholderText<HTMLInputElement>(fakePlaceholder);
    });

    test('it will render disabled input', () => {
      const { getByRole } = renderComponent({ isDisabled: true });

      const inputEl = getByRole<HTMLInputElement>('textbox');

      expect(inputEl.disabled).toBeTruthy();
    });

    test('it will render required input', () => {
      const { getByRole } = renderComponent({ isRequired: true });

      const inputEl = getByRole<HTMLInputElement>('textbox');

      expect(inputEl.required).toBeTruthy();
    });

    test('it will render readonly input', () => {
      const { getByRole } = renderComponent({ isReadonly: true });

      const inputEl = getByRole<HTMLInputElement>('textbox');

      expect(inputEl.readOnly).toBeTruthy();
    });

    test('it will render clearable button, if it has some value', () => {
      const { getByRole } = renderComponent({
        modelValue: 'some text',
        isClearable: true
      });

      getByRole<HTMLButtonElement>('button', { name: 'Clear field' });
    })

    test('it will render password visible button', () => {
      const { getByRole } = renderComponent({
        type: UIInputTypes.password,
      });

      getByRole<HTMLButtonElement>('button', { name: 'Show password' });
    })
  });

  describe('Actions:', () => {
    test('it will render the input with value, if user type text', async () => {
      const { getByRole } = renderComponent();
      const user = userEvent.setup();
      const fakeTextValue = 'some text';

      const inputEl = getByRole<HTMLInputElement>('textbox');

      await user.type(inputEl, fakeTextValue);

      expect(inputEl.value).toBe(fakeTextValue);
    });

    test('it will focus the input, if user click the label', async () => {
      const fakeLabel = 'Some Label';
      const { getByLabelText, getByText } = renderComponent({ label: fakeLabel });
      const user = userEvent.setup();

      const inputEl = getByLabelText<HTMLInputElement>(fakeLabel);
      const labelEl = getByText<HTMLLabelElement>(fakeLabel);

      await user.click(labelEl);

      expect(document.activeElement).toBe(inputEl);
    });

    test('it will clear input value, if user click clearable button', async () => {
      const fakeTextValue = 'some text';
      const { getByRole } = renderComponent({
        modelValue: fakeTextValue,
        isClearable: true
      });
      const user = userEvent.setup();

      const inputEl = getByRole<HTMLInputElement>('textbox');

      expect(inputEl.value).toBe(fakeTextValue);

      const clearButton = getByRole<HTMLInputElement>('button', { name: 'Clear field' });

      await user.click(clearButton);

      expect(inputEl.value).toBe('');
    });

    test('it will show password, if user click password visible button', async () => {
      const fakePassword = '1234567';
      const { getByRole, getByText } = renderComponent({
        modelValue: fakePassword,
        type: UIInputTypes.password
      });
      const user = userEvent.setup();
      const passwordVisibleButton = getByRole<HTMLInputElement>('button', { name: 'Show password' });

      await user.click(passwordVisibleButton);

      getByRole<HTMLInputElement>('textbox')
    });

    test('it will emit "update:modelValue"', async () => {
      const { getByRole, emitted } = renderComponent();
      const expectedEventName = 'update:modelValue';
      const fakeTextValue = 'some text';

      const inputEl = getByRole<HTMLInputElement>('textbox');

      await fireEvent.update(inputEl, fakeTextValue);

      expect(emitted(expectedEventName)).toBeTruthy();
      expect(emitted(expectedEventName)?.[0]).toStrictEqual([fakeTextValue]);
    });

    test('it will emit "change"', async () => {
      const { getByRole, emitted } = renderComponent();
      const expectedEventName = 'change';
      const fakeTextValue = 'some text';

      const inputEl = getByRole<HTMLInputElement>('textbox');

      await fireEvent.change(inputEl, { target: { value: fakeTextValue } });

      expect(emitted(expectedEventName)).toBeTruthy();
      expect(emitted(expectedEventName)?.[0]).toStrictEqual([fakeTextValue]);
    });

    test('it will emit "blur"', async () => {
      const { getByRole, emitted } = renderComponent();
      const expectedEventName = 'blur';
      const fakeTextValue = 'some text';

      const inputEl = getByRole<HTMLInputElement>('textbox');

      await fireEvent.blur(inputEl, { target: { value: fakeTextValue } });

      expect(emitted(expectedEventName)).toBeTruthy();
    });
  });

  test('snapshot', () => {
    const { container } = renderComponent({ id: 'some-id' });

    expect(container).toMatchSnapshot();
  });
});

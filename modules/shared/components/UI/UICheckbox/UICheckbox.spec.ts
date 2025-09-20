import { userEvent } from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/vue';
import UICheckbox from '~/modules/shared/components/UI/UICheckbox/UICheckbox.vue';
import type { UICheckboxProps } from '~/modules/shared/components/UI/UICheckbox/types';


function renderComponent(props?: Partial<UICheckboxProps>) {
  return render(UICheckbox, {
    props: <UICheckboxProps>{
      ...props,
    },
  });
}

describe('UICheckbox', () => {
  describe('Default:', () => {
    test('it will render the checkbox', () => {
      const { getByRole } = renderComponent();

      getByRole<HTMLInputElement>('checkbox');
    });

    test('it will render not disabled checkbox', () => {
      const { getByRole } = renderComponent();
      const checkboxEl = getByRole<HTMLInputElement>('checkbox');

      expect(checkboxEl.disabled).toBeFalsy();
    });
  });

  describe('Reactive:', () => {
    test('it will render the checkbox with name', () => {
      const expectedName = 'some-name';
      const { getByRole } = renderComponent({
        name: expectedName,
      });
      const checkboxEl = getByRole<HTMLInputElement>('checkbox');

      expect(checkboxEl.name).toBe(expectedName);
    });

    test('it will render the checkbox with id and label', () => {
      const expectedId = 'some-id';
      const expectedLabel = 'Some Label';
      const { getByRole } = renderComponent({
        id: expectedId,
        label: expectedLabel
      });

      const checkboxEl = getByRole<HTMLInputElement>('checkbox', { name: expectedLabel });

      expect(checkboxEl.id).toBe(expectedId);
    });

    test('it will render the checkbox with sublabel', () => {
      const expectedSublabel = 'Some Sublabel';
      const { getByRole } = renderComponent({ sublabel: expectedSublabel });

      getByRole<HTMLInputElement>('checkbox', { name: expectedSublabel });
    });

    test('it will render the disabled checkbox', () => {
      const { getByRole } = renderComponent({ isDisabled: true });

      const checkboxEl = getByRole<HTMLInputElement>('checkbox');

      expect(checkboxEl.disabled).toBeTruthy();
    });
  });

  describe('Actions:', () => {
    test('it will emit "update:modelValue"', async () => {
      const { getByRole, emitted } = renderComponent();
      const checkboxEl = getByRole('checkbox');
      const user = userEvent.setup();

      await user.click(checkboxEl);

      expect(emitted('update:modelValue')).toBeTruthy();
    });

    test('it will not emit "update:modelValue", if it has disabled state', async () => {
      const { getByRole, emitted } = renderComponent({ isDisabled: true });
      const checkboxEl = getByRole('checkbox');
      const user = userEvent.setup();

      await user.click(checkboxEl);

      expect(emitted('update:modelValue')).toBeFalsy();
    });
  });

  test('snapshot', () => {
    const { container } = renderComponent({ id: 'some-id' });

    expect(container).toMatchSnapshot();
  });
});

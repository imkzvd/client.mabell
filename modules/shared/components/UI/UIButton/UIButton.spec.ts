import { userEvent } from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/vue';
import UIButton from '~/modules/shared/components/UI/UIButton/UIButton.vue';
import type { UIButtonProps } from '~/modules/shared/components/UI/UIButton/types';

const fakeDefaultSlot = 'Sign In';

function renderComponent(props?: Partial<UIButtonProps>) {
  return render(UIButton, {
    props: <UIButtonProps>{
      ...props,
    },
    slots: {
      default: fakeDefaultSlot,
    },
  });
}

describe('UIButton', () => {
  describe('Default:', () => {
    test('it will render the button', () => {
      const { getByRole } = renderComponent();

      getByRole<HTMLButtonElement>('button', { name: fakeDefaultSlot });
    });

    test('it will render the button with button type', () => {
      const { getByRole } = renderComponent();
      const buttonEl = getByRole<HTMLButtonElement>('button');

      expect(buttonEl.type).toBe('button');
    });

    test('it will render not disabled button', () => {
      const { getByRole } = renderComponent();
      const buttonEl = getByRole<HTMLButtonElement>('button');

      expect(buttonEl.disabled).toBeFalsy();
    });

    test('snapshot', () => {
      const { container } = renderComponent();

      expect(container).toMatchSnapshot();
    });
  });

  describe('Reactive:', () => {
    test('it will render the button with submit type', () => {
      const expectedType = 'submit';
      const { getByRole } = renderComponent({ type: expectedType });

      const buttonEl = getByRole<HTMLButtonElement>('button');

      expect(buttonEl.type).toBe(expectedType);
    });

    test('it will render disabled button', async () => {
      const { getByRole } = renderComponent({ isDisabled: true });

      const buttonEl = getByRole<HTMLButtonElement>('button');

      expect(buttonEl.disabled).toBeTruthy();
    });
  });

  describe('Actions:', () => {
    test("it will emit 'click'", async () => {
      const { getByRole, emitted } = renderComponent();
      const user = userEvent.setup();
      const buttonEl = getByRole<HTMLButtonElement>('button');

      await user.click(buttonEl);

      expect(emitted('click')).toBeTruthy();
    });

    test('it will not emit "click", if it has disabled state', async () => {
      const { getByRole, emitted } = renderComponent({ isDisabled: true });
      const user = userEvent.setup();
      const buttonEl = getByRole<HTMLButtonElement>('button');

      await user.click(buttonEl);

      expect(emitted('click')).toBeFalsy();
    });
  });
});

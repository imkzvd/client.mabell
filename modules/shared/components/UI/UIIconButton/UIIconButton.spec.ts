import { userEvent } from '@testing-library/user-event';
import { render } from '@testing-library/vue';
import { describe, test, expect } from 'vitest';
import UIIconButton from '~/modules/shared/components/UI/UIIconButton/UIIconButton.vue';
import type { UIIconButtonProps } from '~/modules/shared/components/UI/UIIconButton/types';

const fakeIconName = 'some-icon-name';

function renderComponent(props?: Partial<UIIconButtonProps>) {
  return render(UIIconButton, {
    props: <UIIconButtonProps>{
      icon: fakeIconName,
      ...props,
    },
  });
}

describe('UIIconButton', () => {
  describe('Default:', () => {
    test('it will render the button', () => {
      const { getByRole } = renderComponent();

      getByRole<HTMLButtonElement>('button');
    });

    test('it will render the icon', () => {
      const { getByTestId } = renderComponent();

      getByTestId(fakeIconName);
    });
  });

  describe('Reactive:', () => {
    test('it will render the disabled button', () => {
      const { getByRole } = renderComponent({ isDisabled: true });
      const buttonEl = getByRole<HTMLButtonElement>('button');

      expect(buttonEl.disabled).toBeTruthy();
    });

    test('it will render the button with aria-label', () => {
      const fakeAriaLabel = 'Search';
      const { getByRole } = renderComponent({
        ariaLabel: fakeAriaLabel,
      });

      getByRole<HTMLButtonElement>('button', { name: fakeAriaLabel });
    });
  });

  describe('Actions:', () => {
    test('it will emit "click"', async () => {
      const { getByRole, emitted } = renderComponent();
      const buttonEl = getByRole<HTMLButtonElement>('button');
      const user = userEvent.setup();

      await user.click(buttonEl);

      expect(emitted('click')).toBeTruthy();
    });

    test('it will not emit "click", if it has disabled state', async () => {
      const { getByRole, emitted } = renderComponent({ isDisabled: true });
      const buttonEl = getByRole<HTMLButtonElement>('button');
      const user = userEvent.setup();

      await user.click(buttonEl);

      expect(emitted('click')).toBeFalsy();
    });
  });

  test('snapshot', () => {
    const { container } = renderComponent();

    expect(container).toMatchSnapshot();
  });
});

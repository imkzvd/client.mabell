import { render } from '@testing-library/vue';
import { describe, expect, test } from 'vitest';
import { userEvent } from '@testing-library/user-event';
import UIForm from '~/modules/shared/components/UI/UIForm/UIForm.vue';
import UIButton from '~/modules/shared/components/UI/UIButton/UIButton.vue';
import type { UIFormProps } from '~/modules/shared/components/UI/UIForm/types';
import type { UIButtonProps } from '~/modules/shared/components/UI/UIButton/types';

function renderComponent(props?: Partial<UIFormProps>) {
  return render(UIForm, {
    props: { state: {} },
    slots: {
      default: () =>
        h(
          UIButton,
          <UIButtonProps>{ type: 'submit' },
          { default: () => 'Submit' },
        ),
    },
  });
}

describe('UIForm', () => {
  describe('Default:', () => {
    test('it will render submit button', () => {
      const { getByRole } = renderComponent();

      getByRole<HTMLButtonElement>('button', { name: 'Submit' } );
    })
  })

  describe('Actions:', () => {
    test('it will emit "submit", if user click submit', async () => {
      const { getByRole, emitted } = renderComponent();
      const user = userEvent.setup();
      const buttonEl = getByRole<HTMLButtonElement>('button', { name: 'Submit' });

      await user.click(buttonEl);

      expect(emitted('submit')).toBeTruthy();
    })

    test('it will emit "submit", if user press enter', async () => {
      const { getByRole, emitted } = renderComponent();
      const user = userEvent.setup();
      const formEl = getByRole<HTMLFormElement>('form');

      await user.tab();
      await user.keyboard('[Enter]');

      expect(emitted('submit')).toBeTruthy();
    })
  })

  test("snapshot", () => {
    const { container } = renderComponent();

    expect(container).toMatchSnapshot();
  });
});

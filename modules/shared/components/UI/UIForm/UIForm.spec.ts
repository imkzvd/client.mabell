import { render } from '@testing-library/vue';
import { describe, expect, test } from 'vitest';
import { userEvent } from '@testing-library/user-event';
import UIForm from '~/modules/shared/components/UI/UIForm/UIForm.vue';
import UIButton from '~/modules/shared/components/UI/UIButton/UIButton.vue';
import UIInput from '~/modules/shared/components/UI/UIInput/UIInput.vue';
import type { UIFormProps } from '~/modules/shared/components/UI/UIForm/types';
import type { UIButtonProps } from '~/modules/shared/components/UI/UIButton/types';
import type { UIInputProps } from '~/modules/shared/components/UI/UIInput/types';

function renderComponent(props?: Partial<UIFormProps>) {
  return render(UIForm, {
    props: {
      state: {},
      ...props,
    },
    slots: {
      default: () => [h(UIInput, <UIInputProps>{}), h(UIButton, <UIButtonProps>{ type: 'submit' })],
    },
  });
}

describe('UIForm', () => {
  describe('Default:', () => {
    test('it will render the input', () => {
      const { getByRole } = renderComponent();

      getByRole<HTMLInputElement>('textbox');
    });

    test('it will render submit button', () => {
      const { getByRole } = renderComponent();

      getByRole<HTMLButtonElement>('button');
    });

    test('snapshot', () => {
      const { container } = renderComponent();

      expect(container).toMatchSnapshot();
    });
  });

  describe('Actions:', () => {
    test('it will emit "submit", if user click submit', async () => {
      const { getByRole, emitted } = renderComponent();
      const user = userEvent.setup();
      const buttonEl = getByRole<HTMLButtonElement>('button');

      await user.click(buttonEl);

      expect(emitted('submit')).toBeTruthy();
    });
  });
});

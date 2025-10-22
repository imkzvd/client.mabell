import { render } from '@testing-library/vue';
import { describe, expect, test } from 'vitest';
import { h } from 'vue';
import UIFormItem from '~/modules/shared/components/UI/UIForm/UIFormItem.vue';
import UIInput from '~/modules/shared/components/UI/UIInput/UIInput.vue';
import type { UIInputProps } from '~/modules/shared/components/UI/UIInput/types';
import type { UIFormItemProps } from '~/modules/shared/components/UI/UIForm/types';

function renderComponent() {
  return render(UIFormItem, {
    props: <UIFormItemProps>{
      name: 'login',
    },
    slots: {
      default: h(UIInput, <UIInputProps>{ id: 'some-id', modelValue: '' }),
    },
  });
}

describe('UIFormItem', () => {
  describe('Default:', () => {
    test('it will render the input', () => {
      const { getByRole } = renderComponent();

      getByRole<HTMLInputElement>('textbox');
    });
  });

  test('snapshot', () => {
    const { container } = renderComponent();

    expect(container).toMatchSnapshot();
  });
});

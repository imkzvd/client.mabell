import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/vue';
import UIText from '~/modules/shared/components/UI/UIText/UIText.vue';
import type { UITextProps } from '~/modules/shared/components/UI/UIText/types';

const fakeDefaultSlotValue = 'Some text';

function renderComponent(props?: Partial<UITextProps>) {
  return render(UIText, {
    props: <UITextProps>{
      ...props,
    },
    slots: {
      default: fakeDefaultSlotValue,
    },
  });
}

describe('UIText', () => {
  describe('Default:', () => {
    test('it will render the text', () => {
      const { getByText } = renderComponent();

      getByText<HTMLParagraphElement>(fakeDefaultSlotValue);
    });

    test('snapshot', () => {
      const { container } = renderComponent();

      expect(container).toMatchSnapshot();
    });
  });
});

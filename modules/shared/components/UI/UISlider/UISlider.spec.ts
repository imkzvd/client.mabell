import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/vue';
import { userEvent } from '@testing-library/user-event';
import UISlider from '~/modules/shared/components/UI/UISlider/UISlider.vue';
import type { UISliderProps } from '~/modules/shared/components/UI/UISlider/types';

function renderComponent(props?: Partial<UISliderProps>) {
  return render(UISlider, {
    props: <UISliderProps>{
      ...props,
    },
  });
}

describe('UISlider', () => {
  describe('Default:', () => {
    test('it will render the range element', () => {
      const { getByRole } = renderComponent();

      getByRole<HTMLDivElement>('slider');
    });

    test('snapshot', () => {
      const { container } = renderComponent();

      expect(container).toMatchSnapshot();
    });
  });

  describe('Actions:', () => {
    test('it will emit "update:modelValue"', async () => {
      const { getByRole, emitted } = renderComponent();
      const slider = getByRole<HTMLDivElement>('slider');
      const user = userEvent.setup();

      await user.click(slider);

      expect(emitted('update:modelValue')).toBeTruthy();
    });

    test('it will emit "change"', async () => {
      const { getByRole, emitted } = renderComponent();
      const slider = getByRole<HTMLDivElement>('slider');
      const user = userEvent.setup();

      await user.click(slider);

      expect(emitted('change')).toBeTruthy();
    });

    test('it will emit "mouseup"', async () => {
      const { getByRole, emitted } = renderComponent();
      const slider = getByRole<HTMLDivElement>('slider');
      const user = userEvent.setup();

      await user.click(slider);

      expect(emitted('mouseup')).toBeTruthy();
    });

    test('it will emit "mousedown"', async () => {
      const { getByRole, emitted } = renderComponent();
      const slider = getByRole<HTMLDivElement>('slider');
      const user = userEvent.setup();

      await user.click(slider);

      expect(emitted('mousedown')).toBeTruthy();
    });
  });
});

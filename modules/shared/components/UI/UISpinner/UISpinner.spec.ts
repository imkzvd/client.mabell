import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/vue';
import { TEST_TOKENS } from '~/__tests__/TEST_TOKENS';
import UISpinner from '~/modules/shared/components/UI/UISpinner/UISpinner.vue';
import type { UISpinnerProps } from '~/modules/shared/components/UI/UISpinner/types';

function renderComponent(props?: Partial<UISpinnerProps>) {
  return render(UISpinner, {
    props: <UISpinnerProps>{
      ...props,
    },
  });
}

describe('UISpinner', () => {
  describe('Default:', () => {
    test('it will render the spinner', () => {
      const { getByTestId } = renderComponent();

      getByTestId<HTMLDivElement>(TEST_TOKENS.UI_SPINNER);
    });

    test('snapshot', () => {
      const { container } = renderComponent();

      expect(container).toMatchSnapshot();
    });
  });
});

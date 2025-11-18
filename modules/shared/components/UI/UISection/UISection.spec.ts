import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/vue';
import UISection from '~/modules/shared/components/UI/UISection/UISection.vue';
import type { UISectionProps } from '~/modules/shared/components/UI/UISection/types';

const fakeDefaultSlotValue = 'Some text';
const fakeHeadingText = 'Heading';

function renderComponent(props?: Partial<UISectionProps>) {
  return render(UISection, {
    props: <UISectionProps>{
      heading: fakeHeadingText,
      ...props,
    },
    slots: {
      default: fakeDefaultSlotValue,
    },
  });
}

describe('UISection', () => {
  describe('Default:', () => {
    test('it will render the section', () => {
      const { getByLabelText } = renderComponent();

      getByLabelText<HTMLDivElement>(fakeHeadingText);
    });

    test('it will render the text', () => {
      const { getByText } = renderComponent();

      getByText<HTMLParagraphElement>(fakeDefaultSlotValue);
    });

    test('it will render the heading', () => {
      const { getByRole } = renderComponent();

      getByRole<HTMLParagraphElement>('heading', { name: fakeHeadingText });
    });

    test('snapshot', () => {
      const { container } = renderComponent();

      expect(container).toMatchSnapshot();
    });
  });

  describe('Reactive:', () => {
    test('it will render the heading', () => {
      const fakeHeadingText = 'Heading';
      const { getByRole } = renderComponent({ heading: fakeHeadingText });

      getByRole<HTMLHeadingElement>('heading', { name: fakeHeadingText });
    });
  });
});

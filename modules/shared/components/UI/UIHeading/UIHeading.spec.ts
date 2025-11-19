import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/vue';
import UIHeading from '~/modules/shared/components/UI/UIHeading/UIHeading.vue';
import type { UIHeadingProps } from '~/modules/shared/components/UI/UIHeading/types';

const fakeDefaultSlot: string = 'Some Heading';

function renderComponent(props?: Partial<UIHeadingProps>) {
  return render(UIHeading, {
    props: <UIHeadingProps>{
      ...props,
    },
    slots: {
      default: fakeDefaultSlot,
    },
  });
}

describe('UIHeading', () => {
  describe('Default:', () => {
    test('it will render the heading of first level', () => {
      const { getByRole } = renderComponent();

      getByRole<HTMLHeadingElement>('heading', { name: fakeDefaultSlot, level: 1 });
    });

    test('snapshot', () => {
      const { container } = renderComponent();

      expect(container).toMatchSnapshot();
    });
  });

  describe('Reactive:', () => {
    test('it will render the heading of second level', () => {
      const { getByRole } = renderComponent({ level: 2 });

      getByRole<HTMLHeadingElement>('heading', { name: fakeDefaultSlot, level: 2 });
    });
  });
});

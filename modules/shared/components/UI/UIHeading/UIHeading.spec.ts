import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/vue';
import UIHeading from '~/modules/shared/components/UI/UIHeading/UIHeading.vue';
import type { UIHeadingProps } from '~/modules/shared/components/UI/UIHeading/types';

const fakeSlot: string = 'Test';

function renderComponent(props?: Partial<UIHeadingProps>) {
  return render(UIHeading, {
    props: <UIHeadingProps>{
      ...props,
    },
    slots: {
      default: fakeSlot,
    },
  });
}

describe('UIHeading', () => {
  describe('Default:', () => {
    test('it will render the heading of first level', () => {
      const { getByRole } = renderComponent();

      getByRole<HTMLHeadingElement>('heading', { name: fakeSlot, level: 1 });
    });
  });

  describe('Props:', () => {
    test('it will render the heading of second level', () => {
      const { getByRole } = renderComponent({ level: 2 });

      getByRole<HTMLHeadingElement>('heading', { name: fakeSlot, level: 2 });
    });
  });

  test('snapshot', () => {
    const { container } = renderComponent();

    expect(container).toMatchSnapshot();
  });
});

import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/vue';
import UILink from '~/modules/shared/components/UI/UILink/UILink.vue';
import type { UILinkProps } from '~/modules/shared/components/UI/UILink/types';

const fakeDefaultSlotValue: string = 'Google.com';
const fakeProps: UILinkProps = {
  to: 'https://www.google.ru/',
};

function renderComponent(props?: Partial<UILinkProps>) {
  return render(UILink, {
    props: <UILinkProps>{
      ...fakeProps,
      ...props,
    },
    slots: {
      default: fakeDefaultSlotValue,
    },
  });
}

describe('UILink', () => {
  describe('Default:', () => {
    test('it will render link', () => {
      const { getByRole } = renderComponent();

      getByRole<HTMLAnchorElement>('link', { name: fakeDefaultSlotValue });
    });

    test('it will render link with correct "href"', () => {
      const { getByRole } = renderComponent();
      const linkEl = getByRole<HTMLAnchorElement>('link');

      expect(linkEl.href).toBe(fakeProps.to);
    });

    test('snapshot', () => {
      const { container } = renderComponent();

      expect(container).toMatchSnapshot();
    });
  });
});

import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/vue';
import UILink from '~/modules/shared/components/UI/UILink/UILink.vue';
import type { UILinkProps } from '~/modules/shared/components/UI/UILink/types';

const fakeSlot: string = 'Google.com';
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
      default: fakeSlot,
    },
  });
}

describe('UILink', () => {
  describe('Default:', () => {
    test('it will render link', () => {
      const { getByRole } = renderComponent();

      getByRole<HTMLAnchorElement>('link');
    });

    test('it will render link with correct "href"', () => {
      const { getByRole } = renderComponent();
      const linkEl = getByRole<HTMLAnchorElement>('link');

      expect(linkEl.href).toBe(fakeProps.to);
    });

    test('it will render link text', () => {
      const { getByText } = renderComponent();

      getByText<HTMLAnchorElement>(fakeSlot);
    });
  });

  test('snapshot', () => {
    const { container } = renderComponent();

    expect(container).toMatchSnapshot();
  });
});

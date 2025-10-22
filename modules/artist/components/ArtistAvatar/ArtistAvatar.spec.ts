import { render } from '@testing-library/vue';
import { describe, expect, test } from 'vitest';
import IconStub from '~/__tests__/stubs/icon.stub';
import { TEST_TOKENS } from '~/__tests__/TEST_TOKENS';
import ArtistAvatar from '~/modules/artist/components/ArtistAvatar/ArtistAvatar.vue';
import type { ArtistAvatarProps } from '~/modules/artist/components/ArtistAvatar/types';

const fakeURL: ArtistAvatarProps['url'] = 'https://some-url.com';
const fakeAlt: ArtistAvatarProps['alt'] = 'some-alt';

function renderComponent(props?: Partial<ArtistAvatarProps>) {
  return render(ArtistAvatar, {
    global: {
      stubs: {
        NuxtIcon: IconStub,
      },
    },
    props: <ArtistAvatarProps>{
      url: null,
      alt: fakeAlt,
      ...props,
    },
  });
}

describe('ArtistAvatar', () => {
  describe('Default:', () => {
    test('it will render the icon', () => {
      const { getByTestId } = renderComponent();

      getByTestId(TEST_TOKENS.ICON);
    });
  });

  describe('Reactive:', () => {
    test('it will render the image with alt', () => {
      const { getByRole } = renderComponent({ url: fakeURL });

      getByRole('img', { name: fakeAlt });
    });
  });

  test('snapshot', () => {
    const { container } = renderComponent();

    expect(container).toMatchSnapshot();
  });
});

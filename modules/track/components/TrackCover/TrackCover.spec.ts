import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/vue';
import IconStub from '~/__tests__/stubs/icon.stub';
import { TEST_TOKENS } from '~/__tests__/TEST_TOKENS';
import TrackCover from '~/modules/track/components/TrackCover/TrackCover.vue';
import type { TrackCoverProps } from '~/modules/track/components/TrackCover/types';

const fakeURL: TrackCoverProps['url'] = 'https://some-url.com';
const fakeAlt: TrackCoverProps['alt'] = 'some-alt';

function renderComponent(props?: Partial<TrackCoverProps>) {
  return render(TrackCover, {
    global: {
      stubs: {
        NuxtIcon: IconStub,
      },
    },
    props: <TrackCoverProps>{
      url: null,
      alt: fakeAlt,
      ...props,
    },
  });
}

describe('TrackCover', () => {
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

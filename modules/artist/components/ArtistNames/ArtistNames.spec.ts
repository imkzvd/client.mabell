import { render } from '@testing-library/vue';
import { describe, expect, test } from 'vitest';
import { FakeSimplifiedArtistRO } from '~/__tests__/ros/fake-simplified-artist.ro';
import ArtistNames from '~/modules/artist/components/ArtistNames/ArtistNames.vue';
import type { ArtistNamesProps } from '~/modules/artist/components/ArtistNames/types';

const fakeSimplifiedArtist = new FakeSimplifiedArtistRO();

function renderComponent(props?: Partial<ArtistNamesProps>) {
  return render(ArtistNames, {
    props: <ArtistNamesProps>{
      items: [fakeSimplifiedArtist, fakeSimplifiedArtist],
      ...props,
    },
  });
}

describe('ArtistNames', () => {
  describe('Default:', () => {
    test('it will render artist names', () => {
      const { getAllByText } = renderComponent();

      const foundEls = getAllByText<HTMLSpanElement>(fakeSimplifiedArtist.name);

      expect(foundEls.length).toBe(2);
    });
  });

  test('snapshot', () => {
    const { container } = renderComponent();

    expect(container).toMatchSnapshot();
  });
});
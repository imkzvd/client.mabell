import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/vue';
import NuxtLinkStub from '~/__tests__/stubs/nuxt-link.stub';
import { FakeSimplifiedAlbumRO } from '~/__tests__/ros/fake-simplified-album.ro';
import AlbumSlider from '~/modules/album/components/AlbumSlider/AlbumSlider.vue';
import type { AlbumSliderProps } from '~/modules/album/components/AlbumSlider/types';

const fakeSimplifiedAlbum = new FakeSimplifiedAlbumRO();

function renderComponent(props?: Partial<AlbumSliderProps>) {
  return render(AlbumSlider, {
    global: {
      stubs: {
        NuxtLink: NuxtLinkStub,
      },
    },
    props: <AlbumSliderProps>{
      items: [fakeSimplifiedAlbum],
      ...props,
    },
  });
}

describe('AlbumSliderList', () => {
  describe('Default:', () => {
    test('it will render the link', () => {
      const { getByRole } = renderComponent();

      getByRole<HTMLAnchorElement>('link');
    });

    test('it will render the image', () => {
      const { getByRole } = renderComponent();

      getByRole<HTMLImageElement>('img', { name: fakeSimplifiedAlbum.name });
    });

    test('it will render album name', () => {
      const { getByText } = renderComponent();

      getByText<HTMLParagraphElement>(fakeSimplifiedAlbum.name);
    });

    test('it will render album release year', () => {
      const { getByText } = renderComponent();
      const expectedYear = new Date(fakeSimplifiedAlbum.releaseAt).getFullYear();

      getByText(expectedYear);
    });
  });

  describe('Reactive:', () => {
    test('it will render 2 links', () => {
      const { getAllByRole } = renderComponent({
        items: [fakeSimplifiedAlbum, fakeSimplifiedAlbum],
      });

      const linkEls = getAllByRole<HTMLAnchorElement>('link');

      expect(linkEls.length).toBe(2);
    });
  });

  test('snapshot', () => {
    const { container } = renderComponent();

    expect(container).toMatchSnapshot();
  });
});

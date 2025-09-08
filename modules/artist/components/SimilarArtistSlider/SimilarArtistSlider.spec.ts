import { describe, expect, test } from "vitest";
import { render } from "@testing-library/vue";
import NuxtLinkStub from "~/__tests__/stubs/nuxt-link.stub";
import SimilarArtistSlider from "~/modules/artist/components/SimilarArtistSlider/SimilarArtistSlider.vue";
import type { SimilarArtistSliderProps } from "~/modules/artist/components/SimilarArtistSlider/types";
import { FakeArtistRO } from '~/__tests__/ros/fake-artist.ro';

const fakeArtist = new FakeArtistRO();

function renderComponent(props?: SimilarArtistSliderProps) {
  return render(SimilarArtistSlider, {
    global: {
      stubs: {
        NuxtLink: NuxtLinkStub,
      },
    },
    props: <SimilarArtistSliderProps>{
      items: [fakeArtist],
      ...props,
    },
  });
}

describe("SimilarArtistSlider", () => {
  describe("Default:", () => {
    test('it will render the link', () => {
      const { getByRole } = renderComponent();

      getByRole<HTMLAnchorElement>('link');
    })

    test('it will render the image', () => {
      const { getByRole } = renderComponent();

      getByRole<HTMLImageElement>('img', { name: fakeArtist.name });
    })

    test('it will render artist name', () => {
      const { getByText } = renderComponent();

      getByText<HTMLSpanElement>(fakeArtist.name);
    })
  })

  describe("Props:", () => {
    test('it will render 2 links', () => {
      const { getAllByRole } = renderComponent({
        items: [fakeArtist, fakeArtist],
      });

      getAllByRole<HTMLAnchorElement>('link');
    })
  })

  test("snapshot", () => {
    const { container } = renderComponent();

    expect(container).toMatchSnapshot();
  });
});

import { describe, expect, test } from "vitest";
import { render } from "@testing-library/vue";
import { FakeArtistRO } from "~/__tests__/ros/fake-artist.ro";
import IconStub from "~/__tests__/stubs/icon.stub";
import { TEST_TOKENS } from '~/__tests__/TEST_TOKENS';
import MobileArtistHeader from "~/modules/artist/components/MobileArtistHeader/MobileArtistHeader.vue";
import type { MobileArtistHeaderProps } from "~/modules/artist/components/MobileArtistHeader/types";

const fakeArtist = new FakeArtistRO();

function renderComponent(props?: Partial<MobileArtistHeaderProps>) {
  return render(MobileArtistHeader, {
    global: {
      stubs: {
        NuxtIcon: IconStub,
      },
    },
    props: <MobileArtistHeaderProps>{
      artist: fakeArtist,
      ...props,
    },
  });
}

describe("MobileArtistHeader", () => {
  describe("Default:", () => {
    test('it will render heading', () => {
      const { getByRole } = renderComponent();

      getByRole('heading', { name: fakeArtist.name });
    })

    test('it will render options button', () => {
      const { getByRole } = renderComponent();

      getByRole('button', { name: 'Artist options'})
    })

    test('it will render the icon', () => {
      const { getByTestId } = renderComponent();

      getByTestId(TEST_TOKENS.ICON)
    })
  })

  test('snapshot', () => {
    const { container } = renderComponent();

    expect(container).toMatchSnapshot();
  });
});

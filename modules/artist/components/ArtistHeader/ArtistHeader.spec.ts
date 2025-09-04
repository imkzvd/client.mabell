import { describe, expect, test } from "vitest";
import { render } from "@testing-library/vue";
import { userEvent } from "@testing-library/user-event";
import FakeArtistRO from "~/__tests__/ros/artist";
import ArtistHeader from "~/modules/artist/components/ArtistHeader/ArtistHeader.vue";
import type { ArtistHeaderProps } from "~/modules/artist/components/ArtistHeader/types";
import IconStub from "~/__tests__/stubs/icon.stub";
import { TEST_TOKENS } from '~/__tests__/TEST_TOKENS';

const fakeArtist = new FakeArtistRO();

function renderComponent(props?: Partial<ArtistHeaderProps>) {
  return render(ArtistHeader, {
    global: {
      stubs: {
        NuxtIcon: IconStub,
      },
    },
    props: <ArtistHeaderProps>{
      artist: fakeArtist,
      ...props,
    },
  });
}

describe("ArtistHeader", () => {
  describe("Default: ", () => {
    test('it will render the heading', () => {
      const { getByRole } = renderComponent();

      getByRole<HTMLHeadingElement>('heading', { name: fakeArtist.name });
    })

    test('it will render biography', () => {
      const { getByText } = renderComponent();

      getByText<HTMLParagraphElement>(fakeArtist.biography);
    })

    test('it will render options button with the icon', () => {
      const { getByRole } = renderComponent();

      getByRole<HTMLButtonElement>('button', { name: 'Artist options' });
    })

    test('it will render the icon', () => {
      const { getByTestId } = renderComponent();

      getByTestId<HTMLElement & SVGElement>(TEST_TOKENS.ICON);
    })

  })

  test("snapshot", () => {
    const { container } = renderComponent();

    expect(container).toMatchSnapshot();
  });
});

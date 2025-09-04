import { describe, expect, test } from "vitest";
import { render } from "@testing-library/vue";
import IconStub from "~/__tests__/stubs/icon.stub";
import AlbumCover from "~/modules/album/components/AlbumCover/AlbumCover.vue";
import { TEST_TOKENS } from '~/__tests__/TEST_TOKENS';
import type { AlbumCoverProps } from "~/modules/album/components/AlbumCover/types";

const fakeURL: AlbumCoverProps['url'] = 'https://some-url.com';
const fakeAlt: AlbumCoverProps['alt'] = 'some-alt';

function renderComponent(props?: Partial<AlbumCoverProps>) {
  return render(AlbumCover, {
    global: {
      stubs: {
        NuxtIcon: IconStub,
      },
    },
    props: <AlbumCoverProps>{
      url: null,
      alt: fakeAlt,
      ...props,
    },
  });
}

describe("AlbumCover", () => {
  describe("Default:", () => {
    test('it will render the icon', () => {
      const { getByTestId } = renderComponent();

      getByTestId(TEST_TOKENS.ICON);
    })
  })

  describe("Reactive:", () => {
    test('it will render the image with alt', () => {
      const { getByRole } = renderComponent({ url: fakeURL })

      getByRole('img', { name: fakeAlt });
    })
  })

  test("snapshot", () => {
    const { container } = renderComponent();

    expect(container).toMatchSnapshot();
  });
});

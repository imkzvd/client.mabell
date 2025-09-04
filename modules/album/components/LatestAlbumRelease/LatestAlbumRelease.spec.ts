import { describe, expect, test } from "vitest";
import { render } from "@testing-library/vue";
import LatestRelease from "~/modules/album/components/LatestAlbumRelease/LatestAlbumRelease.vue";
import NuxtLinkStub from "~/__tests__/stubs/nuxt-link.stub";
import { FakeAlbumRO } from "~/__tests__/ros/fake-album.ro";
import type { LatestAlbumReleaseProps } from "~/modules/album/components/LatestAlbumRelease/types";

const fakeAlbum = new FakeAlbumRO();

function renderComponent(props?: Partial<LatestAlbumReleaseProps>) {
  return render(LatestRelease, {
    global: {
      stubs: {
        NuxtLink: NuxtLinkStub,
      },
    },
    props: <LatestAlbumReleaseProps>{
      album: fakeAlbum,
      ...props,
    },
  });
}

describe("LatestRelease", () => {
  describe('Default:', () => {
    test("it will render the link", () => {
      const { getByRole } = renderComponent();

      getByRole<HTMLLinkElement>("link", {
        name: `Go to ${fakeAlbum.name} album page`,
      });
    });

    test("it will render the image", () => {
      const { getByRole } = renderComponent();

      getByRole("img", { name: fakeAlbum.name });
    });

    test("it will render album name", () => {
      const { getByText } = renderComponent();

      getByText(fakeAlbum.name);
    });

    test("it will render album type", () => {
      const { getByText } = renderComponent();

      getByText(fakeAlbum.type.label);
    });

    test("it will render album release date", () => {
      const { getByText } = renderComponent();
      const prepDate = new Date(fakeAlbum.releaseAt).toLocaleDateString();

      getByText(prepDate);
    });
  })
  describe('Reactive:', () => {})
  describe('Actions:', () => {})

  test("snapshot", () => {
    const { container } = renderComponent();

    expect(container).toMatchSnapshot();
  });
});

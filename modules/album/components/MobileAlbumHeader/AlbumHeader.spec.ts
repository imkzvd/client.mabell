import { describe, expect, test } from "vitest";
import { render } from "@testing-library/vue";
import AlbumHead from "~/components/AlbumHeader/MobilePlaylistHeader.vue";
import NuxtLinkStub from "~/__tests__/stubs/nuxt-link.stub";
import type { TAlbumHeadProps } from "~/components/AlbumHeader/types";
import FakeAlbumRO from "~/__tests__/ros/fake-album.ro";

const fakeAlbum = new FakeAlbumRO();

function renderComponent() {
  return render(AlbumHead, {
    global: {
      stubs: {
        NuxtLink: NuxtLinkStub,
      },
    },
    props: <TAlbumHeadProps>{
      album: fakeAlbum,
    },
  });
}

describe("AlbumHead", () => {
  describe("User:", () => {
    test("it will render the cover", () => {
      const { getByRole } = renderComponent();

      getByRole<HTMLImageElement>("img", { name: fakeAlbum.name });
    });

    test("it will render artist's links", () => {
      const { getByRole } = renderComponent();

      fakeAlbum.artists.forEach(({ id, name }) => {
        const artistLink = getByRole<HTMLAnchorElement>("link", { name });
        expect(artistLink.href).toBe(`${window.location.origin}/artist/${id}`);
      });
    });

    test("it will render the 'Album' type", () => {
      const { getByText } = renderComponent();

      getByText<HTMLSpanElement>("Album");
    });

    test("it will render the genres of the album", () => {
      const { getByText } = renderComponent();
      const albumGenres = fakeAlbum.genres.join("/");

      getByText<HTMLSpanElement>(albumGenres);
    });

    test("it will render the release year of the album", () => {
      const { getByText } = renderComponent();
      const albumReleaseYear = new Date(fakeAlbum.releaseDate).getFullYear();

      getByText<HTMLSpanElement>(albumReleaseYear);
    });
  });

  describe("Developer:", () => {
    test("snapshot", () => {
      const { container } = renderComponent();

      expect(container).toMatchSnapshot();
    });
  });
});

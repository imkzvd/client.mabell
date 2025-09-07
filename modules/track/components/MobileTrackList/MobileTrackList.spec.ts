import { describe, expect, test } from "vitest";
import { render } from "@testing-library/vue";
import { userEvent } from "@testing-library/user-event";
import FakeTrack from "~/__tests__/ros/fake-track.ro";
import IconStub from "~/__tests__/stubs/icon.stub";
import MobileTrackList from "~/modules/track/components/MobileTrackList/MobileTrackList.vue";
import type { MobileTrackListProps } from "~/modules/track/components/MobileTrackList/types";

const fakeTrack = new FakeTrack();

function renderComponent(props?: Partial<MobileTrackListProps>) {
  return render(MobileTrackList, {
    global: {
      stubs: {
        Icon: IconStub,
      },
    },
    props: <MobileTrackListProps>{
      items: [fakeTrack],
      selectedItem: null,
      playingItem: null,
      ...props,
    },
  });
}

describe("MobileTrackList", () => {
  describe('Default:', () => {
    test('it will render track list', () => {
      const { getByRole } = renderComponent();

      getByRole<HTMLUListElement>('list', { name: "Top tracks" });
    })

    test('it will render track cover', () => {
      const { getByRole } = renderComponent();

      getByRole('img', { name: fakeTrack.name });
    })

    test('it will render track name', () => {
      const { getByText } = renderComponent();

      getByText(fakeTrack.name );
    })

    test('it will render artist name', () => {
      const { getByText } = renderComponent();

      getByText(fakeTrack.album.artists[0].name);
    })

    test('it will render track menu button', () => {
      const { getByRole } = renderComponent();

      getByRole('button', { name: 'Open track menu'});
    })
  })

  describe('Reactive:', () => {})

  describe('Actions:', () => {
    test('it will emit "play-track", if user click item', async () => {
      const { getByRole, emitted } = renderComponent();
      const user = userEvent.setup();
      const itemEl = getByRole('listitem', { name: fakeTrack.name });

      await userEvent.click(itemEl);

      expect(emitted('play-item')).toBeTruthy();
    })
  })

  test("snapshot", () => {
    const { container } = renderComponent();

    expect(container).toMatchSnapshot();
  });
});

import { describe, expect, test } from "vitest";
import { fireEvent, render } from '@testing-library/vue';
import { userEvent } from "@testing-library/user-event";
import FakeTrackRO from "~/__tests__/ros/fake-track.ro";
import NuxtLinkStub from "~/__tests__/stubs/nuxt-link.stub";
import CompactTrackList from "~/modules/track/components/CompactTrackList/CompactTrackList.vue";
import { convertSecondsToMinute } from '~/modules/track/components/CompactTrackList/utils';
import IconStub from '~/__tests__/stubs/icon.stub';
import type { CompactTrackListProps } from "~/modules/track/components/CompactTrackList/types";

const fakeTrack = new FakeTrackRO();

function renderComponent(props?: Partial<CompactTrackListProps>) {
  return render(CompactTrackList, {
    global: {
      stubs: {
        NuxtLink: NuxtLinkStub,
        NuxtIcon: IconStub,
      },
    },
    props: <CompactTrackListProps>{
      items: [fakeTrack],
      isPlaying: false,
      ...props,
    },
  });
}

describe("CompactTrackList", () => {
  describe("Default:", () => {
    test('it will render track list', () => {
      const { getByRole } = renderComponent();

      getByRole<HTMLUListElement>('list', { name: 'Track list' });
    })

    test('it will render track list item', () => {
      const { getByRole } = renderComponent();

      getByRole<HTMLLIElement>('listitem', { name: fakeTrack.name });
    })

    test('it will render track cover', () => {
      const { getByRole } = renderComponent();

      getByRole<HTMLImageElement>('img', { name: fakeTrack.name });
    })

    test('it will render track name link', () => {
      const { getByRole } = renderComponent();

      getByRole<HTMLAnchorElement>('link', { name: fakeTrack.name });
    })

    test('it will render 2 artist links', () => {
      const { getAllByRole } = renderComponent();

      const linkEls = getAllByRole<HTMLAnchorElement>('link', {
        name: fakeTrack.album.artists[0].name
      });

      expect(linkEls.length).toBe(2);
    })

    test('it will render track duration', () => {
      const { getByText, rerender } = renderComponent();
      const expectedDuration = convertSecondsToMinute(fakeTrack.duration);

      getByText<HTMLSpanElement>(expectedDuration);
    })

    test('it will render options button', () => {
      const { getByRole } = renderComponent();

      getByRole<HTMLButtonElement>('button', { name: 'Track menu' });
    })
  })

  describe("Props:", () => {
    test('it will render 2 track list item', () => {
      const { getAllByRole } = renderComponent({
        items: [fakeTrack, fakeTrack],
      });

      const itemEls = getAllByRole<HTMLLIElement>('listitem', {
        name: fakeTrack.name
      });

      expect(itemEls.length).toBe(2);
    })
  })

  describe("Emits:", () => {
    test('it will emit "play-item", if it click on play button', async () => {
      const { getByRole, emitted } = renderComponent();
      const itemEl = getByRole('listitem', { name: fakeTrack.name });


      await fireEvent.click(itemEl);

      const playButtonEl = getByRole('button', { name: 'Play track' });

      await fireEvent.click(playButtonEl);

      expect(emitted('play-item')).toBeTruthy();
    })

    test('it will emit "pause-item", if it click on pause button', async () => {
      const { getByRole, emitted } = renderComponent({
        currentItemId: fakeTrack.id,
        isPlaying: true
      });
      const itemEl = getByRole('listitem', { name: fakeTrack.name });

      await fireEvent.click(itemEl);

      const pauseButtonEl = getByRole('button', { name: 'Pause track' });

      await fireEvent.click(pauseButtonEl);

      expect(emitted('pause-item')).toBeTruthy();
    })

    test('it will emit "play-item", if it double click on list item', async () => {
      const { getByRole, emitted } = renderComponent();
      const itemEl = getByRole<HTMLLIElement>('listitem', {
        name: fakeTrack.name
      });

      await fireEvent.dblClick(itemEl);

      expect(emitted('play-item')).toBeTruthy();
    })

    test('it will emit "pause-item", if it has playing state and click on list item', async () => {
      const { getByRole, emitted } = renderComponent({ isPlaying: true });
      const itemEl = getByRole<HTMLLIElement>('listitem', {
        name: fakeTrack.name
      });
      const user = userEvent.setup();

      await user.dblClick(itemEl);

      expect(emitted('pause-item')).toBeTruthy();
    })

    test('it will emit "add-item", if if click on add track button', async () => {
      const { getByRole, emitted } = renderComponent();
      const itemEl = getByRole<HTMLLIElement>('listitem', { name: fakeTrack.name });
      const user = userEvent.setup();

      await user.hover(itemEl);

      const addTrackButtonEl = getByRole<HTMLButtonElement>('button', {
        name: 'Add track'
      });

      await user.click(addTrackButtonEl);

      expect(emitted('add-item')).toBeTruthy();
    })
  })

  describe("User Interactions:", () => {
    test('it will render play button, if user hover on track item', async () => {
      const { getByRole } = renderComponent();
      const itemEl = getByRole('listitem', { name: fakeTrack.name });
      const user = userEvent.setup();

      await user.hover(itemEl);

      getByRole<HTMLButtonElement>('button', { name: 'Play track' });
    })

    test('it will render play button, if user click on track item', async () => {
      const { getByRole, queryByRole } = renderComponent();
      const itemEl = getByRole('listitem', { name: fakeTrack.name });
      const user = userEvent.setup();

      await user.click(itemEl);

      getByRole('button', { name: 'Play track' });
    })

    test('it will render pause button, if it has playing state and user hover on track item', async () => {
      const { getByRole } = renderComponent({ currentItemId: fakeTrack.id, isPlaying: true });
      const user = userEvent.setup();
      const listItemEL = getByRole('listitem', { name: fakeTrack.name });

      await user.hover(listItemEL);

      getByRole('button', { name: 'Pause track' });
    })

    test('it will render add track button, if user hover on track item', async () => {
      const { getByRole } = renderComponent();
      const itemEl = getByRole<HTMLLIElement>('listitem', { name: fakeTrack.name });
      const user = userEvent.setup();

      await user.hover(itemEl);

      getByRole<HTMLButtonElement>('button', { name: 'Add track' });
    })
  })

  test("snapshot", () => {
    const { container } = renderComponent();

    expect(container).toMatchSnapshot();
  });
});

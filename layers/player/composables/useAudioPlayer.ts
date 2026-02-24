import type { TrackRO } from '~/api/api.module';

export function useAudioPlayer() {
  const audioElement = new Audio();

  const playlists = useLocalStorage<TrackRO[]>('audio-player:playlists', []);
  const currentTrackIndex = useLocalStorage<number>('audio-player:current-track-index', 0);
  const currentTrackTime = useLocalStorage<number>('audio-player:current-track-time', 0);
  const currentVolume = useLocalStorage('audio-player:current-volume', 100);
  const isPlaying = ref<boolean>(false);
  const isPausing = ref<boolean>(false);
  const isLoading = ref<boolean>(false);
  const isDisabledTrackTimeUpdating = ref<boolean>(false);

  const currentTrack = computed<TrackRO | null>(
    () => playlists.value[currentTrackIndex.value] || null,
  );
  const currentTrackId = computed<string | null>(() => currentTrack.value?.id || null);
  const isFirstTrack = computed<boolean>(() => currentTrackIndex.value === 0);
  const isLastTrack = computed<boolean>(
    () => currentTrackIndex.value === playlists.value.length - 1,
  );

  if (currentTrackTime.value) {
    audioElement.currentTime = currentTrackTime.value;
  }

  audioElement.addEventListener('loadstart', () => {
    isLoading.value = true;
  });
  audioElement.addEventListener('loadeddata', () => {
    isLoading.value = false;
  });
  audioElement.addEventListener('ended', () => nextTrack());
  audioElement.addEventListener('timeupdate', ({ target }) => {
    if (isDisabledTrackTimeUpdating.value) return;

    const { currentTime } = target as HTMLAudioElement;

    currentTrackTime.value = currentTime;
  });

  watch(
    currentTrack,
    (value) => {
      if (!value?.file) {
        isPlaying.value = false;

        return;
      }

      audioElement.src = value.file;
    },
    { immediate: true },
  );
  watch(currentVolume, (value) => (audioElement.volume = value / 100), { immediate: true });

  async function play() {
    if (!currentTrack.value?.file) return;

    await audioElement.play();
    isPausing.value = false;
    isPlaying.value = true;
  }

  function pause() {
    audioElement.pause();
    isPlaying.value = false;
    isPausing.value = true;
  }

  function addTracks(
    items: TrackRO[],
    index = 0,
    options?: Partial<{
      playAfterAdded: boolean;
    }>,
  ) {
    const filteredActiveTracks = filterActiveTracks(items);
    const selectedTrack = items[index];

    if (!selectedTrack) return;

    const isNewTrack = selectedTrack.id !== currentTrack.value?.id;

    playlists.value = filteredActiveTracks;

    if (!options?.playAfterAdded) return;

    if (isNewTrack) {
      currentTrackIndex.value = index;
      audioElement.addEventListener('canplaythrough', () => play(), { once: true });
    } else {
      prevTrack();

      if (!isPlaying.value) {
        play();
      }
    }
  }

  function prevTrack() {
    if (isFirstTrack.value || currentTrackTime.value >= 3) {
      audioElement.currentTime = 0;

      return;
    }

    if (isPlaying.value) {
      audioElement.addEventListener('canplaythrough', () => play(), { once: true });
    }

    currentTrackIndex.value--;
  }

  function nextTrack() {
    if (isPlaying.value) {
      audioElement.addEventListener('canplaythrough', () => play(), { once: true });
    }

    if (isLastTrack.value) {
      currentTrackIndex.value = 0;
    } else {
      currentTrackIndex.value++;
    }
  }

  function setCurrentTrackTime(value: number) {
    currentTrackTime.value = value;
    audioElement.currentTime = value;
  }

  function disableCurrentTimeUpdating() {
    isDisabledTrackTimeUpdating.value = true;
  }

  function enableCurrentTimeUpdating() {
    isDisabledTrackTimeUpdating.value = false;
  }

  function filterActiveTracks(tracks: TrackRO[]) {
    return tracks.filter(({ isActive }) => isActive);
  }

  return {
    playlists,
    addTracks,
    play,
    pause,
    nextTrack,
    prevTrack,
    disableCurrentTimeUpdating,
    enableCurrentTimeUpdating,
    currentTrack,
    currentTrackTime,
    setCurrentTrackTime,
    currentTrackIndex,
    currentTrackId,
    currentVolume,
    isPlaying,
    isFirstTrack,
    isLastTrack,
    isLoading,
  };
}

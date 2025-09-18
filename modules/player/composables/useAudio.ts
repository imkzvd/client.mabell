import type { TrackRO } from '~/api/api.module';

export function useAudio() {
  const volumeFromLS = useLocalStorage('audio-volume', 100);

  const audio = new Audio();
  const items = shallowRef<TrackRO[]>([]);
  const currentItemIndex = ref<number>(0);
  const isPlaying = ref<boolean>(false);
  const isPausing = ref<boolean>(false);
  const isLoading = ref<boolean>(false);
  const currentTime = ref<number>(0);
  const volume = ref<number>(volumeFromLS.value);

  audio.addEventListener('loadstart', (...a) => {
    isLoading.value = true;
  });
  audio.addEventListener('loadeddata', (e) => {
    isLoading.value = false;
  });
  audio.addEventListener('ended', (e) => {
    nextTrack();
  });

  const currentItemId = computed(() =>
    items.value[currentItemIndex.value],
  );
  const currentItem = computed<TrackRO>(() => items.value[currentItemIndex.value]);
  // const nextItem = computed(() => nextTrack);
  const isFirstTrack = computed<boolean>(
    () => currentItemIndex.value === 0,
  );
  const isLastTrack = computed<boolean>(
    () => currentItemIndex.value === items.value.length - 1,
  );

  watch(currentItem, (value: TrackRO | null) => {
    if (!value?.file) {
      isPlaying.value = false;

      return;
    }

    audio.src = value.file;
  });

  watch(volume, (value: number) => {
    audio.volume = value / 100;
    volumeFromLS.value = value;
  }, {
    immediate: true,
  })

  audio.addEventListener('timeupdate', (e) => {
    const { currentTime: audioCurrentTime } = e.target as HTMLAudioElement;

    currentTime.value = audioCurrentTime;
  });

  async function play() {
    if (isPausing.value) {
      await audio.play();
      isPausing.value = false;
      isPlaying.value = true;

      return;
    }

    if (!currentItem.value?.file) return;

    audio.addEventListener('canplay', () => audio.play(), { once: true });
    isPlaying.value = true;
  }

  function pause() {
    audio.pause();
    isPlaying.value = false;
    isPausing.value = true;
  }

  function addTrack(item: TrackRO) {
    items.value.push(item);
  }

  function addTracks(value: TrackRO[], index = 0) {
    items.value = filterActiveTracks(value);
    currentItemIndex.value = index;
  }

  function deleteTrack(item: TrackRO) {
    items.value = items.value.filter((i) => i.id !== item.id);
  }

  function prevTrack() {
    if (isFirstTrack.value || currentTime.value >= 3) {
      audio.currentTime = 0;

      return;
    }

    if (isPlaying.value) {
      audio.addEventListener('canplay', () => play(), { once: true });
    }

    currentItemIndex.value--;
  }

  function nextTrack() {
    if (isPlaying.value) {
      audio.addEventListener('canplay', () => play(), { once: true });
    }

    if (isLastTrack.value) {
      currentItemIndex.value = 0;
    } else {
      currentItemIndex.value++;
    }
  }

  function addNextTrack(item: TrackRO) {
    alert('Add next track');
  }

  function getCurrentTrackId() {
    return items.value[currentItemIndex.value];
  }

  function setCurrentTime(value: number) {
    currentTime.value = value;
    audio.currentTime = value;
  }

  function filterActiveTracks(tracks: TrackRO[]) {
    return tracks.filter(({ isActive }) => isActive);
  }

  return {
    items,
    addTrack,
    addTracks,
    play,
    pause,
    nextTrack,
    prevTrack,
    currentItem,
    isPlaying,
    currentTime,
    setCurrentTime,
    currentItemIndex,
    currentItemId,
    addNextTrack,
    volume,
    isFirstTrack,
    isLastTrack,
    isLoading,
  };
}
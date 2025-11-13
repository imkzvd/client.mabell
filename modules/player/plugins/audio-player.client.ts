import { useAudioPlayer } from '~/modules/player/composables/useAudioPlayer';

export default defineNuxtPlugin(() => {
  const audioPlayer = useAudioPlayer();

  return {
    provide: {
      audioPlayer,
    },
  };
});

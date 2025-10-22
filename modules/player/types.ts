import type { TrackRO } from '~/api/api.module';

export interface PlayerAPI {
  playlist: Ref<TrackRO[]>;
  currentTrack: Ref<TrackRO | null>;
  isPlaying: Ref<boolean>;
  play: () => void;
  pause: () => void;
  addTrack: (item: TrackRO) => void;
  addTracks: (items: TrackRO[]) => void;
  addNextTrack: (track: TrackRO) => void;
}

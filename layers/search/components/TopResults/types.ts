import type {
  IndexedAlbumRO,
  IndexedArtistRO,
  IndexedPlaylistRO,
  IndexedTrackRO,
} from '~/api/api.module';

export type TopResultsProps = {
  items: (IndexedArtistRO | IndexedAlbumRO | IndexedTrackRO | IndexedPlaylistRO)[];
};

import type { IndexedAlbumRO, IndexedArtistRO, IndexedPlaylistRO, IndexedTrackRO } from '~/api/api.module';

export type TopResultsProps = {
  items: (IndexedArtistRO | IndexedAlbumRO | IndexedTrackRO | IndexedPlaylistRO)[]
}

export type  TopResultsArtistItemProps = {
  item: IndexedArtistRO;
}

export type  TopResultsAlbumItemProps = {
  item: IndexedAlbumRO;
}

export type  TopResultsTrackItemProps = {
  item: IndexedTrackRO;
}

export type  TopResultsPlaylistItemProps = {
  item: IndexedPlaylistRO;
}

export type SkeletonTopResultsItem = {
  withRoundedImage?: boolean;
}
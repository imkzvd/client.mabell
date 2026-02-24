import type { AlbumRO, SimplifiedAlbumRO } from '~/api/api.module';

export type LatestAlbumReleaseProps = {
  album: AlbumRO | SimplifiedAlbumRO;
};

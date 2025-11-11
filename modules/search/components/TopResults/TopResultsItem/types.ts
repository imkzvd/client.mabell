import type { RouteLocationRaw } from '#vue-router';
import type { UIImgProps } from '~/modules/shared/components/UI/UIImg/types';
import type {
  IndexedAlbumRO,
  IndexedArtistRO,
  IndexedPlaylistRO,
  IndexedTrackRO,
} from '~/api/api.module';

export type TopResultsItemProps = {
  to: RouteLocationRaw;
  imgPath: UIImgProps['path'];
  imgAlt?: UIImgProps['alt'];
  imgRounded?: UIImgProps['isRounded'];
};

export type TopResultsArtistItemProps = {
  item: IndexedArtistRO;
};

export type TopResultsAlbumItemProps = {
  item: IndexedAlbumRO;
};

export type TopResultsTrackItemProps = {
  item: IndexedTrackRO;
};

export type TopResultsPlaylistItemProps = {
  item: IndexedPlaylistRO;
};

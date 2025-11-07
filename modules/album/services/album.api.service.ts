import { apiService } from '~/modules/shared/services/api.service';
import { ApiError } from '~/modules/shared/errors/api-error';
import type { AlbumRO, TracksRO } from '~/api/api.module';

export class AlbumApiService {
  async getAlbumById(albumId: string): Promise<AlbumRO> {
    const { data, ok, error } = await apiService.album.getAlbum(albumId);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async getAlbumsByIds(albumIds: string[]): Promise<AlbumRO[]> {
    const albumIdsQueryParam = albumIds.join(',');
    const { data, ok, error } = await apiService.album.getAlbumsByIds({
      ids: albumIdsQueryParam,
    });

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data.filter((i) => i !== null);
  }

  async getAlbumTracksById(albumId: string): Promise<TracksRO> {
    const { data, ok, error } = await apiService.album.getAlbumTracks(albumId);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }
}

export const albumApiService = new AlbumApiService();

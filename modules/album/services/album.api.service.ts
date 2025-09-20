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

  async getAlbumTracksById(albumId: string): Promise<TracksRO> {
    const { data, ok, error } = await apiService.album.getAlbumTracks(albumId);

    if (!ok) {
      throw new ApiError(error.message,  error.statusCode);
    }

    return data;
  }
}

export const albumApiService = new AlbumApiService();
import { apiService } from '~/modules/shared/services/api.service';
import { ApiError } from '~/modules/shared/errors/api-error';
import type { AlbumsRO, ArtistsRO, PlaylistsRO, TracksRO } from '~/api/api.module';

export class PopularApiService {
  async getArtists(genres: string[], options?: Partial<{
    offset: number,
    limit: number,
  }>): Promise<ArtistsRO> {
    const { data, ok, error } = await apiService.popular.getPopularArtists({
      genres: genres.join(','),
      ...options,
    });

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async getAlbums(genres: string[], options?: Partial<{
    offset: number,
    limit: number,
  }>): Promise<AlbumsRO> {
    const { data, ok, error } = await apiService.popular.getPopularAlbums({
      genres: genres.join(','),
      ...options,
    });

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async getPlaylists(genres: string[], options?: Partial<{
    offset: number,
    limit: number,
  }>): Promise<PlaylistsRO> {
    const { data, ok, error } = await apiService.popular.getPopularPlaylists({
      genres: genres.join(','),
      ...options,
    });

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }
}

export const popularApiService = new PopularApiService();
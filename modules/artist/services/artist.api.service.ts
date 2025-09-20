import { apiService } from '~/modules/shared/services/api.service';
import { ApiError } from '~/modules/shared/errors/api-error';
import type { AlbumRO, ArtistRO, SimplifiedAlbumsRO, TracksRO } from '~/api/api.module';

export class ArtistApiService {
  async getArtistById(artistId: string): Promise<ArtistRO> {
    const { data, ok, error } = await apiService.artists.getArtist(artistId);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async getTopTracksById(artistId: string, pagination?: Partial<{ offset: number, limit: number }>): Promise<TracksRO> {
    const { data, ok, error } = await apiService.artists.getArtistTracks(artistId, pagination);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async getAlbumsById(artistId: string, pagination?: Partial<{
    offset: number,
    limit: number
  }>): Promise<SimplifiedAlbumsRO> {
    const { data, ok, error } = await apiService.artists.getArtistAlbums(artistId, pagination);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async getLatestAlbumById(artistId: string): Promise<AlbumRO | null> {
    const { data, ok, error } = await apiService.artists.getLatestRelease(artistId);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async getSimilarArtistsById(artistId: string): Promise<ArtistRO[]> {
    const { data, ok, error } = await apiService.artists.getSimilarArtists(artistId);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }
}

export const artistApiService = new ArtistApiService();
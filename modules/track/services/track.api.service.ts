import { apiService } from '~/modules/shared/services/api.service';
import type { TracksRO } from '~/api/api.module';

export class TrackApiService {
  async getTopTracksByArtistId(id: string, pagination: Partial<{ offset: number, limit: number }>): Promise<TracksRO> {
    const { data, ok, error } = await apiService.artists.getArtistTracks(id, pagination);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }

  async getArtistTracksByArtistId(id: string, pagination: Partial<{ offset: number, limit: number }>): Promise<TracksRO> {
    const { data, ok, error } = await apiService.artists.getArtistTracks(id, pagination);

    if (!ok) {
      throw new Error(error.message);
    }

    return data;
  }
}

export const trackApiService = new TrackApiService();
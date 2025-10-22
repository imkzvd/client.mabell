import { apiService } from '~/modules/shared/services/api.service';
import { ApiError } from '~/modules/shared/errors/api-error';
import type { PlaylistRO, PlaylistTracksRO } from '~/api/api.module';

export class PlaylistApiService {
  async getPlaylistById(playlistId: string): Promise<PlaylistRO> {
    const { data, ok, error } = await apiService.playlist.getPlaylist(playlistId);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }

  async getPlaylistTracksById(playlistId: string): Promise<PlaylistTracksRO> {
    const { data, ok, error } = await apiService.playlist.getPlaylistTracks(playlistId);

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }
}

export const playlistApiService = new PlaylistApiService();

import { apiService } from '~/modules/shared/services/api.service';
import { ApiError } from '~/modules/shared/errors/api-error';
import type {
  SearchResultRO,
} from '@/api/api.module.ts';

export class SearchApiService {
  async search(q: string): Promise<SearchResultRO> {
    const { data, ok, error } = await apiService.search.search({ q });

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    return data;
  }
}

export const searchApiService = new SearchApiService();

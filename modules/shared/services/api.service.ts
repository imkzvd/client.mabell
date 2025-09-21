import { ApiModule } from '~/api/api.module';

let isRefreshing = false;

export const apiService = new ApiModule({
  baseUrl: process.env.API_URL,
  baseApiParams: {
    credentials: 'include',
  }
});

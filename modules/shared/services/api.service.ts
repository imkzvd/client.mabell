import { ApiModule } from '~/api/api.module';

export const apiService = new ApiModule({
  baseUrl: import.meta.env.VITE_API_URL,
  baseApiParams: {
    credentials: 'include',
  },
});

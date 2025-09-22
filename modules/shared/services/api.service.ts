import { ApiModule } from '~/api/api.module';

export const apiService = new ApiModule({
  baseUrl: useRuntimeConfig().public.apiUrl,
  baseApiParams: {
    credentials: 'include',
  }
});

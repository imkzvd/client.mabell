/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface LabelValueRO {
  /**
   * Value
   * @example "Hip-Hop"
   */
  value: string;
  /**
   * Label
   * @example "HH"
   */
  label: string;
}

export interface ArtistRO {
  /**
   * Id
   * @example "3e01085fd0ac3fd43e7c63d1"
   */
  id: string;
  /**
   * Name
   * @example "Aaliyah"
   */
  name: string;
  /**
   * Birth name
   * @example "Jody Fahey"
   */
  birthName: string | null;
  /**
   * Birth date
   * @format date-time
   * @example "2025-10-28T09:30:44.887Z"
   */
  birthDate: string | null;
  /** Genres */
  genres: LabelValueRO[];
  /**
   * Biography
   * @example "scientist, philosopher"
   */
  biography: string;
  /**
   * Avatar URL
   * @example "https://api.mabell.fun/ha_understated.webp"
   */
  avatar: string | null;
  /**
   * Cover URL
   * @example "https://api.mabell.fun/every.webp"
   */
  cover: string | null;
  /**
   * Accent color
   * @example "#1eb1ce"
   */
  accentColor: string | null;
  /**
   * Secondary color
   * @example "#3422ec"
   */
  secondaryColor: string | null;
  /**
   * Activation
   * @example true
   */
  isActive: boolean;
}

export interface SimplifiedAlbumRO {
  /**
   * Id
   * @example "fb1c9d03ddb3caea7acff01b"
   */
  id: string;
  /**
   * Name
   * @example "Ticket to Ride"
   */
  name: string;
  /** Type */
  type: LabelValueRO;
  /**
   * Cover
   * @example "https://picsum.photos/seed/xUk3uhEw/2189/3600"
   */
  cover: string | null;
  /**
   * Accent color
   * @example "#6ec451"
   */
  color: string | null;
  /**
   * Release date
   * @format date-time
   * @example "2025-05-28T05:21:45.825Z"
   */
  releaseAt: string | null;
}

export interface SimplifiedAlbumsRO {
  /** Items */
  items: SimplifiedAlbumRO[];
  /**
   * Total
   * @example 1000
   */
  total: number;
  /**
   * Offset
   * @example 0
   */
  offset: number;
  /**
   * Limit
   * @example 25
   */
  limit: number;
  /**
   * Has More
   * @example true
   */
  hasMore: boolean;
}

export interface SimplifiedArtistRO {
  /**
   * Id
   * @example "d936dad28d02db5bbfb493f5"
   */
  id: string;
  /**
   * Name
   * @example "Arianna"
   */
  name: string;
  /**
   * Activation
   * @example true
   */
  isActive: boolean;
}

export interface TrackRO {
  /**
   * Id
   * @example "35ebafde1cd3f26b3c44b3ed"
   */
  id: string;
  /**
   * Name
   * @example "Daydream Believer"
   */
  name: string;
  /** Album */
  album: SimplifiedAlbumRO;
  /** Artist */
  artists: SimplifiedArtistRO[];
  /** Featured artist */
  featArtists: SimplifiedArtistRO[];
  /**
   * Url
   * @example "https://wiggly-horde.com/"
   */
  file: string | null;
  /**
   * Cover
   * @example "https://loremflickr.com/1501/3170?lock=7599572495820741"
   */
  cover: string | null;
  /** Type */
  type: LabelValueRO;
  /**
   * Duration
   * @example 240
   */
  duration: number | null;
  /**
   * Index
   * @example 0
   */
  trackNumber: number;
  /**
   * Explicit
   * @example true
   */
  isExplicit: boolean;
  /**
   * Activation
   * @example true
   */
  isActive: boolean;
  /**
   * Release date
   * @format date-time
   * @example "2025-08-19T17:20:59.948Z"
   */
  releaseAt: string | null;
}

export interface TracksRO {
  /** Items */
  items: TrackRO[];
  /**
   * Total
   * @example 1000
   */
  total: number;
  /**
   * Offset
   * @example 0
   */
  offset: number;
  /**
   * Limit
   * @example 25
   */
  limit: number;
  /**
   * Has More
   * @example true
   */
  hasMore: boolean;
}

export interface AlbumRO {
  /**
   * Id
   * @example "ef32fca0993bcb86d3a9611d"
   */
  id: string;
  /**
   * Name
   * @example "I Feel Fine"
   */
  name: string;
  /** Artists */
  artists: SimplifiedArtistRO[];
  /** Type */
  type: LabelValueRO;
  /** Genres */
  genres: LabelValueRO[];
  /**
   * Cover
   * @example "https://picsum.photos/seed/O2saNjdMq8/3779/3137"
   */
  cover: string | null;
  /**
   * Accent color
   * @example "#83030a"
   */
  color: string | null;
  /**
   * Description
   * @example "Vapulus sursum antea sordeo adsuesco color accusator cavus terga. Decipio utpote vergo alioqui aperiam corrigo temeritas eos exercitationem summa. Comburo nisi ocer eaque."
   */
  description: string;
  /**
   * Release date
   * @format date-time
   * @example "2025-09-23T08:23:46.785Z"
   */
  releaseAt: string | null;
  /**
   * Active
   * @example true
   */
  isActive: boolean;
}

export interface SimplifiedUserRO {
  /**
   * Id
   * @example "4dfb72bfcb0026c769ca64c7"
   */
  id: string;
  /**
   * Birth name
   * @example "Ulices"
   */
  name: string;
}

export interface PlaylistRO {
  /**
   * Id
   * @example "13b30bcc2e1fcde6f85efc2f"
   */
  id: string;
  /** User id */
  userId: string;
  /** User */
  user: SimplifiedUserRO;
  /**
   * Name
   * @example "Pick Up the Pieces"
   */
  name: string;
  /** Genres */
  genres: LabelValueRO[];
  /**
   * Cover
   * @example "https://picsum.photos/seed/52fAUp3/3137/654"
   */
  cover: string | null;
  /**
   * Accent color
   * @example "#bd66cf"
   */
  color: string | null;
  /**
   * Description
   * @example "Cruciamentum cui volaticus maxime cohaero."
   */
  description: string;
  /**
   * Created date
   * @format date-time
   * @example "2025-03-01T00:50:00.307Z"
   */
  createdAt: string;
  /**
   * Updated date
   * @format date-time
   * @example "2025-02-09T04:14:24.522Z"
   */
  updatedAt: string;
}

export interface PlaylistTrackRO {
  /** Track */
  track: TrackRO;
  /**
   * Added date
   * @format date-time
   * @example "2025-07-01T09:53:17.520Z"
   */
  addedAt: string;
}

export interface PlaylistTracksRO {
  /** Items */
  items: PlaylistTrackRO[];
  /**
   * Total
   * @example 1000
   */
  total: number;
  /**
   * Offset
   * @example 0
   */
  offset: number;
  /**
   * Limit
   * @example 25
   */
  limit: number;
  /**
   * Has More
   * @example true
   */
  hasMore: boolean;
}

export interface IndexedArtistRO {
  /**
   * Id
   * @example "132c5c9af55a76d7d5fcfbbe"
   */
  id: string;
  /**
   * Name
   * @example "Josefina"
   */
  name: string;
  /**
   * Avatar
   * @example "https://picsum.photos/seed/kgxjHSVqqi/798/315"
   */
  avatar: string | null;
  /** Type */
  type: string;
}

export interface IndexedArtistsRO {
  /** Items */
  items: IndexedArtistRO[];
  /**
   * Total
   * @example 1000
   */
  total: number;
  /**
   * Offset
   * @example 0
   */
  offset: number;
  /**
   * Limit
   * @example 25
   */
  limit: number;
  /**
   * Has More
   * @example true
   */
  hasMore: boolean;
}

export interface IndexedSimplifiedArtistRO {
  /**
   * Id
   * @example "3b680e4905ffe5199ac2a4f5"
   */
  id: string;
  /**
   * Name
   * @example "Alexanne"
   */
  name: string;
}

export interface IndexedAlbumRO {
  /**
   * Id
   * @example "57ecc846b2ea1d3efa52a2ac"
   */
  id: string;
  /**
   * Name
   * @example "Felix"
   */
  name: string;
  /** Artists of the album */
  artists: IndexedSimplifiedArtistRO[];
  /**
   * Cover
   * @example "https://loremflickr.com/1901/2946?lock=634768270789809"
   */
  cover: string | null;
  /** Type */
  type: string;
}

export interface IndexedAlbumsRO {
  /** Items */
  items: IndexedAlbumRO[];
  /**
   * Total
   * @example 1000
   */
  total: number;
  /**
   * Offset
   * @example 0
   */
  offset: number;
  /**
   * Limit
   * @example 25
   */
  limit: number;
  /**
   * Has More
   * @example true
   */
  hasMore: boolean;
}

export interface IndexedSimplifiedAlbumRO {
  /**
   * Id
   * @example "8ecca5c5b8022e8cbd16f8d7"
   */
  id: string;
  /**
   * Name
   * @example "Lourdes"
   */
  name: string;
}

export interface IndexedTrackRO {
  /**
   * Id
   * @example "920da5b41dfa0a2fbdb77d17"
   */
  id: string;
  /**
   * Name
   * @example "Alana"
   */
  name: string;
  /** Artists of the album */
  album: IndexedSimplifiedAlbumRO;
  /**
   * Featured artists
   * @example [null]
   */
  artists: IndexedSimplifiedArtistRO[];
  /**
   * Featured artists
   * @example [null]
   */
  featArtists: IndexedSimplifiedArtistRO[];
  /**
   * Cover
   * @example "https://picsum.photos/seed/rkDapYdpP/1986/1873"
   */
  cover: string | null;
  /** Type */
  type: string;
}

export interface IndexedTracksRO {
  /** Items */
  items: IndexedTrackRO[];
  /**
   * Total
   * @example 1000
   */
  total: number;
  /**
   * Offset
   * @example 0
   */
  offset: number;
  /**
   * Limit
   * @example 25
   */
  limit: number;
  /**
   * Has More
   * @example true
   */
  hasMore: boolean;
}

export interface IndexedSimplifiedUserRO {
  /**
   * Id
   * @example "0ea5188d13dc9d1327fcda66"
   */
  id: string;
  /**
   * Name
   * @example "Lucas"
   */
  name: string;
}

export interface IndexedPlaylistRO {
  /**
   * Id
   * @example "a3fe5c32aa54dee3d6b37bc5"
   */
  id: string;
  /**
   * Name
   * @example "Lon"
   */
  name: string;
  /** User */
  user: IndexedSimplifiedUserRO;
  /**
   * Cover
   * @example "https://picsum.photos/seed/OMAmG26WFl/1332/2246"
   */
  cover: string | null;
  /** Type */
  type: string;
}

export interface IndexedPlaylistsRO {
  /** Items */
  items: IndexedPlaylistRO[];
  /**
   * Total
   * @example 1000
   */
  total: number;
  /**
   * Offset
   * @example 0
   */
  offset: number;
  /**
   * Limit
   * @example 25
   */
  limit: number;
  /**
   * Has More
   * @example true
   */
  hasMore: boolean;
}

export interface SearchResultRO {
  /** Artists */
  artists: IndexedArtistsRO;
  /** Albums */
  albums: IndexedAlbumsRO;
  /** Tracks */
  tracks: IndexedTracksRO;
  /** Playlists */
  playlists: IndexedPlaylistsRO;
  /** Top results */
  topResults: IndexedPlaylistRO[];
}

export interface ArtistsRO {
  /** Items */
  items: ArtistRO[];
  /**
   * Total
   * @example 1000
   */
  total: number;
  /**
   * Offset
   * @example 0
   */
  offset: number;
  /**
   * Limit
   * @example 25
   */
  limit: number;
  /**
   * Has More
   * @example true
   */
  hasMore: boolean;
}

export interface AlbumsRO {
  /** Items */
  items: AlbumRO[];
  /**
   * Total
   * @example 1000
   */
  total: number;
  /**
   * Offset
   * @example 0
   */
  offset: number;
  /**
   * Limit
   * @example 25
   */
  limit: number;
  /**
   * Has More
   * @example true
   */
  hasMore: boolean;
}

export interface PlaylistsRO {
  /** Items */
  items: PlaylistRO[];
  /**
   * Total
   * @example 1000
   */
  total: number;
  /**
   * Offset
   * @example 0
   */
  offset: number;
  /**
   * Limit
   * @example 25
   */
  limit: number;
  /**
   * Has More
   * @example true
   */
  hasMore: boolean;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = '';
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => 'undefined' !== typeof query[key]);
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join('&');
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : '';
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== 'string' ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
        },
        signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
        body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      return data;
    });
  };
}

/**
 * @title Client API
 * @version 1.0.0-alpha.9
 * @contact
 *
 * The API description
 */
export class ApiModule<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  artists = {
    /**
     * No description
     *
     * @tags Artists
     * @name GetArtistsByIds
     * @summary Get artists by ids
     * @request GET:/artists
     */
    getArtistsByIds: (
      query: {
        /**
         * Ids
         * @example "0eb50debeb9abb27468dc95e,3ff4c2cad0cebb52e5cd6d5f"
         */
        ids: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<(ArtistRO | null)[], any>({
        path: `/artists`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Artists
     * @name GetArtist
     * @summary Get an artist by id
     * @request GET:/artists/{id}
     */
    getArtist: (id: string, params: RequestParams = {}) =>
      this.request<ArtistRO, any>({
        path: `/artists/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Artists
     * @name GetArtistAlbums
     * @summary Get artist public albums
     * @request GET:/artists/{id}/albums
     */
    getArtistAlbums: (
      id: string,
      query?: {
        /**
         * Limit
         * @example 50
         */
        limit?: number;
        /**
         * Offset
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<SimplifiedAlbumsRO, any>({
        path: `/artists/${id}/albums`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Artists
     * @name GetArtistTracks
     * @summary Get artist public tracks
     * @request GET:/artists/{id}/tracks
     */
    getArtistTracks: (
      id: string,
      query?: {
        /**
         * Limit
         * @example 50
         */
        limit?: number;
        /**
         * Offset
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<TracksRO, any>({
        path: `/artists/${id}/tracks`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Artists
     * @name GetLatestRelease
     * @summary Get artist latest release
     * @request GET:/artists/{id}/latest-release
     */
    getLatestRelease: (id: string, params: RequestParams = {}) =>
      this.request<AlbumRO, any>({
        path: `/artists/${id}/latest-release`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Artists
     * @name GetSimilarArtists
     * @summary Get similar artists
     * @request GET:/artists/{id}/similar
     */
    getSimilarArtists: (id: string, params: RequestParams = {}) =>
      this.request<ArtistRO[], any>({
        path: `/artists/${id}/similar`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  album = {
    /**
     * No description
     *
     * @tags Album
     * @name GetAlbumsByIds
     * @summary Get albums by ids
     * @request GET:/albums
     */
    getAlbumsByIds: (
      query: {
        /**
         * Ids
         * @example "feebb63ac95b7f4046fc1a29,1dccd9c3efd91e27d2db0eba"
         */
        ids: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<(AlbumRO | null)[], any>({
        path: `/albums`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Album
     * @name GetAlbum
     * @summary Get an album by id
     * @request GET:/albums/{id}
     */
    getAlbum: (id: string, params: RequestParams = {}) =>
      this.request<AlbumRO, any>({
        path: `/albums/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Album
     * @name GetAlbumTracks
     * @summary Get album tracks
     * @request GET:/albums/{id}/tracks
     */
    getAlbumTracks: (
      id: string,
      query?: {
        /**
         * Limit
         * @example 50
         */
        limit?: number;
        /**
         * Offset
         * @example 0
         */
        offset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<TracksRO, any>({
        path: `/albums/${id}/tracks`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  track = {
    /**
     * No description
     *
     * @tags Track
     * @name GetTrack
     * @summary Get an track by id
     * @request GET:/tracks/{id}
     */
    getTrack: (id: string, params: RequestParams = {}) =>
      this.request<TrackRO, any>({
        path: `/tracks/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
  playlist = {
    /**
     * No description
     *
     * @tags Playlist
     * @name GetPlaylistsByIds
     * @summary Get playlists by ids
     * @request GET:/playlists
     */
    getPlaylistsByIds: (
      query: {
        /**
         * Ids
         * @example "b219e9e104cddc9fbe0737e4,d05f53b45f1ff5c1583e0fad"
         */
        ids: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<(PlaylistRO | null)[], any>({
        path: `/playlists`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Playlist
     * @name GetPlaylist
     * @summary Get playlist by id
     * @request GET:/playlists/{id}
     */
    getPlaylist: (id: string, params: RequestParams = {}) =>
      this.request<PlaylistRO, any>({
        path: `/playlists/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Playlist
     * @name GetPlaylistTracks
     * @summary Get playlist tracks
     * @request GET:/playlists/{id}/tracks
     */
    getPlaylistTracks: (
      id: string,
      query?: {
        /**
         * Limit
         * @example 50
         */
        limit?: string;
        /**
         * Offset
         * @example 0
         */
        offset?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PlaylistTracksRO, any>({
        path: `/playlists/${id}/tracks`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  search = {
    /**
     * No description
     *
     * @tags Search
     * @name Search
     * @summary Global search
     * @request GET:/search
     */
    search: (
      query: {
        /**
         * Query
         * @example "eminem"
         */
        q: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SearchResultRO, any>({
        path: `/search`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
  popular = {
    /**
     * No description
     *
     * @tags Popular
     * @name GetPopularArtists
     * @summary Get popular artists
     * @request GET:/popular/artists
     */
    getPopularArtists: (
      query: {
        /**
         * Genres
         * @example "HH,POP"
         */
        genres: string;
        /**
         * Offset
         * @example 0
         */
        offset?: number;
        /**
         * Limit
         * @example 50
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ArtistsRO, any>({
        path: `/popular/artists`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Popular
     * @name GetPopularAlbums
     * @summary Get popular albums
     * @request GET:/popular/albums
     */
    getPopularAlbums: (
      query: {
        /**
         * Genres
         * @example "HH,POP"
         */
        genres: string;
        /**
         * Offset
         * @example 0
         */
        offset?: number;
        /**
         * Limit
         * @example 50
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AlbumsRO, any>({
        path: `/popular/albums`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Popular
     * @name GetPopularPlaylists
     * @summary Get popular playlists
     * @request GET:/popular/playlists
     */
    getPopularPlaylists: (
      query: {
        /**
         * Genres
         * @example "HH,POP"
         */
        genres: string;
        /**
         * Offset
         * @example 0
         */
        offset?: number;
        /**
         * Limit
         * @example 50
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PlaylistsRO, any>({
        path: `/popular/playlists`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),
  };
}

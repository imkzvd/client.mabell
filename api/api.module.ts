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
   * @example "facc629886ed7207c260bb7d"
   */
  id: string;
  /**
   * Name
   * @example "Colt"
   */
  name: string;
  /**
   * Birth name
   * @example "Wayne Beier"
   */
  birthName: string | null;
  /**
   * Birth date
   * @format date-time
   * @example "2025-05-30T17:12:24.104Z"
   */
  birthDate: string | null;
  /** Genres */
  genres: LabelValueRO[];
  /**
   * Biography
   * @example "film lover, designer, film lover"
   */
  biography: string;
  /**
   * Avatar URL
   * @example "https://api.mabell.fun/graceful_over.webp"
   */
  avatar: string | null;
  /**
   * Cover URL
   * @example "https://api.mabell.fun/till_apropos.webp"
   */
  cover: string | null;
  /**
   * Accent color
   * @example "#eaadcc"
   */
  accentColor: string | null;
  /**
   * Secondary color
   * @example "#ab654e"
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
   * @example "f2aec7686f6a9da33e0acce1"
   */
  id: string;
  /**
   * Name
   * @example "(Sittin' On) the Dock of the Bay"
   */
  name: string;
  /** Type */
  type: LabelValueRO;
  /**
   * Cover
   * @example "https://picsum.photos/seed/mT4k7J0/2902/2173"
   */
  cover: string | null;
  /**
   * Release date
   * @format date-time
   * @example "2025-09-15T02:54:00.213Z"
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
   * @example "dffa808c3d709bfead0eebbb"
   */
  id: string;
  /**
   * Name
   * @example "Mariana"
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
   * @example "306342caa5b89edf3ae6c2c9"
   */
  id: string;
  /**
   * Name
   * @example "Light My Fire"
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
   * @example "https://alienated-supplier.name/"
   */
  file: string | null;
  /**
   * Cover
   * @example "https://picsum.photos/seed/4PspNhi9V/3745/1926"
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
   * @example "2025-02-06T21:22:40.134Z"
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
   * @example "d3a7b563e8e9a67bb11b7e6a"
   */
  id: string;
  /**
   * Name
   * @example "Disco Duck"
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
   * @example "https://loremflickr.com/3145/46?lock=7026978709797762"
   */
  cover: string | null;
  /**
   * Accent color
   * @example "#dd2cc6"
   */
  color: string | null;
  /**
   * Description
   * @example "Dicta ab sursum reprehenderit charisma territo antea perferendis. Excepturi deleo vinco vetus capto tenax coepi vilicus. Ascisco vetus dicta censura voveo tremo.
   * Apto paens virtus totus asperiores solium valetudo volutabrum. Illo tristis usus cognatus. Cariosus aer degero via depono tubineus.
   * Curia depereo aperiam depereo neque. Strues adfero odio tui quia aranea. Versus eligendi spero ceno."
   */
  description: string;
  /**
   * Release date
   * @format date-time
   * @example "2025-04-28T18:33:46.289Z"
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
   * @example "6e23ff3b9bd5a580e297c11c"
   */
  id: string;
  /**
   * Birth name
   * @example "Coralie"
   */
  name: string;
}

export interface PlaylistRO {
  /**
   * Id
   * @example "efbe1c2c67efe50a845aa847"
   */
  id: string;
  /** User id */
  userId: string;
  /** User */
  user: SimplifiedUserRO;
  /**
   * Name
   * @example "Ol' Man River"
   */
  name: string;
  /** Genres */
  genres: LabelValueRO[];
  /**
   * Cover
   * @example "https://loremflickr.com/2794/2315?lock=7776835037772279"
   */
  cover: string | null;
  /**
   * Accent color
   * @example "#ef7e64"
   */
  color: string | null;
  /**
   * Description
   * @example "Demens clamo sunt accusator.
   * Aer conor patrocinor vilicus appello quia timidus vicissitudo vesica valens.
   * Caput tum degero thorax tepidus benigne cuius alius."
   */
  description: string;
  /**
   * Created date
   * @format date-time
   * @example "2025-05-17T06:49:56.693Z"
   */
  createdAt: string;
  /**
   * Updated date
   * @format date-time
   * @example "2024-12-11T02:51:18.305Z"
   */
  updatedAt: string;
}

export interface PlaylistTrackRO {
  /** Track */
  track: TrackRO;
  /**
   * Added date
   * @format date-time
   * @example "2025-01-16T13:07:44.235Z"
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

export interface IndexedArtistRO {
  /**
   * Id
   * @example "835b0ffe7b8d9d8d1b172fce"
   */
  id: string;
  /**
   * Name
   * @example "Aniyah"
   */
  name: string;
  /**
   * Avatar
   * @example "https://loremflickr.com/3846/3022?lock=2885019265487631"
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
   * @example "1c448fedb54fbc13ffa44815"
   */
  id: string;
  /**
   * Name
   * @example "Krista"
   */
  name: string;
}

export interface IndexedAlbumRO {
  /**
   * Id
   * @example "ed177a3ca3561ceabc8afdf0"
   */
  id: string;
  /**
   * Name
   * @example "Neal"
   */
  name: string;
  /** Artists of the album */
  artists: IndexedSimplifiedArtistRO[];
  /**
   * Cover
   * @example "https://picsum.photos/seed/UCnCK2/624/3656"
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
   * @example "cdd8c65e7b71eb889f90cadc"
   */
  id: string;
  /**
   * Name
   * @example "Rico"
   */
  name: string;
}

export interface IndexedTrackRO {
  /**
   * Id
   * @example "6ebbbccb3c6699ab47da13bd"
   */
  id: string;
  /**
   * Name
   * @example "Jesus"
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
   * @example "https://picsum.photos/seed/L4QOtn8/1049/212"
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
   * @example "b0b3bbf5aac351ff45f63beb"
   */
  id: string;
  /**
   * Name
   * @example "Luther"
   */
  name: string;
}

export interface IndexedPlaylistRO {
  /**
   * Id
   * @example "ac4a6ae4553d4fed04be34fc"
   */
  id: string;
  /**
   * Name
   * @example "Krista"
   */
  name: string;
  /** User */
  user: IndexedSimplifiedUserRO;
  /**
   * Cover
   * @example "https://loremflickr.com/726/1822?lock=8293863309599724"
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
 * @version 1.0.0-alpha.7
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

    /**
     * No description
     *
     * @tags Playlist
     * @name GetPlaylistsByGenres
     * @summary Get playlist by genre
     * @request GET:/playlists
     */
    getPlaylistsByGenres: (
      query: {
        /**
         * Genre
         * @example "hip-hop"
         */
        genres: string;
        /**
         * Offset
         * @example 0
         */
        offset?: string;
        /**
         * Limit
         * @example 50
         */
        limit?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PlaylistsRO, any>({
        path: `/playlists`,
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

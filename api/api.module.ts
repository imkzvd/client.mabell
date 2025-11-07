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
   * @example "241ed5749f6e8d7cd32e0fed"
   */
  id: string;
  /**
   * Name
   * @example "Kadin"
   */
  name: string;
  /**
   * Birth name
   * @example "Amelia Hudson"
   */
  birthName: string | null;
  /**
   * Birth date
   * @format date-time
   * @example "2025-10-13T22:35:26.300Z"
   */
  birthDate: string | null;
  /** Genres */
  genres: LabelValueRO[];
  /**
   * Biography
   * @example "coach, grad"
   */
  biography: string;
  /**
   * Avatar URL
   * @example "https://api.mabell.fun/suckle_deform_suddenly.webp"
   */
  avatar: string | null;
  /**
   * Cover URL
   * @example "https://api.mabell.fun/lest_zowie_modulo.webp"
   */
  cover: string | null;
  /**
   * Accent color
   * @example "#36899d"
   */
  accentColor: string | null;
  /**
   * Secondary color
   * @example "#ac6ffc"
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
   * @example "46cb2af9e8ccdd6cfdebc420"
   */
  id: string;
  /**
   * Name
   * @example "Fallin'"
   */
  name: string;
  /** Type */
  type: LabelValueRO;
  /**
   * Cover
   * @example "https://picsum.photos/seed/vwVbw09Wv/2041/213"
   */
  cover: string | null;
  /**
   * Release date
   * @format date-time
   * @example "2025-02-24T08:17:07.601Z"
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
   * @example "d4c3f3bc89fc36ccb99d2baf"
   */
  id: string;
  /**
   * Name
   * @example "Brando"
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
   * @example "0c8e3dd544c61185eb6dd823"
   */
  id: string;
  /**
   * Name
   * @example "Yakety Yak"
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
   * @example "https://unusual-meadow.biz"
   */
  file: string | null;
  /**
   * Cover
   * @example "https://loremflickr.com/233/2764?lock=8339677761737418"
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
   * @example "2025-06-25T03:36:20.049Z"
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
   * @example "c2effcacffc0da6a0ff19272"
   */
  id: string;
  /**
   * Name
   * @example "Give Me Everything"
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
   * @example "https://loremflickr.com/1634/553?lock=6718638347784090"
   */
  cover: string | null;
  /**
   * Accent color
   * @example "#fbacd7"
   */
  color: string | null;
  /**
   * Description
   * @example "Corporis speculum ars terror abduco iure. Assentator tametsi nemo."
   */
  description: string;
  /**
   * Release date
   * @format date-time
   * @example "2025-05-30T10:24:39.261Z"
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
   * @example "84af097afbc1cfee75c6bae6"
   */
  id: string;
  /**
   * Birth name
   * @example "Valerie"
   */
  name: string;
}

export interface PlaylistRO {
  /**
   * Id
   * @example "ca0c6698e1df9bfa4eedf8eb"
   */
  id: string;
  /** User id */
  userId: string;
  /** User */
  user: SimplifiedUserRO;
  /**
   * Name
   * @example "Wedding Bell Blues"
   */
  name: string;
  /** Genres */
  genres: LabelValueRO[];
  /**
   * Cover
   * @example "https://picsum.photos/seed/Hu7yelDUI/643/130"
   */
  cover: string | null;
  /**
   * Accent color
   * @example "#fa3301"
   */
  color: string | null;
  /**
   * Description
   * @example "Sulum atque tergiversatio argumentum atrocitas crustulum audacia. Tripudio comes vesica vesica adsidue vehemens amicitia desolo alo. Eius curriculum vester creptio. Unus amiculum vae amor basium vociferor strenuus temptatio. Articulus creptio theatrum vulnero statim in velum cupio curatio auctor."
   */
  description: string;
  /**
   * Created date
   * @format date-time
   * @example "2025-05-23T10:02:58.073Z"
   */
  createdAt: string;
  /**
   * Updated date
   * @format date-time
   * @example "2025-09-12T06:22:04.465Z"
   */
  updatedAt: string;
}

export interface PlaylistTrackRO {
  /** Track */
  track: TrackRO;
  /**
   * Added date
   * @format date-time
   * @example "2025-09-08T17:34:22.437Z"
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
   * @example "23f2bed951b8fceea7aa5ade"
   */
  id: string;
  /**
   * Name
   * @example "Diana"
   */
  name: string;
  /**
   * Avatar
   * @example "https://picsum.photos/seed/G91m3NuJ/3232/3029"
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
   * @example "34faf2d36e37c7be2e66de9d"
   */
  id: string;
  /**
   * Name
   * @example "Amalia"
   */
  name: string;
}

export interface IndexedAlbumRO {
  /**
   * Id
   * @example "add7e7d86ee1062ef8ad8e25"
   */
  id: string;
  /**
   * Name
   * @example "Tamia"
   */
  name: string;
  /** Artists of the album */
  artists: IndexedSimplifiedArtistRO[];
  /**
   * Cover
   * @example "https://picsum.photos/seed/q6Zh9/450/2071"
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
   * @example "dcad5071564c2782fef127d8"
   */
  id: string;
  /**
   * Name
   * @example "Jaida"
   */
  name: string;
}

export interface IndexedTrackRO {
  /**
   * Id
   * @example "2f8dbbe9ef1915dc4d9933cc"
   */
  id: string;
  /**
   * Name
   * @example "Elmore"
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
   * @example "https://loremflickr.com/3795/3085?lock=3848167558924471"
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
   * @example "47f74f0a5e4b9830a7e5ae93"
   */
  id: string;
  /**
   * Name
   * @example "Dagmar"
   */
  name: string;
}

export interface IndexedPlaylistRO {
  /**
   * Id
   * @example "df1f7cf7fbd5c76f6de83fd4"
   */
  id: string;
  /**
   * Name
   * @example "Samantha"
   */
  name: string;
  /** User */
  user: IndexedSimplifiedUserRO;
  /**
   * Cover
   * @example "https://picsum.photos/seed/V2bDeui/51/71"
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
 * @version 1.0.0-alpha.8
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
         * @example "e7ed5d6fbfc378d920cc3de2,cb6eeede27772c08a4ef47c0"
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
         * @example "4fc8e647dacadefecce9fd6d,e03b241f817b1d5a6f26df53"
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
         * @example "72d3ef57db264ad9008f2f53,6aeea92cc3db34e2d99e00f6"
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

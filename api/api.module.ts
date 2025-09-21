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
   * @example "968ad807c85ca7cfbd6fbf4a"
   */
  id: string;
  /**
   * Name
   * @example "Edgardo"
   */
  name: string;
  /**
   * Birth name
   * @example "Josh Gibson"
   */
  birthName: string | null;
  /**
   * Birth date
   * @format date-time
   * @example "2025-07-08T13:20:11.987Z"
   */
  birthDate: string | null;
  /** Genres */
  genres: LabelValueRO[];
  /**
   * Biography
   * @example "fun lover, coach ✋🏼"
   */
  biography: string;
  /**
   * Avatar URL
   * @example "undefined/experience.webp"
   */
  avatar: string | null;
  /**
   * Cover URL
   * @example "undefined/wearily_overfeed.webp"
   */
  cover: string | null;
  /**
   * Accent color
   * @example "#23fb13"
   */
  accentColor: string | null;
  /**
   * Secondary color
   * @example "#55d947"
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
   * @example "febda75bff4695b9862e9acb"
   */
  id: string;
  /**
   * Name
   * @example "How You Remind Me"
   */
  name: string;
  /** Type */
  type: LabelValueRO;
  /**
   * Cover
   * @example "https://picsum.photos/seed/6XAHWSJwL/2124/3710"
   */
  cover: string | null;
  /**
   * Release date
   * @format date-time
   * @example "2025-04-03T02:54:57.659Z"
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
   * @example "b5d2bde11bb1bce8066ea6c8"
   */
  id: string;
  /**
   * Name
   * @example "Arlie"
   */
  name: string;
  /**
   * Activation
   * @example true
   */
  isActive: boolean;
}

export interface AlbumRO {
  /**
   * Id
   * @example "fc35bebf2b252514845dbd2b"
   */
  id: string;
  /**
   * Name
   * @example "Ballerina"
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
   * @example "https://picsum.photos/seed/u6Ts3vO/1583/3843"
   */
  cover: string | null;
  /**
   * Accent color
   * @example "#4c0fe3"
   */
  color: string | null;
  /**
   * Description
   * @example "Centum viduo aperte catena custodia cognomen saepe avarus. Vereor necessitatibus suppono quod adimpleo crapula impedit. Supra cenaculum est approbo tui delego benigne suppono ascit pecco. Aufero arbor socius comitatus cura. Stillicidium utilis dens speculum carbo aperiam dens defetiscor."
   */
  description: string;
  /**
   * Release date
   * @format date-time
   * @example "2025-03-29T09:37:25.234Z"
   */
  releaseAt: string | null;
  /**
   * Active
   * @example true
   */
  isActive: boolean;
}

export interface TrackRO {
  /**
   * Id
   * @example "8bb23ef4ae7cf9cfd52150cb"
   */
  id: string;
  /**
   * Name
   * @example "My Blue Heaven"
   */
  name: string;
  /** Album */
  album: AlbumRO;
  /** Featured artist */
  featArtists: SimplifiedArtistRO[];
  /**
   * Url
   * @example "https://pale-freezing.org/"
   */
  file: string | null;
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
 * @version 1.0.0
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
}

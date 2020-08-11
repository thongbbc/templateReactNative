import AuthService from './auth.service';
import { BASE_URL, VERSION, DEFAULT_TIMEOUT } from '../constant/config';
import axios, { AxiosError } from 'axios';

export enum RequestMethod {
  POST = 'POST',
  PATCH = 'PATCH',
  GET = 'GET',
}

axios.interceptors.response.use(undefined, function (error: AxiosError) {
  (error as any).originalMessage = error.message;
  Object.defineProperty(error, "error", {
    get: function () {
      if (!error.response) {
        return (error as any).originalMessage;
      }
      return (error.response.data);
    }
  });
  return Promise.reject(error);
})

export default class BaseService {
  private readonly authApi: AuthService;
  public static readonly instance: BaseService = new BaseService();

  public get auth(): AuthService {
    return this.authApi;
  }

  constructor() {
    if (BaseService.instance) {
      throw new Error("Error: Singleton, use BaseService.instance");
    }
    this.authApi = new AuthService(this);
  }

  public readonly request = (
    method: RequestMethod,
    endpoint: string,
    body?: Object,
    optionalHeaders?: Object,
  ) => {
    var options = {
      baseURL: BASE_URL,
      endpoint: `${VERSION}${endpoint}`,
      method: method,
      headers: {
        'Content-Type': 'application/json',
        ...optionalHeaders
      }
    };

    return axios({
      baseURL: options.baseURL,
      headers: options.headers,
      timeout: DEFAULT_TIMEOUT,
      ...optionalHeaders,
      method: options.method,
      url: options.endpoint,
      data: method == 'GET' ? undefined : body
    });
  };
}
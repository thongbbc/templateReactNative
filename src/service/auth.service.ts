import BaseService, { RequestMethod } from './apiHelper';

export default class AuthService {
  private baseService: BaseService;
  constructor(baseService: BaseService) {
    this.baseService = baseService;
  }

  public async login(body: any): Promise<any> {
    try {
      const response: any = await this.baseService.request(
        RequestMethod.POST,
        '/users/login',
        {
          password: body.password,
          username: body.userName
        },
      );
      return response.data;
    } catch (err) {
      return Promise.reject(err);
    }
  };
}
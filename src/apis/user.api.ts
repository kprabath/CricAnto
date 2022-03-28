import Api from './api';

export default class UserAPI {
  static signUpAPI = data =>
    Api.request({
      method: 'post',
      action: 'register',
      data,
    });

  static logInAPI = data =>
    Api.request({
      method: 'post',
      action: 'login',
      data,
    });
}

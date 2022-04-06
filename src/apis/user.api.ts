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

  static sendOTPAPI = data =>
    Api.request({
      method: 'post',
      action: 'register/verify',
      data,
    });
}

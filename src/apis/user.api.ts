import Api from './api';

export default class UserAPI {
  static signUpAPI = data =>
    Api.request({
      method: 'post',
      action: 'register',
      guest: true,
      data,
    });

  static logInAPI = data =>
    Api.request({
      method: 'post',
      action: 'login',
      guest: true,
      data,
    });

  static sendOTPAPI = data =>
    Api.request({
      method: 'post',
      action: 'register/verify',
      data,
    });
}

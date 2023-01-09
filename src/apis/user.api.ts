import Api from './api';

export default class UserAPI {
  static signUpAPI = (data: any) =>
    Api.request({
      method: 'post',
      action: 'register',
      guest: true,
      data,
    });

  static logInAPI = (data: any) =>
    Api.request({
      method: 'post',
      action: 'login',
      guest: true,
      data,
    });

  static logOutAPI = (data: any) =>
    Api.request({
      method: 'post',
      action: 'logout',
      guest: true,
      data,
    });

  static sendOTPAPI = (data: any) =>
    Api.request({
      method: 'post',
      action: 'register/verify',
      data,
    });

  static updateUserEmailAPI = (data: any) =>
    Api.request({
      method: 'post',
      action: 'user/update/email',
      data,
    });

  static updateUserTelephoneNoAPI = (data: any) =>
    Api.request({
      method: 'post',
      action: 'user/update/mobile_number',
      data,
    });

  static updateUserAddressAPI = (data: any) =>
    Api.request({
      method: 'post',
      action: 'user/update/address',
      data,
    });

  static updateUserStatusAPI = (data: any) =>
    Api.request({
      method: 'post',
      action: 'user/update/status',
      data,
    });
}

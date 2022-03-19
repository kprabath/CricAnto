import Api from './api';

export default class UserAPI {
  static signUpAPI = data =>
    Api.request({
      method: 'post',
      action: '/auth/signup',
      data,
    });

  // static getAccountDataApi = () =>
  //   Api.request({
  //     method: 'get',
  //     action: ACCOUNT_BALANCE,
  //     apiVersion: apiVersionEnums.V1,
  //     appType: appTypeEnums.SA,
  //   });
}

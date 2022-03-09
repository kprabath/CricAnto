import {USER_LOGIN, USER_REGISTER} from '../common/constants';

export const userLogin = (payload: Object) => ({
  type: USER_LOGIN,
  payload,
});

export const userRegister = (payload: Object) => ({
  type: USER_REGISTER,
  payload,
});

import {USER_LOGIN,SEND_OTP, USER_REGISTER} from '../common/constants';

export const userLogin = (
  payload: Object,
  success: Function,
  failed: Function,
) => ({
  type: USER_LOGIN,
  payload,
  success,
  failed,
});

export const userRegister = (
  payload: Object,
  success: Function,
  failed: Function,
) => ({
  type: USER_REGISTER,
  payload,
  success,
  failed,
});

export const sendOTP = (
  payload: Object,
  success: Function,
  failed: Function,
) => ({
  type: SEND_OTP,
  payload,
  success,
  failed,
});

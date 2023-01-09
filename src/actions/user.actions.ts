import {
  USER_LOGIN,
  USER_LOGOUT,
  SEND_OTP,
  USER_REGISTER,
  UPDATE_USER_EMAIL,
  UPDATE_USER_TELEPHONE_NO,
  UPDATE_USER_ADDRESS,
  UPDATE_USER_STATUS,
} from '../common/constants';

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

export const userLogout = (
  payload: Object,
  success: Function,
  failed: Function,
) => ({
  type: USER_LOGOUT,
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

export const updateUserEmail = (
  payload: Object,
  success: Function,
  failed: Function,
) => ({
  type: UPDATE_USER_EMAIL,
  payload,
  success,
  failed,
});

export const updateUserTelephoneNo = (
  payload: Object,
  success: Function,
  failed: Function,
) => ({
  type: UPDATE_USER_TELEPHONE_NO,
  payload,
  success,
  failed,
});

export const updateUserAddress = (
  payload: Object,
  success: Function,
  failed: Function,
) => ({
  type: UPDATE_USER_ADDRESS,
  payload,
  success,
  failed,
});

export const updateUserStatus = (
  payload: Object,
  success: Function,
  failed: Function,
) => ({
  type: UPDATE_USER_STATUS,
  payload,
  success,
  failed,
});

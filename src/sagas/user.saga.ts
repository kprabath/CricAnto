import {put, takeEvery, call, select, all} from 'redux-saga/effects';
import {
  USER_REGISTER,
  SEND_OTP,
  USER_LOGIN,
  SET_AUTH_TOKEN,
  SET_USER_LOGIN,
} from '../common/constants';

import UserAPi from '../apis/user.api';

export function* userRegister({payload, success, failed}) {
  try {
    const data = yield call(UserAPi.signUpAPI, payload);
    yield all([
      put({type: SET_AUTH_TOKEN, payload: data?.token}),
      put({type: SET_USER_LOGIN, payload: true}),
    ]);
    success(data.token);
  } catch (error) {
    failed(error);
  }
}

export function* sendOTP({payload, success, failed}) {
  try {
    const data = yield call(UserAPi.sendOTPAPI, payload);
    yield all([
      put({type: SET_AUTH_TOKEN, payload: data?.token}),
      put({type: SET_USER_LOGIN, payload: true}),
    ]);
    success(data.message);
  } catch (error) {
    failed(error);
  }
}

export function* userLogin({payload, success, failed}) {
  try {
    const data = yield call(UserAPi.logInAPI, payload);
    yield all([
      put({type: SET_AUTH_TOKEN, payload: data?.token}),
      put({type: SET_USER_LOGIN, payload: true}),
    ]);
    success(data.message);
  } catch (error) {
    failed(error);
  }
}

function* userSaga() {
  yield takeEvery(USER_REGISTER, userRegister);
  yield takeEvery(USER_LOGIN, userLogin);
  yield takeEvery(SEND_OTP, sendOTP);
}

export default userSaga;

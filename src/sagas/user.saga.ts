import {put, takeEvery, call, all} from 'redux-saga/effects';
import {
  USER_REGISTER,
  SEND_OTP,
  USER_LOGIN,
  SET_AUTH_TOKEN,
  SET_USER_LOGIN,
  SET_USER_INFO,
} from '../common/constants';

import UserAPi from '../apis/user.api';

export type TSaga = {
  payload: any;
  success: (data?: any) => void;
  failed: (data?: any) => void;
};

export function* userRegister({payload, success, failed}: TSaga) {
  try {
    const {data} = yield call(UserAPi.signUpAPI, payload);
    yield put({type: SET_AUTH_TOKEN, payload: data?.token});
    yield put({type: SET_USER_INFO, payload: data?.result});
    success(data.token);
  } catch (error) {
    failed(error);
  }
}

export function* sendOTP({payload, failed}: TSaga) {
  try {
    const {data} = yield call(UserAPi.sendOTPAPI, payload);
    if (data?.response?.acknowledged === true) {
      yield put({type: SET_USER_LOGIN, payload: true});
    }
    // success(data.message);
  } catch (error) {
    failed(error);
  }
}

export function* userLogin({payload, success, failed}: TSaga) {
  try {
    const {data} = yield call(UserAPi.logInAPI, payload);
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

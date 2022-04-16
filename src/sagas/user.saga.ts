import {put, takeEvery, call, select} from 'redux-saga/effects';
import {USER_REGISTER, SEND_OTP, USER_LOGIN} from '../common/constants';

import UserAPi from '../apis/user.api';

export function* userRegister({payload, success, failed}) {
  try {
    const data = yield call(UserAPi.signUpAPI, payload);
    success(data.token);
  } catch (error) {
    failed(error.error);
  }
}

export function* sendOTP({payload, success, failed}) {
  try {
    const data = yield call(UserAPi.sendOTPAPI, payload);
    console.log(data, 'ddd');
    success(data.message);
  } catch (error) {
    console.log(error, 'dddff');
    failed(error.error);
  }
}

export function* userLogin({payload, success, failed}) {
  try {
    const data = yield call(UserAPi.logInAPI, payload);
    console.log(data, 'fff');
    success(data.message);
  } catch (error) {
    console.log(error, 'rrfff');
    failed(error.message);
  }
}

function* userSaga() {
  yield takeEvery(USER_REGISTER, userRegister);
  yield takeEvery(USER_LOGIN, userLogin);
  yield takeEvery(SEND_OTP, sendOTP);
}

export default userSaga;

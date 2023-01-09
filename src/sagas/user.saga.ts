import {put, takeEvery, call, all, select} from 'redux-saga/effects';
import {
  USER_REGISTER,
  SEND_OTP,
  USER_LOGIN,
  SET_AUTH_TOKEN,
  SET_USER_LOGIN,
  SET_USER_INFO,
  UPDATE_USER_EMAIL,
  UPDATE_USER_TELEPHONE_NO,
  UPDATE_USER_ADDRESS,
  UPDATE_USER_STATUS,
  UPDATE_FIRST_TIME,
  USER_LOGOUT,
  SET_AUTH_NULL,
} from '../common/constants';

import UserAPi from '../apis/user.api';
import {AuthReducers, Reducers} from '../types';

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
  } catch (error) {
    failed(error);
  }
}

export function* userLogin({payload, success, failed}: TSaga) {
  try {
    const {data} = yield call(UserAPi.logInAPI, payload);
    yield all([
      put({type: SET_AUTH_TOKEN, payload: data?.token}),
      put({type: SET_USER_INFO, payload: data?.user}),
      put({type: SET_USER_LOGIN, payload: true}),
    ]);
    success(data.message);
  } catch (error) {
    failed(error);
  }
}

export function* userLogout({payload, success, failed}: TSaga) {
  try {
    const {data} = yield call(UserAPi.logOutAPI, payload);
    yield put({type: SET_AUTH_NULL, payload: null});
    success(data.message);
  } catch (error) {
    console.log('LOGOUT', error);
    failed(error);
  }
}

export function* userUpdateEmail({payload, success, failed}: TSaga) {
  try {
    const {data} = yield call(UserAPi.updateUserEmailAPI, payload);
    const existingUserInfo: AuthReducers['userInfo'] = yield select(
      (state: Reducers) => state.auth.userInfo,
    );
    const newUserInfo = {...existingUserInfo, email: payload.updatedEmail};
    yield put({type: SET_USER_INFO, payload: newUserInfo});
    success(data.message);
  } catch (error) {
    failed(error);
  }
}

export function* userUpdateTelephoneNo({payload, success, failed}: TSaga) {
  try {
    const {data} = yield call(UserAPi.updateUserTelephoneNoAPI, payload);
    const existingUserInfo: AuthReducers['userInfo'] = yield select(
      (state: Reducers) => state.auth.userInfo,
    );
    const newUserInfo = {
      ...existingUserInfo,
      phoneNumber: payload.updatedPhoneNumber,
    };
    yield put({type: SET_USER_INFO, payload: newUserInfo});
    success(data.message);
  } catch (error) {
    failed(error);
  }
}

export function* userUpdateAddress({payload, success, failed}: TSaga) {
  try {
    const {data} = yield call(UserAPi.updateUserAddressAPI, payload);
    const existingUserInfo: AuthReducers['userInfo'] = yield select(
      (state: Reducers) => state.auth.userInfo,
    );
    const newUserInfo = {...existingUserInfo, address: payload.updatedAddress};
    yield put({type: SET_USER_INFO, payload: newUserInfo});
    success(data.message);
  } catch (error) {
    failed(error);
  }
}

export function* userUpdateStatus({payload, success, failed}: TSaga) {
  try {
    const {data} = yield call(UserAPi.updateUserStatusAPI, payload);
    const existingUserInfo: AuthReducers['userInfo'] = yield select(
      (state: Reducers) => state.auth.userInfo,
    );
    const newUserInfo = {...existingUserInfo, Status: payload.updatedStatus};
    yield put({type: SET_USER_INFO, payload: newUserInfo});
    success(data.message);
  } catch (error) {
    failed(error);
  }
}

function* userSaga() {
  yield takeEvery(USER_REGISTER, userRegister);
  yield takeEvery(USER_LOGIN, userLogin);
  yield takeEvery(USER_LOGOUT, userLogout);
  yield takeEvery(SEND_OTP, sendOTP);
  yield takeEvery(UPDATE_USER_EMAIL, userUpdateEmail);
  yield takeEvery(UPDATE_USER_TELEPHONE_NO, userUpdateTelephoneNo);
  yield takeEvery(UPDATE_USER_ADDRESS, userUpdateAddress);
  yield takeEvery(UPDATE_USER_STATUS, userUpdateStatus);
}

export default userSaga;

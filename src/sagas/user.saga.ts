import {put, takeEvery, call, select} from 'redux-saga/effects';
import {START_LOADING, END_LOADING, USER_REGISTER} from '../common/constants';

import UserAPi from '../apis/user.api';

export function* userRegister() {
  yield put({type: START_LOADING});
  console.log('fffff');
  try {
    const payload = {
      name: 'test',
      email: 'test@gmail.com',
      password: 'test!123',
      password_confirmation: 'test!123',
      mobile: '+94777123456',
    };
    const data = yield call(UserAPi.signUpAPI, payload);
    console.log(data, '111');
    yield put({type: END_LOADING});
  } catch (error) {
    console.log(error, 'ggg');
    yield put({type: END_LOADING});
  }
}

function* userSaga() {
  yield takeEvery(USER_REGISTER, userRegister);
}

export default userSaga;

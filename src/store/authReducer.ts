import {
  SET_USER_LOGIN,
  SET_AUTH_NULL,
  SET_AUTH_TOKEN,
  UPDATE_FIRST_TIME,
  SET_USER_INFO,
} from '../common/constants';
import {AuthReducers as AuthReducer} from '../types';

const initialState: AuthReducer = {
  isAuthenticated: false,
  isFirstTime: true,
  token: null,
  userInfo: null,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER_LOGIN:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    case SET_AUTH_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    case SET_AUTH_NULL:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
      };
    case UPDATE_FIRST_TIME:
      return {
        ...state,
        isFirstTime: action.payload,
      };
    default:
      return state;
  }
};

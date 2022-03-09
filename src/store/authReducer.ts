import {
  SET_USER_LOGIN,
  SET_AUTH_NULL,
  SET_AUTH_TOKEN,
} from '../common/constants';

const initialState = {
  isAuthenticated: false,
  token: null,
};

export default (state = initialState, action) => {
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
    case SET_AUTH_NULL:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
      };

    default:
      return state;
  }
};

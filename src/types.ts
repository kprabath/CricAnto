export interface Reducers {
  common: CommonReducer;
  auth: AuthReducers;
}

export interface CommonReducer {}
export interface AuthReducers {
  token: string | null;
  isFirstTime: boolean;
  isAuthenticated: boolean;
}

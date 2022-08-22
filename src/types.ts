export interface Reducers {
  common: CommonReducer;
  auth: AuthReducers;
}

export enum StatusTypes {
  INACTIVE = 'INACTIVE',
  ACTIVE = 'ACTIVE',
}

export enum UserType {
  PLAYERS = 'players',
  NORMMAL_USER = 'normal user',
  SCORERS = 'scorers',
  ADMIN = 'administrators',
  SELLERS = 'sellers',
  SHOP_ADMIN = 'shop admin',
}

export interface CommonReducer {}
export interface AuthReducers {
  token: string | null;
  isFirstTime: boolean;
  isAuthenticated: boolean;
  userInfo: {
    name: string;
    Status: StatusTypes;
    email: string;
    address: string;
    phoneNumber: string;
    userType: UserType;
  } | null;
}

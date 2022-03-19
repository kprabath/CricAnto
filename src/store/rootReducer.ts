import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import commonReducer from './commonReducer';
import authReducer from './authReducer';
// import userReducer from './userReducer';

const commonConfig = {
  key: 'common',
  storage: AsyncStorage,
  blacklist: ['loading'],
};

const authConfig = {
  key: 'auth',
  storage: AsyncStorage,
  //blacklist: ['common', 'user'],
};

// const userConfig = {
//   key: 'user',
//   storage: AsyncStorage,
//   whitelist: ['userId'], // only userId will be persisted
// };

const rootReducer = combineReducers({
  common: persistReducer(commonConfig, commonReducer),
  auth: persistReducer(authConfig, authReducer),
  // user: persistReducer(userConfig, userReducer),
});

export default rootReducer;

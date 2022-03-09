import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import commonReducer from './commonReducer';
import authReducer from './authReducer';
// import userReducer from './userReducer';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['common', 'user'],
};

const rootReducer = combineReducers({
  common: persistReducer(rootPersistConfig, commonReducer),
  auth: persistReducer(rootPersistConfig, authReducer),
  //user: persistReducer(rootPersistConfig, userReducer),
});

export default rootReducer;

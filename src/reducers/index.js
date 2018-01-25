// import { combineReducers } from 'redux';
import { REHYDRATE, PURGE, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // or whatever storage you are using
import SessionReducer from './SessionReducer';

const config = {
  key: 'primary',
  storage
};

const reducers = {
  SessionReducer
};
const rootReducer = persistCombineReducers(config, reducers)
export default rootReducer;

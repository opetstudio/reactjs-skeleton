
import { createStore, applyMiddleware, compose } from 'redux';
import { autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
// import { routerActions } from 'react-router-redux';
// import { AsyncStorage } from 'react-native';
import rootReducer from '../reducers';

const setupMiddleware = function () {
  // return [thunk];
  return [thunk, createLogger({ level: 'info', collapsed: true })];
};

const initialState = {};
export const configureStore = () => {
  const middleware = setupMiddleware();
  const enhancers = [];
  // Redux DevTools Configuration
  const actionCreators = {
    // ...routerActions
  };

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Options: http://zalmoxisus.github.io/redux-devtools-extension/API/Arguments.html
      actionCreators,
    })
    : compose;
  enhancers.push(applyMiddleware(...middleware));
  const enhancer = composeEnhancers(...enhancers);
  const store = createStore(rootReducer, initialState, enhancer);
  // persistStore(store, { storage: AsyncStorage }, () => {
  //   console.log('restored');
  // });
  return store;
};

// export { configureStore };

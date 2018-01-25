import React, { Component } from 'react';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';

import SlansaApp from './SlansaApp';
import logo from './logo.svg';
import './App.css';

const store = configureStore();
const persistor = persistStore(store);

class Root extends Component {
  render() {
    return (
      <Provider store={store} persistor={persistor}>
        <SlansaApp />
      </Provider>

    );
  }
}

export default Root;

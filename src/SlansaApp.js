import React, { Component } from 'react';
import {
  Route,
  // HashRouter,
  BrowserRouter
} from 'react-router-dom';

import SplashPage from './pages/SplashPage';
import HomePage from './pages/HomePage';


import logo from './logo.svg';
import './App.css';

class SlansaApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <Route path="/" component={Home} /> */}
          <Route exact path="/" component={SplashPage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/home/tes" component={SplashPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default SlansaApp;

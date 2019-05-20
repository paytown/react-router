import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Blue from './colors/Blue';
import Red from './colors/Red';
import Yellow from './colors/Yellow';
import Header from './Header';
import './style.css';

export default function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/red" component={Red} />
          <Route path="/blue" component={Blue} />
          <Route path="/yellow" component={Yellow} />
        </Switch>
      </>
    </Router>
  );
}

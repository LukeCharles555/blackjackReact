import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from './HomePage';
import GamePage from './GamePage';
import SettingsPage from './SettingsPage';

export default function Routing() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route path="/game" component={GamePage} />
          <Route path="/settings" component={SettingsPage} />
        </Switch>
      </Router>
    </div>
  );
}

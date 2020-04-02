import React from 'react';

import Main from './Main';
import Welcome from './Welcome';

import {
    Route,
    BrowserRouter as Router,
    Switch,
  } from 'react-router-dom'

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/welcome" component={Welcome} />
      </Switch>
    </div>
  </Router>
)

function Body() {
  return routing;
}

export default Body;
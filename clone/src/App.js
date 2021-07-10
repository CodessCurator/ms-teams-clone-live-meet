import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoMatch from './comp/NoMatch';
import CallPage  from './comp/CallPage';
import { HomePage } from './comp/HomePage';



import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/:id">
          <CallPage />
        </Route>
        <Route exact path="/">
          <HomePage />

        </Route>
        <Route path="*">
          <NoMatch />


        </Route>
      </Switch>
    </Router>


  );
}

export default App;




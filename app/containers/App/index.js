// @flow
import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import './style.scss';

function App() {
  return (
    <div className="app-wrapper">
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <br />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="" component={HomePage} />
      </Switch>
      <br />
    </div>
  );
}

export default App;

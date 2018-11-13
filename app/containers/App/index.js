// @flow
import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import './style.scss';

export default function App() {
  return (
    <div className="app-wrapper">
      <Helmet
        titleTemplate="%s - GifBattleZone"
        defaultTitle="GifBattleZone"
      >
        <meta name="description" content="Gif showdown." />
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

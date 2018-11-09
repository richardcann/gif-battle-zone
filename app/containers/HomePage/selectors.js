/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectUsername = () => createSelector(
  selectHome,
  (homeState) => homeState.get('username')
);

export const makeSelectSearch = () => createSelector(
  selectHome,
  (homeState) => homeState.get('search')
);

export const makeSelectBattleMode = () => createSelector(
  selectHome,
  (homeState) => homeState.get('battleMode')
);

export const makeSelectWinner = () => createSelector(
  selectHome,
  (homeState) => homeState.get('winner')
);

export const makeSelectChallenger = () => createSelector(
  selectHome,
  (homeState) => homeState.get('challenger')
);

export const makeSelectLoading = () => createSelector(
  selectHome,
  (homeState) => homeState.get('loading')
);

export const makeSelectError = () => createSelector(
  selectHome,
  (homeState) => homeState.get('error')
);

export const makeSelectGifs = () => createSelector(
  selectHome,
  (globalState) => globalState.getIn(['data', 'gifs'])
);

export {
  selectHome,
  makeSelectUsername,
};

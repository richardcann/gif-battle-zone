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

export const makeSelectAnimateLoss = () => createSelector(
  selectHome,
  (homeState) => homeState.get('animateLoss')
);

export const makeSelectRecommended = () => createSelector(
  selectHome,
  (homeState) => homeState.get('recommended')
);

export const makeSelectRating = () => createSelector(
  selectHome,
  (homeState) => homeState.get('currentRating')
);

export const makeSelectTrends = () => createSelector(
  selectHome,
  (homeState) => homeState.get('trends')
);

export const makeSelectHomeGifLeft = () => createSelector(
  selectHome,
  (homeState) => homeState.get('homeGifLeft')
);

export const makeSelectHomeGifRight = () => createSelector(
  selectHome,
  (homeState) => homeState.get('homeGifRight')
);

export const makeSelectGifs = () => createSelector(
  selectHome,
  (globalState) => globalState.getIn(['data', 'gifs'])
);

export {
  selectHome,
  makeSelectUsername,
};

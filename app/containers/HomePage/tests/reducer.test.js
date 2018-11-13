import { fromJS } from 'immutable';

import homeReducer from '../reducer';
import * as actions from '../actions';

describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      search: null,
      battleMode: false,
      winner: null,
      challenger: null,
      loading: false,
      animateLoss: false,
      error: false,
      recommended: null,
      currentRating: null,
      homeGifLeft: null,
      homeGifRight: null,
      trends: [],
      data: fromJS({
        gifs: false,
      })
    });
  });

  it('should return the initial state', () => {
    expect(homeReducer(undefined, {})).toEqual(state);
  });

  it('should set recommendations correctly', () => {
    const recommendations = ['dogs'];
    const expectedResult = state.set('recommended', recommendations);

    expect(homeReducer(state, actions.setRecommendations(recommendations))).toEqual(expectedResult);
  });

  it('should set rating correctly', () => {
    const rating = 2;
    const expectedResult = state.set('currentRating', rating);

    expect(homeReducer(state, actions.setRating(rating))).toEqual(expectedResult);
  });

  it('should set when to close error', () => {
    const expectedResult = state.set('error', false);

    expect(homeReducer(state, actions.closeError())).toEqual(expectedResult);
  });

  it('should set data after fetch', () => {
    const expectedResult = state.set('loading', false)
      .set('battleMode', true)
      .set('winner', 0)
      .set('currentRating', 2.5)
      .set('challenger', 1)
      .setIn(['data', 'gifs'], []);

    expect(homeReducer(state, actions.fetchSuccess([]))).toEqual(expectedResult);
  });

  it('should set search parameter', () => {
    const cat = 'cat';
    const expectedResult = state.set('search', cat);

    expect(homeReducer(state, actions.setCategory(cat))).toEqual(expectedResult);
  });

  it('should set who needs to be animated', () => {
    const loser = 1;
    const expectedResult = state.set('animateLoss', loser);

    expect(homeReducer(state, actions.animateLoss(loser))).toEqual(expectedResult);
  });

  it('should set error to the right message', () => {
    const err = { noData: true };
    const expectedResult = state.set('loading', false)
      .set('error', err);

    expect(homeReducer(state, actions.fetchFailure(err))).toEqual(expectedResult);
  });

  it('should set battle mode to true and have winner and challenger', () => {
    const champion = 0;
    const challenger = 2;
    const expectedResult = state.set('battleMode', true)
      .set('winner', champion)
      .set('animateLoss', false)
      .set('challenger', challenger);

    expect(homeReducer(state, actions.enterBattle(champion, challenger))).toEqual(expectedResult);
  });

  it('should exit battle', () => {
    const expectedResult = state.set('battleMode', false)
      .set('winner', null)
      .set('animateLoss', false)
      .set('challenger', null);

    expect(homeReducer(state, actions.exitBattle())).toEqual(expectedResult);
  });
});

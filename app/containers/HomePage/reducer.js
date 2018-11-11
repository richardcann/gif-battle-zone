/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import { CHANGE_USERNAME } from './constants';

// The initial state of the App
const initialState = fromJS({
  username: '',
  search: null,
  battleMode: false,
  winner: null,
  challenger: null,
  loading: false,
  animateLoss: false,
  error: false,
  data: {
    gifs: false,
  }
});

function homeReducer(state, action) {
  state = state || initialState;
  switch (action.type) {
    case 'SEARCH_CATEGORY':
      return state.set('loading', true)
        .set('error', false)
        .setIn(['data', 'gifs'], false);
      //return {...state, loading: true, error: false, data : {gifs: false}};
    case 'FETCH_SUCCESS':
      return state.set('loading', false)
        .set('battleMode', true)
        .set('winner', 0)
        .set('challenger', 1)
        .setIn(['data', 'gifs'], action.data);
      //return {...state, loading: false, battleMode: true, winner: 0, challenger: 1, data: {gifs: action.data}};
    case 'SET_CATEGORY':
      return state.set('search', action.category);
    case 'ANIMATE_LOSS':
      return state.set('animateLoss', action.loser);
      //return {...state, search: action.category};
    case 'FETCH_FAILURE':
      return state.set('loading', false)
        .set('error', action.err);
      //return {...state, loading:false, error: action.err};
    case 'ENTER_BATTLEMODE':
      return state.set('battleMode', true)
        .set('winner', action.champion)
        .set('animateLoss', false)
        .set('challenger', action.challenger);
      //return {...state, battleMode: true, winner: action.winner, challenger: action.challenger};
    case 'EXIT_BATTLEMODE':
      return state.set('battleMode', false)
        .set('winner', null)
        .set('animateLoss', false)
        .set('challenger', null);
      //return {...state, battleMode: false, winner: null, challenger: null};
    case CHANGE_USERNAME:
      // Delete prefixed '@' from the github username
      return state.set('username', action.name.replace(/@/gi, ''));
    default:
      return state;
  }
}

export default homeReducer;

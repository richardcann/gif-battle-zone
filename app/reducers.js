/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from 'redux-immutable';
import homeReducer from 'containers/HomePage/reducer';

export default function createReducer() {
  return combineReducers({
    home: homeReducer
  });
}

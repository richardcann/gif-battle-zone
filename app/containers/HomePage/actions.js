/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { CHANGE_USERNAME } from './constants';
import {setNewRating, getRecommendations} from 'utils/Recommender';
import request from 'utils/request';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function changeUsername(name) {
  return {
    type: CHANGE_USERNAME,
    name
  };
}

export function setCategory(category) {
  return {
    type: 'SET_CATEGORY',
    category
  };
}

export function enterBattle(champion, challenger) {
  return {
    type: 'ENTER_BATTLEMODE',
    champion,
    challenger
  };
}

export function exitBattle() {
  return {
    type: 'EXIT_BATTLEMODE',
  };
}

export function fetchSuccess(data) {
  return {
    type: 'FETCH_SUCCESS',
    data
  };
}

export function fetchFailure(err) {
  return {
    type: 'FETCH_FAILURE',
    err
  };
}

export function animateLoss(loser) {
  return {
    type: 'ANIMATE_LOSS',
    loser
  };
}

export function setRecommendations(recommendations) {
  return {
    type: 'SET_RECOMMENDATIONS',
    recommendations
  };
}

export function setRating(rating) {
  return {
    type: 'SET_RATING',
    rating
  };
}

export function closeError() {
  return {
    type: 'ERROR_CLOSE'
  };
}

export function addRating(rating, category) {
  return (dispatch) => {
    setNewRating(category, rating);
    const recommendations = getRecommendations();
    dispatch(setRecommendations(recommendations));
  };
}

export function setTrends(){
  return (dispatch) => {
    fetch('/twitter_trends', {
      method: 'GET',
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          response.json().then((res) => dispatch({type: 'SET_TRENDS', trends: res[0].trends}));
        }
      });
  };
}

export function setHomeGifLeft(){
  return (dispatch) => {
    const url = `http://api.giphy.com/v1/gifs/random?api_key=BP9gxNYx1AFHZ8aaT7uzm8GfkZJfAV8l`;
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          response.json().then((res) => {
            if(res.data) {
              dispatch({type: 'SET_HOMEGIFLEFT', gif: res.data.images.downsized});
            }
            else{
              throw new Error('No Gif Data');
            }
          });
        } else {
          const error = new Error(response.statusText);
          error.response = response;
          throw error;
        }
      });
  };
}

export function setHomeGifRight(){
  return (dispatch) => {
    const url = `http://api.giphy.com/v1/gifs/random?api_key=BP9gxNYx1AFHZ8aaT7uzm8GfkZJfAV8l`;
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          response.json().then((res) => {
            if(res.data) {
              dispatch({type: 'SET_HOMEGIFRIGHT', gif: res.data.images.downsized});
            }
            else{
              throw new Error('No Gif Data');
            }
          });
        } else {
          const error = new Error(response.statusText);
          error.response = response;
          throw error;
        }
      });
  };
}

export function searchCategory(category) {
  return (dispatch) => {
    dispatch(setCategory(category));
    const queryString = category.replace(' ', '+');
    let url = `http://api.giphy.com/v1/gifs/search?q=${queryString}&api_key=BP9gxNYx1AFHZ8aaT7uzm8GfkZJfAV8l`;
    if(queryString.toLowerCase() === 'trending'){
      url = `http://api.giphy.com/v1/gifs/trending?api_key=BP9gxNYx1AFHZ8aaT7uzm8GfkZJfAV8l`;
    }
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          response.json().then((res) => {
            if(res.data.length > 0){
              dispatch(fetchSuccess(res.data));
            }
            else{
              dispatch(fetchFailure({noData: true}));
            }
          });
        } else {
          const error = new Error(response.statusText);
          error.response = response;
          dispatch(fetchFailure(error));
          throw error;
        }
      });
  };
}

// @flow
import { setNewRating, getRecommendations } from 'utils/Recommender';
import type { GifData } from './types';

export function setCategory(category : string) {
  return {
    type: 'SET_CATEGORY',
    category
  };
}

export function enterBattle(champion : number, challenger : number) {
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

export function fetchSuccess(data : GifData) {
  return {
    type: 'FETCH_SUCCESS',
    data
  };
}

export function fetchFailure(err : {[string] : string | boolean}) {
  return {
    type: 'FETCH_FAILURE',
    err
  };
}

export function animateLoss(loser : boolean | number) {
  return {
    type: 'ANIMATE_LOSS',
    loser
  };
}

export function setRecommendations(recommendations : Array<string>) {
  return {
    type: 'SET_RECOMMENDATIONS',
    recommendations
  };
}

export function setRating(rating : number) {
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

export function addRating(rating : number, category : string) {
  return (dispatch) => {
    setNewRating(category, rating);
    const recommendations = getRecommendations();
    dispatch(setRecommendations(recommendations));
  };
}

export function setTrends() {
  return (dispatch) => {
    fetch('/twitter_trends', {
      method: 'GET',
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          response.json().then((res) => dispatch({ type: 'SET_TRENDS', trends: res[0].trends }));
        }
      });
  };
}

export function setHomeGifLeft() {
  return (dispatch) => {
    const url = 'http://api.giphy.com/v1/gifs/random?api_key=BP9gxNYx1AFHZ8aaT7uzm8GfkZJfAV8l';
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          response.json().then((res) => {
            if (res.data) {
              dispatch({ type: 'SET_HOMEGIFLEFT', gif: res.data.images.downsized });
            } else {
              throw new Error('No Gif Data');
            }
          });
        } else {
          throw new Error(response.statusText);
        }
      });
  };
}

export function setHomeGifRight() {
  return (dispatch) => {
    const url = 'http://api.giphy.com/v1/gifs/random?api_key=BP9gxNYx1AFHZ8aaT7uzm8GfkZJfAV8l';
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          response.json().then((res) => {
            if (res.data) {
              dispatch({ type: 'SET_HOMEGIFRIGHT', gif: res.data.images.downsized });
            } else {
              throw new Error('No Gif Data');
            }
          });
        } else {
          throw new Error(response.statusText);
        }
      });
  };
}

export function searchCategory(category : string) {
  return (dispatch) => {
    dispatch(setCategory(category));
    const queryString = category.replace(' ', '+');
    let url = `http://api.giphy.com/v1/gifs/search?q=${queryString}&api_key=bzLQOOhBEGrMA83RoiuCQPLsLRPNARQf&limit=5`;
    if (queryString.toLowerCase() === 'trending') {
      url = 'http://api.giphy.com/v1/gifs/trending?api_key=bzLQOOhBEGrMA83RoiuCQPLsLRPNARQf&limit=5';
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
            if (res.data.length > 0) {
              dispatch(fetchSuccess(res.data));
            } else {
              dispatch(fetchFailure({ noData: true }));
            }
          });
        } else {
          dispatch(fetchFailure({ fetchError: true }));
          throw new Error(response.statusText);
        }
      });
  };
}

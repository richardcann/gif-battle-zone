// @flow
import { setNewRating, getRecommendations } from 'utils/Recommender';
import * as consts from './constants';
import type { GifData } from './types';

export function setCategory(category : string) {
  return {
    type: consts.SET_CATEGORY,
    category
  };
}

export function enterBattle(champion : number, challenger : number) {
  return {
    type: consts.ENTER_BATTLEMODE,
    champion,
    challenger
  };
}

export function exitBattle() {
  return {
    type: consts.EXIT_BATTLEMODE,
  };
}

export function fetchSuccess(data : GifData) {
  return {
    type: consts.FETCH_SUCCESS,
    data
  };
}

export function fetchFailure(err : {[string] : string | boolean}) {
  return {
    type: consts.FETCH_FAILURE,
    err
  };
}

export function animateLoss(loser : boolean | number) {
  return {
    type: consts.ANIMATE_LOSS,
    loser
  };
}

export function setRecommendations(recommendations : Array<string>) {
  return {
    type: consts.SET_RECOMMENDATIONS,
    recommendations
  };
}

export function setRating(rating : number) {
  return {
    type: consts.SET_RATING,
    rating
  };
}

export function closeError() {
  return {
    type: consts.ERROR_CLOSE
  };
}

export function addRating(rating : number, category : string) {
  return (dispatch) => {
    setNewRating(category, rating);
    const recommendations = getRecommendations();
    dispatch(setRecommendations(recommendations));
  };
}

/*
Connecting to backend server to get the array of trends on twitter
 */
export function setTrends() {
  return (dispatch) => {
    fetch('/twitter_trends', {
      method: 'GET',
    })
      .then((response) => {
        console.log(response.text().then(res => console.log(res)));
        if (response.status >= 200 && response.status < 300) {
          response.json().then((res) => dispatch({ type: consts.SET_TRENDS, trends: res[0].trends }));
        }
      });
  };
}

export function setHomeGifLeft() {
  return (dispatch) => {
    const url = 'https://cors-anywhere.herokuapp.com/http://api.giphy.com/v1/gifs/random?api_key=PK45PN4PK2YjaUp2HUCfdwRJ30duCHEC';
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
              dispatch({ type: consts.SET_HOMEGIFLEFT, gif: res.data.images.downsized });
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
    const url = 'http://apgiphy.com/v1/gifs/random?api_key=PK45PN4PK2YjaUp2HUCfdwRJ30duCHEC';
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
              dispatch({ type: consts.SET_HOMEGIFRIGHT, gif: res.data.images.downsized });
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
    let url = `http://api.giphy.com/v1/gifs/search?q=${queryString}&api_key=p0m7nO5lSQbTJ26AQUWCCxGFqXo4GPeH&limit=5`;
    if (queryString.toLowerCase() === 'trending') {
      url = 'http://api.giphy.com/v1/gifs/trending?api_key=p0m7nO5lSQbTJ26AQUWCCxGFqXo4GPeH&limit=5';
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

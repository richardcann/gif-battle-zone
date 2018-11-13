import {
  SET_CATEGORY,
  ENTER_BATTLEMODE,
  EXIT_BATTLEMODE,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  ANIMATE_LOSS,
  SET_RECOMMENDATIONS,
  SET_RATING,
  ERROR_CLOSE
} from '../constants';
import * as actions from '../actions';

describe('Home Actions', () => {
  describe('setCategory', () => {
    it('set the search category', () => {
      const category = 'dogs';
      const expectedResult = {
        type: SET_CATEGORY,
        category
      };

      expect(actions.setCategory(category)).toEqual(expectedResult);
    });
  });

  describe('enterBattle', () => {
    it('set new winner and challenger', () => {
      const champion = 0;
      const challenger = 111;
      const expectedResult = {
        type: ENTER_BATTLEMODE,
        champion,
        challenger
      };

      expect(actions.enterBattle(champion, challenger)).toEqual(expectedResult);
    });
  });

  describe('exitBattle', () => {
    it('exits battle', () => {
      const expectedResult = {
        type: EXIT_BATTLEMODE,
      };

      expect(actions.exitBattle()).toEqual(expectedResult);
    });
  });

  describe('fetchSuccess', () => {
    it('sets data after being fetched', () => {
      const data = [{
        gifs: {
          images: {
            downiszed: {
              url: '', width: 0, height: 0, size: 0
            }
          }
        }
      }];
      const expectedResult = {
        type: FETCH_SUCCESS,
        data
      };

      expect(actions.fetchSuccess(data)).toEqual(expectedResult);
    });
  });

  describe('fetchFailure', () => {
    it('sets error on fetch failure', () => {
      const err = 'error';
      const expectedResult = {
        type: FETCH_FAILURE,
        err
      };

      expect(actions.fetchFailure(err)).toEqual(expectedResult);
    });
  });

  describe('animateLoss', () => {
    it('sets the loser to be animated', () => {
      const loser = 999;
      const expectedResult = {
        type: ANIMATE_LOSS,
        loser
      };

      expect(actions.animateLoss(loser)).toEqual(expectedResult);
    });
  });

  describe('setRecommendations', () => {
    it('sets the recommendations from experts', () => {
      const recommendations = ['dog'];
      const expectedResult = {
        type: SET_RECOMMENDATIONS,
        recommendations
      };

      expect(actions.setRecommendations(recommendations)).toEqual(expectedResult);
    });
  });

  describe('setRating', () => {
    it('sets the rating in current category', () => {
      const rating = 4;
      const expectedResult = {
        type: SET_RATING,
        rating
      };

      expect(actions.setRating(rating)).toEqual(expectedResult);
    });
  });

  describe('closeError', () => {
    it('closes the error when failure', () => {
      const expectedResult = {
        type: ERROR_CLOSE,
      };

      expect(actions.closeError()).toEqual(expectedResult);
    });
  });
});

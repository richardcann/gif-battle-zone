// @flow
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { searchCategory, setHomeGifLeft, setHomeGifRight, closeError, setTrends, enterBattle, exitBattle, animateLoss, setRecommendations, setRating, addRating } from './actions';
import * as selectors from './selectors';
import HomePage from './HomePage';

const mapDispatchToProps = (dispatch) => ({
  onSearchCategory: (category : string) => dispatch(searchCategory(category)),
  enterBattle: (contenders : {champion : number, challenger : number}) => dispatch(enterBattle(contenders.champion, contenders.challenger)),
  exitBattle: () => dispatch(exitBattle()),
  animateLoss: (loser : number | boolean) => dispatch(animateLoss(loser)),
  setRecommendations: (recommendations : Array<string>) => dispatch(setRecommendations(recommendations)),
  setRating: (rating : number) => dispatch(setRating(rating)),
  addRating: (rating : number, category : string) => dispatch(addRating(rating, category)),
  setTrends: () => dispatch(setTrends()),
  closeError: () => dispatch(closeError()),
  setHomeGifLeft: () => dispatch(setHomeGifLeft()),
  setHomeGifRight: () => dispatch(setHomeGifRight())
});

const mapStateToProps = createStructuredSelector({
  loading: selectors.makeSelectLoading(),
  error: selectors.makeSelectError(),
  battleMode: selectors.makeSelectBattleMode(),
  search: selectors.makeSelectSearch(),
  winner: selectors.makeSelectWinner(),
  challenger: selectors.makeSelectChallenger(),
  gifs: selectors.makeSelectGifs(),
  animatingLoss: selectors.makeSelectAnimateLoss(),
  recommended: selectors.makeSelectRecommended(),
  currentRating: selectors.makeSelectRating(),
  trends: selectors.makeSelectTrends(),
  homeGifLeft: selectors.makeSelectHomeGifLeft(),
  homeGifRight: selectors.makeSelectHomeGifRight()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(HomePage);
export { mapDispatchToProps };

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { searchCategory, setHomeGifLeft, setHomeGifRight, closeError, setTrends, enterBattle, exitBattle, animateLoss, setRecommendations, setRating, addRating } from './actions';
import * as selectors from './selectors';
import reducer from './reducer';
import HomePage from './HomePage';

const mapDispatchToProps = (dispatch) => ({
  onSearchCategory: (category) => dispatch(searchCategory(category)),
  enterBattle: (contenders) => dispatch(enterBattle(contenders.champion, contenders.challenger)),
  exitBattle: () => dispatch(exitBattle()),
  animateLoss: (loser) => dispatch(animateLoss(loser)),
  setRecommendations: (recommendations) => dispatch(setRecommendations(recommendations)),
  setRating: (rating) => dispatch(setRating(rating)),
  addRating: (rating, category) => dispatch(addRating(rating, category)),
  setTrends: () => dispatch(setTrends()),
  closeError: () => dispatch(closeError()),
  setHomeGifLeft: () => dispatch(setHomeGifLeft()),
  setHomeGifRight: () => dispatch(setHomeGifRight())
});

const mapStateToProps = createStructuredSelector({
  username: selectors.makeSelectUsername(),
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

const withReducer = injectReducer({ key: 'home', reducer });

export default compose(withReducer, withConnect)(HomePage);
export { mapDispatchToProps };

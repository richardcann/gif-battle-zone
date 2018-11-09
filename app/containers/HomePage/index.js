import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
/*import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError
} from 'containers/App/selectors';*/
import { loadRepos } from '../App/actions';
import { changeUsername, searchCategory, enterBattle, exitBattle } from './actions';
import * as selectors from './selectors';
import reducer from './reducer';
import saga from './saga';
import HomePage from './HomePage';

const mapDispatchToProps = (dispatch) => ({
  onChangeUsername: (evt) => dispatch(changeUsername(evt)),
  onSubmitForm: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadRepos());
  },
  onSearchCategory: (category) => dispatch(searchCategory(category)),
  enterBattle: (contenders) => dispatch(enterBattle(contenders.champion, contenders.challenger)),
  exitBattle: () => dispatch(exitBattle())

});

const mapStateToProps = createStructuredSelector({
  username: selectors.makeSelectUsername(),
  loading: selectors.makeSelectLoading(),
  error: selectors.makeSelectError(),
  battleMode: selectors.makeSelectBattleMode(),
  search: selectors.makeSelectSearch(),
  winner: selectors.makeSelectWinner(),
  challenger: selectors.makeSelectChallenger(),
  gifs: selectors.makeSelectGifs()
});

/*function mapStateToProps2(state) {
  // const { search, battleMode, winner, challenger } = state;
  return {
    ...state.home,
    mapStateToProps2
  };
}*/

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withSaga, withConnect)(HomePage);
//export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
export { mapDispatchToProps };

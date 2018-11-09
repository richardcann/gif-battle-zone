/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ReposList from 'components/ReposList';
import PopularGrid from 'containers/PopularGrid';
import BattleModal from 'components/BattleModal';
import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }
  onWin = (newWinner) => {
    if (this.props.challenger + 1 < this.props.gifs.length) {
      this.props.enterBattle({champion: newWinner, challenger: this.props.challenger + 1});
    } else {
      this.props.exitBattle();
    }
  };

  render() {
    const {
      onSearchCategory, battleMode, gifs, winner, challenger, enterBattle, exitBattle, onChangeUsername, username
    } = this.props;

    const winnerData = winner !== null ? {
      id: winner,
      img: gifs[winner].images.downsized
    } : null;
    const challengerData = challenger !== null ? {
      id: challenger,
      img: gifs[challenger].images.downsized
    } : null;
    return (
      <div>
        <PopularGrid onSearch={onSearchCategory} />
        <BattleModal visible={battleMode} onCancel={exitBattle} onWin={this.onWin} champion={winnerData} challenger={challengerData} />
      </div>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  repos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

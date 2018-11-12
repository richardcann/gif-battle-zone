/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */
import 'antd/lib/message/style/css';
import React from 'react';
import PropTypes from 'prop-types';
import PopularGrid from 'containers/PopularGrid';
import BattleModal from 'components/BattleModal';
import {getRecommendations} from 'utils/Recommender';
import {message} from 'antd';
import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
    const recommendations = getRecommendations();
    this.props.setRecommendations(recommendations);
    this.props.setTrends();
  }
  onWin = (newWinner) => {
      if (newWinner === this.props.winner) {
        this.props.animateLoss(this.props.challenger);
      } else {
        this.props.animateLoss(this.props.winner);
      }
  };

  setNewBattle = (newWinner) => {
    if (this.props.challenger + 1 < this.props.gifs.length) {
      this.props.enterBattle({champion: newWinner, challenger: this.props.challenger + 1});
    } else {
      this.props.exitBattle();
    }
  };

  render() {
    const {
      onSearchCategory, setRating, addRating, closeError, trends, error, search, currentRating, recommended, battleMode, gifs, winner, challenger, enterBattle, exitBattle, animatingLoss
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
      {error && error.noData ? (message.warning('There are no gifs for that category :(', 2.5, closeError)) : null}
        <div>
          <PopularGrid onSearch={onSearchCategory} recommended={recommended} trends={trends} />
          <BattleModal visible={battleMode} setRating={setRating} onCancel={() => {addRating(currentRating, search); exitBattle()}} newBattle={this.setNewBattle} animateLoss={animatingLoss} onWin={this.onWin} champion={winnerData} challenger={challengerData} />
        </div>
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

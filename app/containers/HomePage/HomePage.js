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
import { getRecommendations } from 'utils/Recommender';
import Header from 'components/Header';
import { message } from 'antd';
import './style.scss';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
    if(this.props.homeGifLeft === null){
      console.log('no left');
      this.props.setHomeGifLeft();
    }
    if(this.props.homeGifRight === null){
      console.log('no right');
      this.props.setHomeGifRight();
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

  onHomeWin = (newWinner) => {
    if(newWinner === 0){
      this.props.setHomeGifRight();
    }
    else if(newWinner === 1){
      this.props.setHomeGifLeft();
    }
  };

  setNewBattle = (newWinner) => {
    if (this.props.challenger + 1 < this.props.gifs.length) {
      this.props.enterBattle({ champion: newWinner, challenger: this.props.challenger + 1 });
    } else {
      this.props.exitBattle();
    }
  };

  render() {
    const {
      onSearchCategory, setRating, addRating, homeGifLeft, homeGifRight, closeError, trends, error, search, currentRating, recommended, battleMode, gifs, winner, challenger, enterBattle, exitBattle, animatingLoss
    } = this.props;

    const winnerData = battleMode && winner !== null ? {
      id: winner,
      img: gifs[winner].images.downsized
    } : null;
    const challengerData = battleMode && challenger !== null ? {
      id: challenger,
      img: gifs[challenger].images.downsized
    } : null;
    return (
      <div>
        <Header media={{left: homeGifLeft, right: homeGifRight}} onClick={(winner) => this.onHomeWin(winner)} />
      {/*{error && error.noData ? (message.warning('There are no gifs for that category :(', 2.5, closeError)) : null}*/}
        <div>
          <PopularGrid onSearch={onSearchCategory} recommended={recommended} trends={trends} />
          <BattleModal visible={battleMode} setRating={setRating} onCancel={() => { addRating(currentRating, search); exitBattle(); }} newBattle={this.setNewBattle} animateLoss={animatingLoss} onWin={this.onWin} champion={winnerData} challenger={challengerData} />
        </div>
      </div>
    );
  }
}

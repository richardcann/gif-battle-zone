// @flow
import React from 'react';
import PopularGrid from 'containers/PopularGrid';
import BattleModal from 'components/BattleModal';
import { getRecommendations } from 'utils/Recommender';
import Header from 'components/Header';
import './style.scss';
import type { HomePageProps } from './types';

export default class HomePage extends React.Component<HomePageProps> { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (this.props.homeGifLeft === null) {
      this.props.setHomeGifLeft();
    }
    if (this.props.homeGifRight === null) {
      this.props.setHomeGifRight();
    }
    const recommendations = getRecommendations();
    this.props.setRecommendations(recommendations);
    this.props.setTrends();
  }
  onWin = (newWinner : number) => {
    if (newWinner === this.props.winner) {
      this.props.animateLoss(this.props.challenger);
    } else {
      this.props.animateLoss(this.props.winner);
    }
  };

  onHomeWin = (newWinner : number) => {
    if (newWinner === 0) {
      this.props.setHomeGifRight();
    } else if (newWinner === 1) {
      this.props.setHomeGifLeft();
    }
  };

  setNewBattle = (newWinner : number) => {
    if (this.props.challenger + 1 < this.props.gifs.length) {
      this.props.enterBattle({ champion: newWinner, challenger: this.props.challenger + 1 });
    } else {
      this.props.exitBattle();
    }
  };

  render() {
    const {
      onSearchCategory,
      setRating,
      addRating,
      homeGifLeft,
      homeGifRight,
      closeError,
      trends,
      error,
      search,
      currentRating,
      recommended,
      battleMode,
      gifs,
      winner,
      challenger,
      exitBattle,
      animatingLoss
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
        <Header
          media={{ left: homeGifLeft, right: homeGifRight }}
          onClick={(newWinner) => this.onHomeWin(newWinner)}
          error={error}
          closeError={closeError}
        />
        <br />
        <div>
          <PopularGrid onSearch={onSearchCategory} recommended={recommended} trends={trends} />
          <BattleModal
            visible={battleMode}
            setRating={setRating}
            onCancel={() => { addRating(currentRating, search); exitBattle(); }}
            newBattle={this.setNewBattle}
            animateLoss={animatingLoss}
            onWin={this.onWin}
            champion={winnerData}
            challenger={challengerData}
          />
        </div>
      </div>
    );
  }
}

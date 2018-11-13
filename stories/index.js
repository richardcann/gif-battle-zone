// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CategoryButton from 'components/CategoryButton';
import SearchBar from 'components/SearchBar';
import DisplayCard from 'components/DisplayCard';
import BattleModal from 'components/BattleModal';

const winnerData = {
  id: 0,
  img: { url: 'https://media0.giphy.com/media/WyNx4ivhcTkRO/giphy-downsized.gif', height: 233, width: 350 }
};
const challengerData = {
  id: 1,
  img: {
    url: 'https://media1.giphy.com/media/WVveMIgdKyXVm/giphy-tumblr.gif',
    width: 250,
    height: 140,
  }
};
storiesOf('Button', module)
  .add('with text', () => (
    <CategoryButton onClick={action('clicked')} name="test buttton" />
  ));

storiesOf('SearchBar', module)
  .add('with text', () => (
    <SearchBar onClick={action('clicked')} placeholder="input text" />
  ));

storiesOf('DisplayCard', module)
  .add('gif', () => (
    <DisplayCard id={challengerData.id} url={challengerData.img.url} height={challengerData.img.height} width={challengerData.img.width} onClick={() => {}} />
  ))
  .add('other gif', () => (
    <DisplayCard id={winnerData.id} url={winnerData.img.url} height={winnerData.img.height} width={winnerData.img.width} onClick={() => {}} />
  ));

storiesOf('BattleModal', module)
  .add('modal', () => (
    <BattleModal visible onCancel={() => {}} onWin={() => {}} champion={winnerData} challenger={challengerData} />
  ));

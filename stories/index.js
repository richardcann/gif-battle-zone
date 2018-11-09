// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CategoryButton from '../app/components/CategoryButton';
import SearchBar from '../app/components/SearchBar';
import DisplayCard from '../app/components/DisplayCard';
import BattleModal from '../app/components/BattleModal';

const PirateCard = <DisplayCard url="https://media0.giphy.com/media/WyNx4ivhcTkRO/giphy-downsized.gif" height={233} width={350} />;
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
    <DisplayCard url="https://media0.giphy.com/media/WyNx4ivhcTkRO/giphy-downsized.gif" height={233} width={350} />
  ));

storiesOf('BattleModal', module)
  .add('modal', () => (
    <BattleModal visible={true} Champion={PirateCard} Challenger={PirateCard} />
  ));

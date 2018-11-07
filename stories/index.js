import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CategoryButton from '../app/components/CategoryButton';
import SearchBar from '../app/components/SearchBar';

storiesOf('Button', module)
  .add('with text', () => (
    <CategoryButton onClick={action('clicked')} name="test buttton" />
  ));

storiesOf('SearchBar', module)
  .add('with text', () => (
    <SearchBar onClick={action('clicked')} placeholder="input text" />
  ));

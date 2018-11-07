import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CategoryButton from '../app/components/CategoryButton';

storiesOf('Button', module)
  .add('with text', () => (
    <CategoryButton onClick={action('clicked')}>Hello Button</CategoryButton>
  ));

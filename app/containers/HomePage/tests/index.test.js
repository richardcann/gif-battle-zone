// @flow
import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../HomePage';

describe('<HomePage />', () => {
  it('should render HomePage Component', () => {
    const renderedComponent = shallow(
      <HomePage homeGifLeft={{ url: '' }} homeGifRight={{ url: '' }} setTrends={() => {}} setRecommendations={(val) => {}} />
    );
    expect(renderedComponent.length).toEqual(1);
  });
});

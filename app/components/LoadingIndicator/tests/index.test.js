// @flow
import React from 'react';
import { shallow } from 'enzyme';
import LoadingIndicator from '../index';

describe('<LoadingIndicator />', () => {
  it('should render loading divs', () => {
    const renderedComponent = shallow(<LoadingIndicator />);
    expect(renderedComponent.length).toEqual(1);
  });
});

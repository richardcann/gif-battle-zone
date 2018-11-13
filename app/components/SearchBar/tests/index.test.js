// @flow
import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../index';

describe('<SearchBar />', () => {
  it('should render search bar', () => {
    const renderedComponent = shallow(<SearchBar />);
    expect(renderedComponent.length).toEqual(1);
  });
});

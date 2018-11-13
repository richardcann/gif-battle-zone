// @flow
import React from 'react';
import { shallow } from 'enzyme';
import CategoryButton from '../index';


describe('<CategoryButton />', () => {
  it('should render a button', () => {
    const renderedComponent = shallow(<CategoryButton />);
    expect(renderedComponent.length).toEqual(1);
  });
});

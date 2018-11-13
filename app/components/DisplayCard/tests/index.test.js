// @flow
import React from 'react';
import { shallow } from 'enzyme';
import DisplayCard from '../index';


describe('<DisplayCard />', () => {
  it('should render a Card', () => {
    const renderedComponent = shallow(<DisplayCard id={0} url={''} />);
    expect(renderedComponent.length).toEqual(1);
  });
});

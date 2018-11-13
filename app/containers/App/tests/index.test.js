import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';

import App from '../index';

describe('<App />', () => {
  it('should render the app', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.length).toEqual(1);
  });

  it('should render 2 routes', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find(Route).length).toBe(2);
  });
});

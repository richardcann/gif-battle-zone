// @flow
import React from 'react';
import { shallow } from 'enzyme';

import Header from '../index';

describe('<Header />', () => {
  it('should render Header', () => {
    const renderedComponent = shallow(<Header media={{ left: { url: '' }, right: { url: '' } }} />);
    expect(renderedComponent.length).toEqual(1);
  });
});

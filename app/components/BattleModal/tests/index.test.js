// @flow
import React from 'react';
import { shallow } from 'enzyme';
import BattleModal from '../index';


describe('<BattleModal />', () => {
  it('should render a top div', () => {
    const renderedComponent = shallow(<BattleModal />);
    expect(renderedComponent.length).toEqual(1);
  });
});

// @flow
import 'antd/lib/message/style/css';
import React from 'react';
import DisplayCard from '../DisplayCard';
import './style.scss';
import type { HeaderProps } from './types';
import { message } from 'antd/lib/index';

class Header extends React.Component<HeaderProps> { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      media, onClick, error, closeError
    } = this.props;
    return (
      <div className="header">
        {error && error.noData ? (message.warning('There are no gifs for that category :(', 2.5, closeError)) : null}
        {media && media.left ? (<DisplayCard url={media.left.url} id={0} onClick={onClick} />) : null}
        <img className="BattleModal-versus" src="https://rsmconnect.com/wp-content/uploads/Icon-vs.png" />
        {media && media.right ? (<DisplayCard url={media.right.url} id={1} onClick={onClick} />) : null}
      </div>
    );
  }
}

export default Header;

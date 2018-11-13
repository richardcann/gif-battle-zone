// @flow
import React from 'react';
import DisplayCard from '../DisplayCard';
import './style.scss';

type MediaType = {
  left: {url : string},
  right: {url : string}
}

type HeaderProps = {
  media: MediaType,
  onClick: () => null
}
class Header extends React.Component<HeaderProps> { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { media, onClick } = this.props;
    return (
      <div className="header">
        {media && media.left ? (<DisplayCard url={media.left.url} id={0} onClick={onClick} />) : null}
        <img className="BattleModal-versus" src="https://rsmconnect.com/wp-content/uploads/Icon-vs.png" />
        {media && media.right ? (<DisplayCard url={media.right.url} id={1} onClick={onClick} />) : null}
      </div>
    );
  }
}

export default Header;

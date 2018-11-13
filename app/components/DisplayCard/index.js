// @flow
import 'antd/lib/card/style/css';
import React from 'react';
import { Card } from 'antd';
import LoadingIndicator from '../LoadingIndicator';
import './style.scss';
import type { DisplayProps, DisplayState } from './types';

export default class DisplayCard extends React.Component<DisplayProps, DisplayState> {
  constructor() {
    super();
    this.state = { loading: false };
  }

  componentDidUpdate(prevProps : DisplayProps, prevState : DisplayState) {
    if (!prevState.loading && prevProps.id !== this.props.id) {
      this.setState({ loading: true });
      setTimeout(
        () => {
          this.setState({ loading: false });
        },
        500
      );
    }
  }

  getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  render() {
    const {
      url, onClick, id, className, animationEnd
    } = this.props;
    const { loading } = this.state;
    const addedClassName = className || '';
    return (
      loading ? (<LoadingIndicator />) : (
        <Card
          hoverable
          style={{ background: this.getRandomColor() }}
          onClick={() => onClick(id)}
          className={`DisplayCard-card ${addedClassName}`}
          bodyStyle={{ padding: '1em', alignSelf: 'center' }}
          onAnimationEnd={(e) => {
            e.animationName === 'bounceOut' && animationEnd ? animationEnd() : null;
          }}
        >
          <img className="DisplayCard-media" alt="example" src={url} />
        </Card>
      )
    );
  }
}

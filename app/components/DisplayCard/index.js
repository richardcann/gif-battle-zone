// @flow
import 'antd/lib/card/style/css';
import React from 'react';
import { Card } from 'antd';
import LoadingIndicator from '../LoadingIndicator';
import './style.scss';

type DisplayProps = {
  url: string,
  height: number,
  width: number,
  id: number,
  onClick: (number) => null,
  className?: string
}

export default class DisplayCard extends React.Component<DisplayProps> {
  constructor() {
    super();
    this.state = { loading: false };
  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState) {
    if(!prevState.loading && prevProps.id !== this.props.id){
      this.setState({loading: true});
      setTimeout(
        function () {
          this.setState({loading: false});
        }
          .bind(this),
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
    const { url, width, height, onClick, id, className, animationEnd } = this.props;
    let {loading} = this.state;
    const addedClassName = className ? className : '';
    return (
        loading ? (<LoadingIndicator />) :
          <Card
            hoverable
            style={{background: this.getRandomColor()}}
            onClick={() => onClick(id)}
            className={`DisplayCard-card ${addedClassName}`}
            bodyStyle={{padding: '1em', alignSelf: 'center'}}
            onAnimationEnd={(e) => {
              e.animationName === 'bounceOut' ? animationEnd() : null
            }}
          >
            <img className="DisplayCard-media" alt="example" src={url}/>
          </Card>
    );
  }
}

// @flow
import 'antd/lib/card/style/css';
import React from 'react';
import { Card } from 'antd';

type DisplayProps = {
  url: string,
  height: number,
  width: number
}

export default function DisplayCard(props : DisplayProps) {
  const { url, width, height } = props;
  return (
    <Card
      hoverable
      style={{ width, height }}
      cover={<img alt="example" src={url} />}
    />
  );
}

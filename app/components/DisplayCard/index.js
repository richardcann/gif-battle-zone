// @flow
import 'antd/lib/card/style/css';
import React from 'react';
import { Card } from 'antd';

type DisplayProps = {
  url: string,
  height: number,
  width: number,
  id: number,
  onClick: (number) => null
}

export default function DisplayCard(props : DisplayProps) {
  const { url, width, height, onClick, id } = props;
  return (
    <Card
      hoverable
      style={{ width, height }}
      onClick={() => onClick(id)}
      cover={<img alt="example" src={url} />}
    />
  );
}

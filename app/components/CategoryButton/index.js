// @flow
import 'antd/lib/button/style/css';
import React from 'react';
import { Button } from 'antd';

type InputProps = {
  name: string,
  onClick: (string) => null
}

export default function CategoryButton(props : InputProps) {
  const { name, onClick } = props;
  return(
    <Button onClick={() => onClick(name)} type="dashed" size="large">
      {name}
    </Button>)
}

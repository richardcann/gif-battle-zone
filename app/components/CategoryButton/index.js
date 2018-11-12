// @flow
import 'antd/lib/button/style/css';
import React from 'react';
import { Button } from 'antd';

type InputProps = {
  name: string,
  onClick: (string) => null,
  displayName?: string
}

export default function CategoryButton(props : InputProps) {
  const { name, onClick, displayName } = props;
  return(
    <Button onClick={() => onClick(name)} type="dashed" size="large">
      {displayName ? displayName : name}
    </Button>)
}

// @flow
import 'antd/lib/button/style/css';
import React from 'react';
import { Button } from 'antd';

type InputProps = {
  name: string,
  onClick: (string) => null,
  displayName?: string,
  type?: string
}

export default function CategoryButton(props : InputProps) {
  const { name, onClick, displayName, type } = props;
  return(
    <Button onClick={() => onClick(name)} type={type ? type : "dashed"} size="large">
      {displayName ? displayName : name}
    </Button>)
}

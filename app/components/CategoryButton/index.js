// @flow
import 'antd/lib/button/style/css';
import React from 'react';
import { Button } from 'antd';

type InputProps = {
  name: string
}

export default function CategoryButton(props : InputProps) {
  const { name } = props;
  return(
    <Button type="dashed" size="large">
      {name}
    </Button>)
}

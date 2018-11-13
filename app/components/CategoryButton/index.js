// @flow
import 'antd/lib/button/style/css';
import React from 'react';
import { Button } from 'antd';
import type { InputProps } from './types';

export default function CategoryButton(props : InputProps) {
  const {
    name, onClick, displayName, type
  } = props;
  return (
    <Button onClick={() => onClick(name)} type={type || 'dashed'} size="large">
      {displayName || name}
    </Button>);
}

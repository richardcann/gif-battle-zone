import 'antd/lib/rate/style/css';
import React from 'react';
import { Rate } from 'antd';

export default function Rater(props) {
  return (
    <Rate allowHalf defaultValue={2.5} />
  );
}

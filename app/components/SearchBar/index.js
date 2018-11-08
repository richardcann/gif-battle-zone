// @flow
import 'antd/lib/input/style/css';
import React from 'react';
import { Input } from 'antd';

const Search = Input.Search;

type BarProps = {
  placeholder: string
}

export default function SearchBar(props : BarProps) {
  const { placeholder } = props;
  return (
    <Search
      placeholder={placeholder}
      onSearch={(value) => console.log(value)}
      enterButton
    />);
}

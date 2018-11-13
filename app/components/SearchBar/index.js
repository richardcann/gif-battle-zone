// @flow
import 'antd/lib/input/style/css';
import React from 'react';
import { Input } from 'antd';

const Search = Input.Search;

type BarProps = {
  placeholder: string,
  onSearch: (string) => null
}

export default function SearchBar(props : BarProps) {
  const { placeholder, onSearch } = props;
  return (
    <Search
      placeholder={placeholder}
      onSearch={onSearch}
      enterButton
    />);
}

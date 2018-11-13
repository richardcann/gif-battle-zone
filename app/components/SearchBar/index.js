// @flow
import 'antd/lib/input/style/css';
import React from 'react';
import { Input } from 'antd';
import type { BarProps } from './types';

const Search = Input.Search;

export default function SearchBar(props : BarProps) {
  const { placeholder, onSearch } = props;
  return (
    <Search
      placeholder={placeholder}
      onSearch={onSearch}
      enterButton
    />);
}

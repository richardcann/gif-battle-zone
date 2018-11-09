import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';
import React from 'react';
import { Row, Col } from 'antd';
import SearchBar from 'components/SearchBar';
import CategoryButton from 'components/CategoryButton';

export default function PopularGrid(props) {
  const { searchValue, onSearch } = props;
  const defaultCats = ['cat', 'football', 'chuck norris', 'sesh', 'yas'];
  return (
    <div>
      <Row>
        <Col span={12} offset={6}><SearchBar placeholder="Search for a fun category" value={searchValue} onSearch={onSearch} /></Col>
      </Row>
      <br />
      <Row type="flex" justify="space-between">
        <Col span={4}><CategoryButton name={defaultCats[0]} /></Col>
        <Col span={4}><CategoryButton name={defaultCats[1]} /></Col>
        <Col span={4}><CategoryButton name={defaultCats[2]} /></Col>
      </Row>
      <Row type="flex" justify="space-around">
        <Col span={4}><CategoryButton name={defaultCats[3]} /></Col>
        <Col span={4}><CategoryButton name={defaultCats[4]} /></Col>
      </Row>
    </div>);
}

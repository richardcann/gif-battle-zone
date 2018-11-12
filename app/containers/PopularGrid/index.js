import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';
import React from 'react';
import { Row, Col } from 'antd';
import SearchBar from 'components/SearchBar';
import CategoryButton from 'components/CategoryButton';

export default function PopularGrid(props) {
  const { searchValue, onSearch, recommended, trends } = props;
  console.log(trends);

  const parseString = (word) =>{
    if(word.charAt(0) === '#'){
      word = word.slice(1);
      for(let i = 0; i < word.length-1; i++){
        const currentChar = word.charAt(i);
        const nextChar = word.charAt(i+1);
        if (currentChar === currentChar.toLowerCase()){
          if( nextChar === nextChar.toUpperCase()){
            word = word.slice(0, i+1) + ' ' + word.slice(i+1);
            i++;
          }
        }
        else if(!isNaN( currentChar * 1)){
          if( nextChar === nextChar.toUpperCase() || nextChar === nextChar.toLowerCase()){
            word = word.slice(0, i+1) + ' ' + word.slice(i+1);
            i++;
          }
        }
      }
    }
    return word;
  };
  return (
    <div>
      <Row>
        <Col span={12} offset={6}><SearchBar placeholder="Search for a fun category" value={searchValue} onSearch={onSearch} /></Col>
      </Row>
      <br />
      {recommended ? (
        <div>
          <Row type="flex" justify="space-between">
            <Col span={4}><CategoryButton name={recommended[0]} onClick={onSearch} /></Col>
            <Col span={4}><CategoryButton name={recommended[1]} onClick={onSearch} /></Col>
            <Col span={4}><CategoryButton name={recommended[2]} onClick={onSearch} /></Col>
          </Row>
          <Row type="flex" justify="space-around">
            <Col span={4}><CategoryButton name={recommended[3]} onClick={onSearch} /></Col>
            <Col span={4}><CategoryButton name={recommended[4]} onClick={onSearch} /></Col>
          </Row>
        </div>
      ): null}
      {trends && trends.length > 5 ? (
        <div>
          <Row type="flex" justify="space-between">
            <Col span={4}><CategoryButton displayName={trends[0].name} name={parseString(trends[0].name)} onClick={onSearch} /></Col>
            <Col span={4}><CategoryButton displayName={trends[1].name} name={parseString(trends[1].name)} onClick={onSearch} /></Col>
            <Col span={4}><CategoryButton displayName={trends[2].name} name={parseString(trends[2].name)} onClick={onSearch} /></Col>
          </Row>
          <Row type="flex" justify="space-around">
            <Col span={4}><CategoryButton displayName={trends[3].name} name={parseString(trends[3].name)} onClick={onSearch} /></Col>
            <Col span={4}><CategoryButton displayName={trends[4].name} name={parseString(trends[4].name)} onClick={onSearch} /></Col>
          </Row>
        </div>
      ): null}
    </div>);
}

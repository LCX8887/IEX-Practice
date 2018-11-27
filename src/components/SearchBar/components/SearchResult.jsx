import React from 'react';
import { List } from 'antd';
import { Link } from 'react-router-dom';

const SearchResult = ({ searchResult,searchResultClassName,handleSelectSymbol }) => {
    return (
            <List className={searchResultClassName}
                itemLayout="horizontal"
                dataSource={searchResult}
                renderItem={item => (<List.Item onClick={handleSelectSymbol}><Link rel={item.symbol} to={`/stocks/${item.symbol}`}>{item.symbol}-{item.name}</Link></List.Item>)}    
               
            />
    )
}
export default SearchResult;
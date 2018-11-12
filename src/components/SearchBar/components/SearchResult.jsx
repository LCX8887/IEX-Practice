import React from 'react';
import { List } from 'antd';

const SearchResult = ({ searchResult,searchResultClassName }) => {
    return (
            <List className={searchResultClassName}
                itemLayout="horizontal"
                dataSource={searchResult}
                renderItem={item => (<List.Item>{item.symbol}-{item.name}</List.Item>)}    
               
            />
    )
}
export default SearchResult;
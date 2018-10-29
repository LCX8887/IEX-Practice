import React from 'react';

const SearchResult = ({ searchResult }) => {
    return (
        <div>
            <ul id='searchResultList'>
                {searchResult.map(item => <li key={item.iexId}>{item.symbol}-{item.name}</li>)}
            </ul>
        </div>
    )
}
export default SearchResult;
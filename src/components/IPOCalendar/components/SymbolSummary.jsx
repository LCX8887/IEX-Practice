import React from 'react';

const SymbolSummary = ({ symbol,name,price,change }) => {
    return (
        <div className='symbolSummary'>
            <div>
                <h3>{symbol}</h3>
                <h3>{name}</h3>
            </div>
            <div>
                <p>{price}</p>
                <p>{change}</p>
            </div>
        </div>
    )
}
export default SymbolSummary;
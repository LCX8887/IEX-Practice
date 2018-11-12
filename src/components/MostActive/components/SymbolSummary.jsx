import React from 'react';
import { Card } from 'antd';
import classNames from 'classnames'

const SymbolSummary = ({ symbol,name,price,change }) => {
    const title = <div><p>{symbol}</p><p>{name}</p></div>;
    var changePercent = (change*100).toFixed(2)+'%';
    var changePercentClassName= classNames({
        'green': change > 0,
        'red':change < 0,
      });
    return (
        // <div className='SymbolSummary'>
        //     <div>
        //         <h3>{symbol}</h3>
        //         <p>{name}</p>
        //     </div>
        //     <div>
        //         <p>{price}</p>
        //         <p>{change}</p>
        //     </div>
        // </div>
        <Card className='SymbolSummary' title={title} bordered={false} hoverable={true}>
            <p>{price}</p><p className={changePercentClassName}>{changePercent}</p>
        </Card>
    )
}
export default SymbolSummary;
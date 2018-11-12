import React from 'react';
import { Card,Row,Col } from 'antd';
import classNames from 'classnames';

const SectorSummary = ({ name,performance,background }) => {
    var performancePercent = (performance*100).toFixed(2)+'%';
    var performancePercentClassName= classNames({
        'green': performance > 0,
        'red':performance < 0,
      });
    return (

        <Card className='SectorSummary'
        hoverable={true}
        cover={<img src={background} />}
        >
        <p>{name}</p>        
        <p className={performancePercentClassName}>{performancePercent}</p>
        </Card>
    )
}
export default SectorSummary;
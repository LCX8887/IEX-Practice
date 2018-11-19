import React from 'react';
import { Row,Col,Icon } from 'antd';
const SymbolHeaderBoard = ({ companyName,symbol,close,change,changePercent,latestTime,extendedPrice,extendedChange,extendedChangePercent,openTime,previousClose,triggerWatchList,theme,
                            changeClassName,extendedChangeClassName }) => {
    return(
        <div className='SymbolHeaderBoard'>
            <div className='name'>
                <b>{companyName}</b>
                <p>{symbol}</p>
                <button onClick={triggerWatchList}><Icon type="star" theme={theme}/></button>
            </div>
            <div className='change'>
                <b>{close}</b>
                <p className={changeClassName}>{change}</p>
                <p className={changeClassName}>{changePercent}</p>
            </div>
            <p>Close as of {latestTime}</p>
            <div className='changePercent'>            
                <b>{extendedPrice}</b>
                <p className={extendedChangeClassName}>{extendedChange}</p>
                <p className={extendedChangeClassName}>{extendedChangePercent}</p>
            </div>
            <p className='afterHours'>After hours price as of 08:59 am.</p>
            <div className='previousClose'>
                <p>Previous Close</p>
                <b>{previousClose}</b>
            </div>
     </div>
    )
}

export default SymbolHeaderBoard;
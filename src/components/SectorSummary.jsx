import React from 'react';

const SectorSummary = ({ name,performance,background }) => {
    var performancePercent = (performance*100).toFixed(2)+'%';
    return (
       
        <div className='sectorSummary' style={{backgroundImage: `url(${background})`}}>           
            <p>{name}</p>        
            <p>{performancePercent}</p>            
        </div>
    )
}
export default SectorSummary;
import React from 'react';

const SectorSummary = ({ name,performance,background }) => {
    return (
        <div className='sectorSummary' style={{backgroundImage: `url(${background})`}}>
            <div>
                <h3>{name}</h3>
            </div>
            <div>
                <h3>{performance}</h3>
            </div>
        </div>
    )
}
export default SectorSummary;
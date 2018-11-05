import {SearchBar,SectorHighLights,SectorPerformance,MostActive,IPO,SpecialList } from '../../../components/index';

import React, { Component } from 'react';


class MarketView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };  
    
    }
    render() {    
        return (
            <div>
                <SearchBar />
                <MostActive />
                <SectorHighLights />
                <IPO />
                <SectorPerformance />
                <SpecialList />
            </div>
        );
    }
}


export default MarketView;

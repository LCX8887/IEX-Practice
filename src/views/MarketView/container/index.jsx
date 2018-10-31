import {SearchBar,SectorHighLights,SectorPerformance,MostActive } from '../../../components/index';

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
                <SectorPerformance />
            </div>
        );
    }
}


export default MarketView;

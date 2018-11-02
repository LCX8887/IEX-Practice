import {SearchBar,SectorHighLights,SectorPerformance,MostActive,IPOCalendar,IPOToday } from '../../../components/index';

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
                <IPOCalendar />
                <IPOToday />
                <SectorPerformance />
            </div>
        );
    }
}


export default MarketView;

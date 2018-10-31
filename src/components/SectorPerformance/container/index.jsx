import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import SectorSummary from '../../SectorSummary';


class SectorPerformance extends Component {
    constructor(props) {
        super(props);
        this.state = {
           backgroundPreFix: 'https://iextrading.com/images/stocks/',
           backgroundSufFix: '.jpg',

        };  
       
    }

    render() {
        
       const { sectors } = this.props;
       const { backgroundPreFix,backgroundSufFix } = this.state;
       var sectorsWithBackground = [];
      
       for(var i=0;i<sectors.length;i++){
           sectorsWithBackground[i] = Object.assign({},sectors[i]);
           var name = sectors[i].name.replace(' ','%20');           
           sectorsWithBackground[i].background = backgroundPreFix+name+backgroundSufFix;
       }
       
        return (
            <div>
               {sectorsWithBackground.map((sector,index) => <SectorSummary
                                            key = {index} 
                                            name = {sector.name}
                                            performance = {sector.performance}
                                            background = {sector.background} />)}
            </div>
        );
    }
}


const mapStateToProps = state => ({
    sectors:state.SectorPerformanceReducer.sectors,
});


SectorPerformance.propTypes = {

}
SectorPerformance.defaultProps = {
    
}

export default connect(
  mapStateToProps,
)(SectorPerformance);

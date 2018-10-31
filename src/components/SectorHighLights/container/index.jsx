import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchPosts } from '../flow/actions';
import SectorSummary from '../../SectorSummary';




class sectorHighLights extends Component {
    constructor(props) {
        super(props);
        this.state = {
           backgroundPreFix: 'https://iextrading.com/images/stocks/',
           backgroundSufFix: '.jpg',

        };  
       
    }
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchPosts());
    }
    
    render() {
        
       const { sectors } = this.props;
       const { backgroundPreFix,backgroundSufFix } = this.state;      
     
       var highestPerformance={};
       var lowestPerformance={};
       var sectorHighLights = [];
       for(var i=0;i<sectors.length;i++){
            var name = sectors[i].name.replace(' ','%20');
            var background = backgroundPreFix+name+backgroundSufFix;
           if(i===0){
            highestPerformance = Object.assign({},sectors[i]);
            highestPerformance.background = background;
            lowestPerformance = Object.assign({},sectors[i]);
            lowestPerformance.background = background;
           }
           if(sectors[i].performance > highestPerformance.performance){
               highestPerformance = Object.assign({},sectors[i]);                         
               highestPerformance.background = background;
           }
           if(sectors[i].performance < lowestPerformance.performance) {
               lowestPerformance = Object.assign({},sectors[i]);     
               lowestPerformance.background = background;
           }
           
        }
       
       sectorHighLights.push(highestPerformance);
       sectorHighLights.push(lowestPerformance);
        return (
            <div>
               {sectorHighLights.map((sector,index) => <SectorSummary
                                            key={index} 
                                            name = {sector.name}
                                            performance = {sector.performance}
                                            background = {sector.background} 
                />)}
            </div>
        );
    }
}


const mapStateToProps = state => ({
    sectors:state.SectorPerformanceReducer.sectors,
});


sectorHighLights.propTypes = {

}
sectorHighLights.defaultProps = {

}

export default connect(mapStateToProps)(sectorHighLights);

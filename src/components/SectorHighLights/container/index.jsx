import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchSectors } from '../flow/actions';
import SectorSummary from '../../SectorSummary';
import { Layout,Row,Col } from 'antd';

const bgSrcPrefix = 'https://iextrading.com/images/stocks/';
const bgSrcSuffix = '.jpg';

class SectorHighLights extends Component {
    constructor(props) {
        super(props);
        this.getSrcByName = this.getSrcByName.bind(this);   
      
    }
    componentDidMount() {
        this.props.fetchSectors();
    }
    getSrcByName = (str) => {
        const name = str.replace(' ','%20');
        return bgSrcPrefix+name+bgSrcSuffix;
    }
    
    render() {
        
        const { sectors,lastUpdated } = this.props;
        const day = new Date(lastUpdated).toDateString();
        const time= new Date(lastUpdated).toTimeString().slice(0,8);
        const updatedTime = day+','+time;

        const lowest = sectors.sort((s1,s2) => s1.performance-s2.performance)[0];       
        const highest = sectors.sort((s1,s2) => s2.performance-s1.performance)[0];
    
        return (
            <div className='SectorHighLights'>
                <div className='SectorHighLightsHeader'>
                    <h2>Sector HighLights</h2>
                    <p>{updatedTime}</p>
                </div>
                <div className='MostActiveContent'>
                    <Row className='SectorHighLights' type='flex' justify='start' gutter={24}>
                        {[highest,lowest].filter(sector => !!sector).map((sector,index) => 
                            <Col key={index} span={10}>
                                <SectorSummary                                                                                    
                                    name = {sector.name}
                                    performance = {sector.performance}
                                    background = {this.getSrcByName(sector.name)} 
                                />
                            </Col>
                        )}
                    </Row>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    sectors:state.SectorPerformanceReducer.sectors,
    lastUpdated:state.SectorPerformanceReducer.lastUpdated,
});
const mapDispatchToProps = {
    fetchSectors,
}

SectorHighLights.propTypes = {

}
SectorHighLights.defaultProps = {

}

export default connect(mapStateToProps,mapDispatchToProps)(SectorHighLights);
